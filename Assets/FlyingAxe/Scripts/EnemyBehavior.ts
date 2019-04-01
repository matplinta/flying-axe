
namespace game {

    export class EnemyBehaviorFilter extends ut.EntityFilter {
        entity: ut.Entity;
        position: ut.Core2D.TransformLocalPosition;
        tag: game.EnemyTag;
        speed: game.MovementSpeed;
        speedChange: game.ChangeOverTime;
        bounds: game.Boundaries;
    }

    export class EnemyBehavior extends ut.ComponentBehaviour {

        data: EnemyBehaviorFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the EnemyBehaviorFilter signature, once when enabled
        OnEntityEnable():void {
            let totalTime = ut.Time.time();
            let newSpeed = this.data.speed.value + (this.data.speedChange.changePerSecond * totalTime);
            
            this.data.speed.value = newSpeed;

            let randomX = genRandom(this.data.bounds.minX, this.data.bounds.maxX);
            let newPos = new Vector3(randomX, this.data.bounds.minY, 0);
            
            this.data.position.position = newPos;

            console.log("enemy initialized. Speed: " + newSpeed);
        }
        
        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void {
            let localPosition = this.data.position.position;
            let playerPosition = new Vector3(); 
            this.world.forEach([ut.Core2D.TransformLocalPosition, 
                game.PlayerTag, 
                game.Health], 
                (playerPositionTemp, playerTag, playerHealth) => {
                playerPosition = playerPositionTemp.position;
            });
            //tutaj zrobic zeby leciał do playera
            let distance = localPosition.distanceTo(playerPosition);
            let delta = new Vector3();
            delta = delta.subVectors(playerPosition, localPosition);
            delta.normalize();

            let moveSpeed = this.data.speed.value * ut.Time.deltaTime();
            
            localPosition = localPosition.add(delta.multiplyScalar(moveSpeed));
            
            
            this.data.position.position = localPosition;
            
            // Destroy Enemy
        //     if(localPosition.y)
        //    
        }

        // this method is called for each entity matching the EnemyBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }

    function genRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
}
