
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Score)
    /** New System */
    export class SpawnSystem extends ut.ComponentSystem {

        OnUpdate():void {
            this.world.forEach([game.Spawner], (spawner) => {
                
                // this.CheckScoreAndAddNewEnemies();
                this.CheckScoreAndIncreaseDifficulty(spawner);
                
                if (spawner.isPaused) {
                    return;
                }
                let time = spawner.time;
                let delay = spawner.delay;

                time -= ut.Time.deltaTime();

                if (time <= 0 && spawner.numOfEnemies < spawner.maxNumOfEnemies) {
                    time += delay;
                    // this.SpawnEnemy(this.GenRandEnemy());
                    SpawnSystem.SpawnEnemy(SpawnSystem.GenRandEnemy(), this.world);
                    // this.SpawnEnemy("game.AirEnemy");
                    spawner.numOfEnemies += 1;
                }
                spawner.time = time;
                // this.VerboseSpawner(spawner);
            });
        }
        
        static GetRandFromArray(array: Array<number>) {
            return array[Math.floor(Math.random() * array.length)];
        }
        

        static GenRandEnemy() {
            // let enemy = SpawnSystem.GetRandFromArray(GameService.enemyTypeArray);
            // let enemy = SpawnSystem.GetRandFromArray([0, 1]);
            let enemy = 0;
            console.log("GenRandEnemy: enemyType:", enemy);
            switch (enemy) {
                case game.EnemyType.Land:
                    return "game.LandEnemy";
                case game.EnemyType.Air:
                    return "game.AirEnemy";
                default:
                    return "game.LandEnemy";
            }
        }
        
        GenRandEnemyBasedOnScore() {
            let score = this.world.getConfigData(game.GameContext).score;
            let enemy;
            if(score < 10){
                enemy = SpawnSystem.GetRandFromArray([0]);
            } else{
                enemy = SpawnSystem.GetRandFromArray([0, 1]);
            }
            console.log("GenRandEnemy: enemyType:", enemy);
            switch (enemy) {
                case game.EnemyType.Land:
                    return "game.LandEnemy";
                case game.EnemyType.Air:
                    return "game.AirEnemy";
                default:
                    return "game.LandEnemy";
            }
        }

        static SpawnEnemy(name: string, world: ut.World) {
            console.log("SpawnEnemy:",name);
            ut.EntityGroup.instantiate(world, name)[0];
        }

        CheckScoreAndAddNewEnemies() {
            console.log("1");
            let context = this.world.getConfigData(game.GameContext);
            // let exists = game.GameService.enemyTypeArray.filter(function(x) {
            //     return x == game.EnemyType.Air;
            // });
            console.log("2");
            let exists = game.GameService.enemyTypeArray.indexOf(1)
            // let existsBool = exists.length < 1 ? false : true;
            // if (context.score > 40 && !exists) {
            console.log("CheckScoreAndAddNewEnemies:", exists);
            if (context.score > 10 && exists == -1) {

                game.GameService.enemyTypeArray.push(game.EnemyType.Air);
                console.log("3");
            }
            
        //    for new enemies here add them upon score increase
        }

        CheckScoreAndIncreaseDifficulty(spawner: game.Spawner) {
            let context = this.world.getConfigData(game.GameContext);
            if (context.score > 100) {
                spawner.maxNumOfEnemies = 7;
                spawner.delay = 4;
            } 
            else if(context.score > 200){
                spawner.maxNumOfEnemies = 8;
                spawner.delay = 3;
            }
            else if(context.score > 250){
                spawner.maxNumOfEnemies = 9;
                spawner.delay = 2;
            }
            else if(context.score > 300){
                spawner.maxNumOfEnemies = 10;
                spawner.delay = 1;
            }
            //    for new enemies here add them upon score increase
        }

        VerboseSpawner(spawner) {
            for (let enemy of game.GameService.enemyTypeArray) {
                console.log("CheckScoreAndAddNewEnemies: game.GameService.enemyTypeArray =>", enemy)
            }
            console.log("Spawner: maxNumOfEnemies", spawner.maxNumOfEnemies);
            console.log("Spawner: numOfEnemies", spawner.numOfEnemies);
        }
    }
}
