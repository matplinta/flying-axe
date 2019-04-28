namespace game {
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class MovementSystem extends ut.ComponentSystem {
        
        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach(
                [ut.Entity, game.Movement, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale, game.PlayerTag], 
                (entity, movement, velocity, scale, playerTag) => {
                    if (movement.direction.x == 1 || movement.direction.x == -1 || movement.direction.x == 0){
                        let setVelocity = new ut.Physics2D.SetVelocity2D;
                        setVelocity.velocity = new Vector2(movement.speed * movement.direction.x * dt, velocity.velocity.y);
                        this.world.addComponentData(entity,setVelocity);
                    }                         
                    if (movement.shouldJump) {
                        console.log("should jump if on ground:", movement.onGround);
                        if (movement.onGround) {
                            let impulse = new ut.Physics2D.AddImpulse2D;
                            impulse.impulse = new Vector2(movement.direction.x, movement.jumpForce);
                            this.world.addComponentData(entity, impulse);
                            movement.jump = true;
                            movement.onGround = false;
                        }
                    }
                    movement.shouldJump = false;
            });
        }
    }
}
