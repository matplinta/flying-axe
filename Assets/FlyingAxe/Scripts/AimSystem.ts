namespace game {
    export class AimSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.Input, game.AimSpeed, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalPosition],
                (input, speed, transformRotation, transformPosition) => {
                    let dir = input.aimDir.sub(transformPosition.position).normalize();
                    console.log(dir)
                    let quat = new Quaternion().setFromUnitVectors(transformPosition.position.normalize(),dir);
                    transformRotation.rotation = quat;
                    
                });
        }
    }
}
