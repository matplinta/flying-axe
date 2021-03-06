namespace game {

    export class GameStateLoadingService {
        static setGameState(world: ut.World, gameStateType: game.GameStateType) {
            let gameState = GameService.getGameState(world);
            gameState.CurrentState = gameStateType;
            world.setComponentData(GameService.gameStateEntity, gameState);

            switch (gameStateType) {

                case game.GameStateType.Menu:
                    this.loadMenu(world);
                    break;
                case game.GameStateType.GamePlay:
                    this.loadGamePlay(world);
                    break;
                case game.GameStateType.GameOver:
                    this.loadGameOver(world);
                    break;

            }
            SoundService.playMusic(world);
        }

        static loadMenu(world: ut.World) {

            ut.EntityGroup.instantiate(world, "game.Menu");
        }

        static loadGamePlay(world: ut.World) {
            ScoreSystem.ResetScore(world);
            ut.EntityGroup.instantiate(world, "game.GamePlay");
            ut.EntityGroup.instantiate(world, "game.PlayerGroup");
        }

        static loadGameOver(world: ut.World) {
            ut.EntityGroup.destroyAll(world, "game.ScoreGem");
            ut.EntityGroup.destroyAll(world, "game.HealthPotion");
            ut.EntityGroup.destroyAll(world, "game.StrengthPotion");
            
            ut.EntityGroup.destroyAll(world, "game.LandEnemy");
            ut.EntityGroup.destroyAll(world,"game.AirEnemy");
            ut.EntityGroup.destroyAll(world, "game.PlayerGroup");
            
            ut.EntityGroup.destroyAll(world, "game.GamePlay");

            ut.EntityGroup.instantiate(world, "game.GameOver");
        }
    }
}
