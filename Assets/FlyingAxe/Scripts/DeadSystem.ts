/// <reference path="HealthSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeEnd)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.EnemyTag, game.Dead], (enemy, dead) => {
                ScoreSystem.AddScore(this.world, enemy.killReward);
            });

            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                if (this.world.exists(entity)) {

                    let axe = ut.Core2D.TransformService.getChild(this.world, entity, 0);

                    if (this.world.exists(axe) && axe.index != ut.NONE.index) {
                        WeaponService.DropWeapon(this.world, axe);
                    }

                    GameService.setEntityEnabled(this.world, entity, false);

                }
            });
        }
    }
}