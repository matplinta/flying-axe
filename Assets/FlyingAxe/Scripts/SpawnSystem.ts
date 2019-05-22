
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.requiredComponents(game.Score)
    /** New System */
    export class SpawnSystem extends ut.ComponentSystem {

        OnUpdate():void {
            this.world.forEach([game.Spawner], (spawner) => {
                
                
                this.CheckScoreAndIncreaseDifficulty(spawner);
                
                if (spawner.isPaused) {
                    return;
                }
                let time = spawner.time;
                let delay = spawner.delay;

                time -= ut.Time.deltaTime();

                if (time <= 0 && spawner.numOfEnemies < spawner.maxNumOfEnemies) {
                    time += delay;
                    this.CheckScoreAndAddNewEnemies();
                    SpawnSystem.SpawnEnemy(SpawnSystem.GenRandEnemy(), this.world, spawner.newEnemyKillReward, spawner.newEnemyDamageToPlayer, spawner.enemySpeed);
                    spawner.numOfEnemies += 1;
                    this.VerboseSpawner(spawner);
                }
                spawner.time = time;
                
            });
        }
        
        static GetRandFromArray(array: Array<number>) {
            return array[Math.floor(Math.random() * array.length)];
        }
        

        static GenRandEnemy() {
            let enemy = SpawnSystem.GetRandFromArray(GameService.enemyTypeArray);
            // let enemy = SpawnSystem.GetRandFromArray([0, 1]);
            // let enemy = 1;
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

        static SpawnEnemy(name: string, world: ut.World, killReward: number, damageToPlayer: number, speed: number) {
            console.log("SpawnEnemy:",name);
            let enemy = ut.EntityGroup.instantiate(world, name)[0];
            // if killReward and damageToPlayer defined in function call, apply them to enemy;
            // otherwise use default values
            if (world.hasComponent(enemy, game.EnemyTag) && killReward != 0 && damageToPlayer != 0) {
                let enemyTag = world.getComponentData(enemy, game.EnemyTag);
                let enemyMovement = world.getComponentData(enemy, game.Movement);
                enemyTag.killReward = killReward;
                enemyTag.damageToPlayer = damageToPlayer;
                enemyMovement.speed = speed;
                world.setComponentData(enemy, enemyTag);
                world.setComponentData(enemy, enemyMovement);
            }
        }

        CheckScoreAndAddNewEnemies() {
            let context = this.world.getConfigData(game.GameContext);
            let exists = game.GameService.enemyTypeArray.filter(function(x) {
                return x == game.EnemyType.Air;
            });
            let existsBool = exists.length < 1 ? false : true;
            console.log("CheckScoreAndAddNewEnemies:", exists);
            if (context.score > 50 && !existsBool) {
                game.GameService.enemyTypeArray.push(game.EnemyType.Air);
                console.log("3");
            }
            
        //    for new enemies here add them upon score increase
        }

        CheckScoreAndIncreaseDifficulty(spawner: game.Spawner) {
            let context = this.world.getConfigData(game.GameContext);
            
            let maxNumOfEnemies = Math.round(3 * SpawnSystem.log(1.9, 2 + context.score / 100) -2 );
            let delay = Math.round(-3 * SpawnSystem.log(10, 0.8 + context.score / 100) + 3);
            let reward = Math.round(3.3 * SpawnSystem.log(1.1, 24 + context.score / 100) -100);
            let damage = Math.round(3.4 * SpawnSystem.log(1.1, 50 + context.score / 100) -130);
            let speed = Math.round(-24 * SpawnSystem.log(0.7, 2.5 + context.score / 100) -13);
            
            if (spawner.maxNumOfEnemies < maxNumOfEnemies) {spawner.maxNumOfEnemies = maxNumOfEnemies;}
            if (spawner.delay > delay && delay > 0) {spawner.delay = delay;}
            if (spawner.newEnemyKillReward < reward) {spawner.newEnemyKillReward = reward;}
            if (spawner.newEnemyDamageToPlayer < damage) {spawner.newEnemyDamageToPlayer = damage;}
            if (spawner.enemySpeed < speed) {spawner.enemySpeed = speed;}
            
        }

        static log(base: number, x: number) {
            return Math.log(x) / Math.log(base);
        };

        VerboseSpawner(spawner) {
            for (let enemy of game.GameService.enemyTypeArray) {
                console.log("CheckScoreAndAddNewEnemies: game.GameService.enemyTypeArray =>", enemy)
            }
            console.log("Spawner: maxNumOfEnemies", spawner.maxNumOfEnemies);
            console.log("Spawner: numOfEnemies", spawner.numOfEnemies);
            console.log("Spawner: newEnemyKillReward", spawner.newEnemyKillReward);
            console.log("Spawner: newEnemyDamageToPlayer", spawner.newEnemyDamageToPlayer);
            
        }
    }
}
