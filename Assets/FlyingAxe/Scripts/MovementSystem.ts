namespace game {
    export class MovementSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.MovementSpeed, game.Input, ut.Core2D.TransformLocalPosition], (speed, input, transform) => {
                let localPosition = transform.position;
                localPosition.x = transform.position.x + input.movementDir * speed.value * dt;
                transform.position = localPosition;
                
            });
        }
    }
}
