namespace game {


    export class AnimationSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.HealthPotion, game.Animation, ut.Entity], (healthPotion, animation, entity) => {
                if (this.world.hasComponent(entity, game.PlayOneShot))
                    return;
                AnimationSystem.PlayAnimation(this.world, animation, 0);

            });


            this.world.forEach([ut.Entity, game.PlayOneShot], (entity, oneShot) => {
                oneShot.TimePlayed += this.scheduler.deltaTime();
                if (oneShot.TimePlayed >= oneShot.Length)
                    this.world.removeComponent(entity, game.PlayOneShot);
            });
        }

        static PlayOneShot(world: ut.World, entity: ut.Entity, length: number, state: number) {
            if (world.hasComponent(entity, game.PlayOneShot)) {
                let oneShot = world.getComponentData(entity, game.PlayOneShot);
                oneShot.TimePlayed = 0;
                oneShot.Length = length;
                world.setComponentData(entity, oneShot);
                let anim = world.getComponentData(entity, game.Animation);
                this.PlayAnimation(world, anim, state, true);
                world.setComponentData(entity, anim);
                return;
            }
            let oneShot = new game.PlayOneShot;
            oneShot.Length = length;
            world.addComponentData(entity, oneShot);
            let anim = world.getComponentData(entity, game.Animation);
            this.PlayAnimation(world, anim, state, true);
            world.setComponentData(entity, anim);
        }

        static PlayAnimation(world: ut.World, animations: game.Animation, state: number, override: boolean = false) {
            if ((override == false && animations.State == state))
                return;
            animations.State = state;
            let animation: ut.Entity = null;
            animation = animations.Animations[state];

            this.ResetAnimationTime(world, animation);
            for (let i = 0; i < animations.Animations.length; i++) {
                GameService.setEntityEnabled(world, animations.Animations[i], state == i);
            }
        }

        static ResetAnimationTime(world: ut.World, animation: ut.Entity) {
            let sequencePlayer = world.getComponentData(animation, ut.Core2D.Sprite2DSequencePlayer);
            sequencePlayer.time = 0;
            sequencePlayer.paused = false;
            world.setComponentData(animation, sequencePlayer);
        }

        static DisableAnimations(world: ut.World, animations: game.Animation): void {

            for (let i = 0; i < animations.Animations.length; i++) {
                GameService.setEntityEnabled(world, animations.Animations[i], false);
            }

        }


    }
}
