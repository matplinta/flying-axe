namespace game {
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(game.AxeCollisionSystem)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class SpinningSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Spin], (entity, spin) => {
                let child = ut.Core2D.TransformService.getChild(this.world, entity, 0);
                this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], localRotation => {
                    localRotation.rotation = localRotation.rotation.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), spin.speed * dt));
                });

            });
        }
    }
}
