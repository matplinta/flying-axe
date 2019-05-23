namespace game {

    import Color = ut.Core2D.Color;

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeAfter(AxeCollisionSystem)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Hit)
    export class HitSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.Health, game.Hit], (health, hit) => {
                health.current = Math.max(0, health.current - hit.Damage);
            });
            this.world.forEach([game.Hit, game.PlayerTag], (hit, player) => {
                this.world.forEach([game.DamageVignette], damageVignette => {
                    damageVignette.ElapsedTime = 0;

                });

            });
            this.world.forEach([game.Hit, ut.Entity], (hit, entity) => {

                if (hit.allowImpulse) {
                    let impulse = new ut.Physics2D.AddImpulse2D();
                    impulse.impulse = hit.Impulse;
                    this.world.setOrAddComponentData(entity, impulse);
                    // if (this.world.hasComponent(entity, ut.Physics2D.AddImpulse2D)) {
                    //     this.world.setComponentData(entity, impulse);
                    // } else {
                    //     this.world.addComponentData(entity, impulse);
                    // }
                }
                this.world.removeComponent(entity, game.Hit);
            });
        }
    }
}
