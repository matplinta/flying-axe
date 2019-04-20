namespace game {


    export class GameStateSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.GameState], gameState => {
                switch (gameState.CurrentState) {
                    case game.GameStateType.Init:
                        this.updateInit(this.world, gameState);
                        break;
                    case game.GameStateType.Menu:
                        this.updateMenu(this.world, gameState);
                        break;
                    case game.GameStateType.GamePlay:
                        break;
                    case game.GameStateType.GameOver:
                        this.updateGameOver(this.world, gameState);
                        break;
                }
            });
        }

        updateInit(world: ut.World, gameState: game.GameState) {
            GameStateLoadingService.setGameState(world, game.GameStateType.Menu);
        }

        updateMenu(world: ut.World, gameState: game.GameState) {
            world.forEach([game.MainMenu], menu => {
                let playButton = world.getComponentData(menu.PlayButton, ut.UIControls.MouseInteraction);
                if (playButton.clicked) {
                    ut.EntityGroup.destroyAll(world, "game.Menu");
                    GameStateLoadingService.setGameState(world, game.GameStateType.GamePlay);
                }
            });
        }

        updateGameOver(world: ut.World, gameState: game.GameState) {
            world.forEach([game.GameOver], gameOver => {
                let tryAgainButton = world.getComponentData(gameOver.TryAgainButton, ut.UIControls.MouseInteraction);
                if (tryAgainButton.clicked) {
                    ut.EntityGroup.destroyAll(world, "game.GameOver");
                    GameStateLoadingService.setGameState(world, game.GameStateType.GamePlay);
                }
            });
        }
    }
}
