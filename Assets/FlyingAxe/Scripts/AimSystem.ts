namespace game {
    export class AimSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();

            this.world.forEach([game.Input, game.AimSpeed, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale],
                (input, speed, transformRotation, transformPosition, transformScale) => {
                    let dir = input.aimDir.sub(transformPosition.position);
                    let angle = Math.atan2(dir.y, dir.x);
                    let scale = transformScale.scale;
                    if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                        Flip(scale, transformScale);
                    }
                    AimSystem.LookAt(input.aimDir, transformRotation, transformPosition);
                });

            function Flip(scale, transformScale) {
                scale.y *= -1;
                transformScale.scale = scale;
            }

            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2 && scale.y > 0;
            }

            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2 && angle < Math.PI / 2 && scale.y < 0;
            }
        }

        static LookAt(target: Vector3, transformRotation: ut.Core2D.TransformLocalRotation, transformPosition: ut.Core2D.TransformLocalPosition): void {
            let dir = target.sub(transformPosition.position);
            let angle = Math.atan2(dir.y, dir.x);
            let euler = new Euler(0, 0, angle);
            transformRotation.rotation = new Quaternion().setFromEuler(euler);
        }
    }


}
