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
                        if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.E)) {
                            let ent = ut.EntityGroup.instantiate(this.world, "game.EnemyGroup")[0];
                            let trans = this.world.getComponentData(ent, ut.Core2D.TransformLocalPosition);
                            trans.position = new Vector3(GameService.genRandom(2, 12), GameService.genRandom(2, 6));
                            this.world.setComponentData(ent, trans);
                            console.log("Enemy created!");
                        }
                        break;
                    case game.GameStateType.GameOver:
                        this.updateGameOver(this.world, gameState);
                        break;
                }
            });
        }

        updateInit(world: ut.World, gameState: game.GameState) {
            SoundService.init(world);
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
