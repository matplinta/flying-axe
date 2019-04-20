namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Score)
    export class ScoreSystem extends ut.ComponentSystem {
        /**
         * Updates the scoring text
         */
        OnUpdate(): void {
            let context = this.world.getConfigData(game.GameContext);

            this.world.forEach([ut.Entity, ut.Text.Text2DRenderer, game.Score], (entity, textRenderer, scoreComponent) => {
                var score = context.score.toString();
                var text = `Score: ${score}`;
                textRenderer.text = text;
            });
        }

        public static AddScore(world: ut.World, value: number) {
            let context = world.getConfigData(game.GameContext);
            context.score += value;
            world.setConfigData(context);
        }

        public static ResetScore(world: ut.World) {
            let context = world.getConfigData(game.GameContext);
            context.score = 0;
            world.setConfigData(context);
        }
    }
}
