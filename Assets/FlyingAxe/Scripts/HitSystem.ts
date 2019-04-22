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

                if (hit.allowImpulse) {
                    let impulse = new ut.Physics2D.AddImpulse2D();
                    impulse.impulse = hit.Impulse;
                    console.log("Applied impulse from hit, force:", hit.ImpulseForce);
                    console.log("Applied impulse from hit, vector:", hit.Impulse);
                    
                    this.world.addComponentData(entity, impulse);
                }
                
                this.world.removeComponent(entity, game.Hit);
            });
        }
    }
}
