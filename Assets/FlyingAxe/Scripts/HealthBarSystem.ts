namespace game {

    @ut.executeAfter(HealthSystem)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class HealthBarSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Health, game.HealthVisualization], (health, visualization) => {
                this.world.usingComponentData(visualization.Bar, [ut.Core2D.TransformLocalScale], (transformLocalScale) => {
                    let currentScale = transformLocalScale.scale;
                    currentScale.x = health.current / health.max;
                    transformLocalScale.scale = currentScale;
                });
            });
        }
    }
}
