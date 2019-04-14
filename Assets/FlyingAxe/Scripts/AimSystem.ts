namespace game {
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)

    export class AimSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            
            this.world.forEach([game.Input, game.AimSpeed, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, ut.Core2D.TransformObjectToWorld],
                (input, speed, transformRotation, transformLocalPosition, transformScale, objectToWorld) => {
                    let worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                    let dir = new Vector3().subVectors(input.aimDir, worldPos);
                    let angle = Math.atan2(dir.y, dir.x);

                    // let direction = new Vector3().subVectors(input.aimDir, transformLocalPosition.position);
                    // transformScale.scale = new Vector3(transformScale.scale.x, direction.x > 0 ? -1 : 1, transformScale.scale.z);
                    
                    let scale = transformScale.scale;
                    if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                        Flip(scale, transformScale);
                    }
                    AimSystem.LookAt(input.aimDir, transformRotation, worldPos, transformScale);
                });

            function Flip(scale, transformScale) {
                scale.y *= -1;
                // scale.x *= -1;
                // console.log("axe scale X:" + scale.x)
                // console.log("axe scale Y:" +  scale.y)
                
                transformScale.scale = scale;
            }

            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2.0 && scale.y > 0;
            }

            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2.0 && angle < Math.PI / 2.0 && scale.y < 0;
            }
        }
        static LookAt(target: Vector3, transformRotation: ut.Core2D.TransformLocalRotation, currentWorldPos: Vector3, transformScale): void {
            let dir = new Vector3().subVectors(target, currentWorldPos);
            let angle = Math.atan2(dir.y, dir.x);
            let euler = new Euler(0, 0, angle);
            // if (transformScale.scale.x == 1){
            //     euler = new Euler(0, 0, angle);
            // }else {
            //     euler = new Euler(0, 0, -angle);
            // }
            
            transformRotation.rotation = new Quaternion().setFromEuler(euler);
        }
    }


}
