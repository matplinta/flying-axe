/// <reference path="DeadSystem.ts"/>
namespace game {
    
    @ut.executeAfter(game.DeadSystem)
    export class EnemyBehaviorFilter extends ut.EntityFilter {
        entity: ut.Entity;
        position: ut.Core2D.TransformLocalPosition;
        scale: ut.Core2D.TransformLocalScale;
        velocity: ut.Physics2D.Velocity2D;
        tag: game.EnemyTag;
        movement: game.Movement;
        speedChange: game.ChangeOverTime;
        boundaries: game.Boundaries;
    }

    export class EnemyBehavior extends ut.ComponentBehaviour {

        data: EnemyBehaviorFilter;

        OnEntityEnable(): void {
            let totalTime = ut.Time.time();
            let newSpeed = this.data.movement.speed + (this.data.speedChange.changePerSecond * totalTime);
            this.data.movement.speed = newSpeed;
            let playerPosition = this.world.getComponentData(this.world.getEntityByName("Player"), ut.Core2D.TransformLocalPosition).position;
            let enemyPosition = new Vector3();
            
            while (!this.CheckEnemyPositionBoundaries(enemyPosition, playerPosition, this.data.boundaries)){
                enemyPosition = new Vector3(SpawnSystem.GetRandFromArray(
                    [-1, 1]) * genRandom(5,15) + playerPosition.x,
                    genRandom(this.data.boundaries.minY, this.data.boundaries.maxY),
                    playerPosition.z);
            }
            // if (!this.data.tag.fly) {
            //     enemyPosition.y = genRandom(1, 3);
            // }
            this.data.position.position = enemyPosition;
            // console.log("EnemyBehaviour:", enemyPosition);
        }

        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate(): void {
            let gameState = GameService.getGameState(this.world);
            if (gameState.CurrentState == game.GameStateType.GamePlay){
                
                let playerEntity = this.world.getEntityByName("Player");
                if (!playerEntity) {
                    return;
                }
                let playerPosition = this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position;
                let localPosition = this.data.position.position;
                
                let distance = localPosition.distanceTo(playerPosition);                //distance to enemy 
                let delta = new Vector3().subVectors(playerPosition, localPosition);    //vector from player to enemy
                delta.normalize();                                                      //vector normalized
                let moveSpeed = this.data.movement.speed * ut.Time.deltaTime();         //normalized vector multiplied by speed and deltaTime
                
                let direction = delta.multiplyScalar(moveSpeed)
                let newVelocity = new ut.Physics2D.SetVelocity2D;

                //set scale to face the player at all times
                this.data.scale.scale = new Vector3(delta.x > 0 ? 1 : -1, 1, 1);
                if (this.data.tag.fly) {
                    newVelocity.velocity = new Vector2(direction.x, direction.y);
                } else {
                    newVelocity.velocity = new Vector2(direction.x, this.data.velocity.velocity.y);
                }
                if (distance > 0.7){
                    this.world.addComponentData(this.data.entity, newVelocity);
                } else{
                    this.world.addComponentData(this.data.entity, new ut.Physics2D.SetVelocity2D(new Vector2(0,0)));
                }
                
            }
        }

        CheckEnemyPositionBoundaries(position: Vector3, playerPosition,boundaries: game.Boundaries) {
            //Check if enemy position is within boundaries, and if it is outside of player sight (outside camera)
            return (position.x < boundaries.maxX && position.x > -boundaries.maxX && position.y > boundaries.minY && position.y < boundaries.maxY && (position.x >= 8 + playerPosition.x || position.x <= -8 + playerPosition.x))
        }
        
        GetVectorFromEntityToPlayer(playerPosition: Vector3, enemyPosition: Vector3, speed: number){
            let distance = enemyPosition.distanceTo(playerPosition);
            let delta = new Vector3().subVectors(playerPosition, enemyPosition);
            delta.normalize();
            let moveSpeed = speed * ut.Time.deltaTime();
            let direction = delta.multiplyScalar(moveSpeed)
            return direction
        }
        
    }

    function genRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
}
