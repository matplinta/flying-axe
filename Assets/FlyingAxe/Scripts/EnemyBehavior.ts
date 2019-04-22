namespace game {
    
    export class EnemyBehaviorFilter extends ut.EntityFilter {
        entity: ut.Entity;
        position: ut.Core2D.TransformLocalPosition;
        scale: ut.Core2D.TransformLocalScale;
        velocity: ut.Physics2D.Velocity2D;
        tag: game.EnemyTag;
        movement: game.Movement;
        speedChange: game.ChangeOverTime;
        bounds: game.Boundaries;
    }

    export class EnemyBehavior extends ut.ComponentBehaviour {

        data: EnemyBehaviorFilter;

        OnEntityEnable(): void {
            let totalTime = ut.Time.time();
            let newSpeed = this.data.movement.speed + (this.data.speedChange.changePerSecond * totalTime);

            this.data.movement.speed = newSpeed;
            
        }

        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate(): void {
            let gameState = GameService.getGameState(this.world);
            if (gameState.CurrentState == game.GameStateType.GamePlay){

                let localPosition = this.data.position.position;
                let playerEntity = this.world.getEntityByName("Player")
                let playerPosition = this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position;

                let distance = localPosition.distanceTo(playerPosition);
                let delta = new Vector3().subVectors(playerPosition, localPosition);
                delta.normalize();
                let moveSpeed = this.data.movement.speed * ut.Time.deltaTime();
                let direction = delta.multiplyScalar(moveSpeed)
                let newVelocity = new ut.Physics2D.SetVelocity2D;

                //set scale to face the player at all times
                this.data.scale.scale = new Vector3(delta.x > 0 ? 1 : -1, 1, 1);
                if (this.data.tag.fly) {
                    newVelocity.velocity = new Vector2(direction.x, direction.y);
                } else {
                    newVelocity.velocity = new Vector2(direction.x, this.data.velocity.velocity.y);
                }
                if (distance > 1){
                    this.world.addComponentData(this.data.entity, newVelocity);
                } else{
                    this.world.addComponentData(this.data.entity, new ut.Physics2D.SetVelocity2D(new Vector2(0,0)));
                }
                
            }
        }
    }

    function genRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
}
