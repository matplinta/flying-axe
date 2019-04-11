/// <reference path="HitSystem.ts"/>
namespace game {
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.executeAfter(HitSystem)
    @ut.requiredComponents(game.Health)
    export class HealthSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Health, ut.Entity], (health, entity) => {
                
                if (health.current <= 0) {
                    if (!this.world.hasComponent(entity, game.Dead)) {
                        this.world.addComponent(entity, game.Dead);
                    }
                }
            });
        }
    }
}
