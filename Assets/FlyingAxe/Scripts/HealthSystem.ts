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
                    HealthSystem.Die(this.world, entity, 0.1);
                }
            });
        }


        static Die(world: ut.World, entity: ut.Entity, dyingTime: number) {
            if (!world.hasComponent(entity, game.Dead)) {
                let dead = new game.Dead();
                dead.elapsedTime = 0;
                dead.dyingTime = dyingTime;
                world.addComponentData(entity, dead);
            }

            if (world.hasComponent(entity, ut.HitBox2D.RectHitBox2D)) {
                world.removeComponent(entity, ut.HitBox2D.RectHitBox2D);
            }
        }

        static AddHealth(world: ut.World, entity: ut.Entity, amount: number) {

            let health = world.getComponentData(entity, game.Health);
            health.current = Math.min(health.current + amount, health.max);
            world.setComponentData(entity, health);
        }
    }
}
