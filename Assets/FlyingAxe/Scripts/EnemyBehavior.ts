
namespace game {

    export class EnemyBehaviorFilter extends ut.EntityFilter {
        entity: ut.Entity;
        position: ut.Core2D.TransformLocalPosition;
        velocity: ut.Physics2D.Velocity2D;
        tag: game.EnemyTag;
        movement: game.Movement;
        speedChange: game.ChangeOverTime;
        bounds: game.Boundaries;
    }
    export class EnemyBehavior extends ut.ComponentBehaviour {

        data: EnemyBehaviorFilter;
        OnEntityEnable():void {
            let totalTime = ut.Time.time();
            let newSpeed = this.data.movement.speed + (this.data.speedChange.changePerSecond * totalTime);

            this.data.movement.speed = newSpeed;

            let randomX = genRandom(this.data.bounds.minX, this.data.bounds.maxX);
            let newPos = new Vector3(randomX, this.data.bounds.minY, 0);

            // this.data.position.position = newPos;

            console.log("enemy initialized. Speed: " + newSpeed);
        }
        
        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        OnEntityUpdate():void {
            let localPosition = this.data.position.position;
            let playerPosition = new Vector3(); 
            let playerEntity = this.world.getEntityByName("Player")
            playerPosition = this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position; 
            //tutaj zrobic zeby leciał do playera
            let distance = localPosition.distanceTo(playerPosition);
            let delta = new Vector3().subVectors(playerPosition, localPosition);
            delta.normalize();

            let moveSpeed = this.data.movement.speed * ut.Time.deltaTime();
            let direction = delta.multiplyScalar(moveSpeed)
            // localPosition = localPosition.add(delta.multiplyScalar(moveSpeed));
            // this.data.position.position = localPosition;


            let newVelocity = new ut.Physics2D.SetVelocity2D;
            if (this.data.tag.fly){
                newVelocity.velocity = new Vector2(direction.x, direction.y);
            } else {
                newVelocity.velocity = new Vector2(direction.x, this.data.velocity.velocity.y);
            }
            this.data.velocity = newVelocity;
           
        }

        // this method is called for each entity matching the EnemyBehaviorFilter signature, once when disabled
        //OnEntityDisable():void { }

    }

    function genRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
}
