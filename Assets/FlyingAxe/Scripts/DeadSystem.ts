/// <reference path="HealthSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeEnd)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.EnemyTag, game.Dead], (enemy, dead) => {
                ScoreSystem.AddScore(this.world, 10);
            });

            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                if (this.world.exists(entity)) {

                    let axe = ut.Core2D.TransformService.getChild(this.world, entity, 0);

                    if (this.world.exists(axe) && axe.index != ut.NONE.index) {
                        WeaponService.DropWeapon(this.world, axe);
                    }

                    if (!this.world.hasComponent(entity, ut.Disabled)) {
                        this.world.addComponent(entity, ut.Disabled);
                    }

                }
            });
        }
    }
}