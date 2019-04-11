/// <reference path="HealthSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.executeAfter(HealthSystem)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                let axe = ut.Core2D.TransformService.getChild(this.world, entity, 0);
                if (axe.index != ut.NONE.index) {

                    WeaponService.DropWeapon(this.world, axe);
                }
                this.world.destroyEntity(entity);
            });
        }
    }
}