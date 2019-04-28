namespace game {
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)

    export class PlayerViewFlipSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();

            this.world.forEach([ ut.Core2D.TransformLocalScale, game.PlayerViewTag,  ut.Core2D.TransformObjectToWorld],
                (transformScale, tag, objectToWorld) => {
                
                    let mouseVector = ut.Core2D.Input.translateScreenToWorld(this.world, ut.Core2D.Input.getInputPosition());
                    let worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                    let dir = new Vector3().subVectors(mouseVector, worldPos);
                    let angle = Math.atan2(dir.y, dir.x);

                    // let direction = new Vector3().subVectors(input.aimDir, transformLocalPosition.position);
                    // transformScale.scale = new Vector3(transformScale.scale.x, direction.x > 0 ? -1 : 1, transformScale.scale.z);

                    let scale = transformScale.scale;
                    if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                        Flip(scale, transformScale);
                    }
                });

            function Flip(scale, transformScale) {
                // scale.y *= -1;
                scale.x *= -1;


                transformScale.scale = scale;
            }

            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2.0 && scale.x > 0;
            }

            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2.0 && angle < Math.PI / 2.0 && scale.x < 0;
            }
        }
    }
}
