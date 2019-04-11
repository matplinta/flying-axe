namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeAfter(AxeCollisionSystem)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Hit)
    export class HitSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Health, game.Hit], (health, hit) => {
                health.current = Math.max(0, health.current - hit.Damage);
            });

            this.world.forEach([game.Hit, ut.Entity], (hit, entity) => {
                this.world.removeComponent(entity, game.Hit);
            });
        }
    }
}
