/// <reference path="HealthSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeEnd)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.EnemyTag, game.Dead], (enemy, dead) => {
                if (dead.elapsedTime == 0) {
                    ScoreSystem.AddScore(this.world, enemy.killReward);
                }
            });

            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                if (this.world.exists(entity)) {

                    let weapon = ut.Core2D.TransformService.getChild(this.world, entity, 0);

                    if (this.world.exists(weapon) && weapon.index != ut.NONE.index && this.world.hasComponent(weapon, game.Weapon)) {
                        WeaponService.DropWeapon(this.world, weapon);
                    }

                    if (dead.elapsedTime == 0) {
                        if (this.world.hasComponent(entity, game.Animation)) {
                            AnimationSystem.PlayOneShot(this.world, entity, .86, 1);
                        }
                    }

                    if (dead.elapsedTime >= dead.dyingTime) {
                        GameService.setEntityEnabled(this.world, entity, false);
                    }
                    dead.elapsedTime += this.scheduler.deltaTime();
                    
                    // if (!this.world.hasComponent(entity, ut.Disabled)) {
                    //     this.world.removeComponent(entity, ut.Physics2D.BoxCollider2D)
                    //     this.world.addComponent(entity, ut.Disabled);
                    // }

                }
            });
        }
    }
}