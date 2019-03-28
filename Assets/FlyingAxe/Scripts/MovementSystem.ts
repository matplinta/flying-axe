namespace game {
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class MovementSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.MovementSpeed,
                game.Input,
                ut.Physics2D.Velocity2D,
                ut.Entity], 
                (speed, input, velocity,entity) => {
                let setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = new Vector2(speed.value * input.movementDir * dt,velocity.velocity.y);
                this.world.addComponentData(entity,setVelocity);

            });
        }
    }
}
