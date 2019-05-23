
namespace game {
    /** New System */
    export class CollisionSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([game.Movement, ut.Core2D.TransformLocalPosition, ut.Entity, game.PlayerTag, ut.Physics2D.ColliderContacts],
                (movement, position, entity, playerTag, contacts) => {
                    movement.onGround = false;
                    let groundHitResult = ut.HitBox2D.HitBox2DService.hitTest(this.world, position.position.sub(new Vector3(0, 0.9, 0)), GameService.GetCamera(this.world));
                    
                    // if hit with element below
                    if (!groundHitResult.entityHit.isNone()) {
                        if(this.world.hasComponent(groundHitResult.entityHit, game.GroundTag)){
                            movement.onGround = true;
                            movement.jump = false;
                        }
                    }
                    // console.log("Movement.onGround in Collision system: ",movement.onGround );
                    /*
                    for (let otherEntity of contacts.contacts) {
                        // console.log(this.world.getEntityName(entity), "collided with ", this.world.getEntityName(otherEntity));

                        // if this is an enemy that a player is colliding with
                        if (otherEntity.index != ut.NONE.index && this.world.hasComponent(otherEntity, game.EnemyTag)) {

                            let enemyTag = this.world.getComponentData(otherEntity, game.EnemyTag);
                            let enemyAttack = this.world.getComponentData(otherEntity, game.EnemyAttack);
                            let time = ut.Time.time();
                            if(time - enemyAttack.lastAttackTime > enemyAttack.delayBetweenAttacks){
                                enemyAttack.lastAttackTime = time;

                                this.world.setComponentData(otherEntity, enemyAttack);

                                let hit = new game.Hit();
                                hit.Damage = enemyTag.damageToPlayer;

                                // establishing impulse vector of a hit
                                if (this.world.hasComponent(otherEntity, ut.Core2D.TransformLocalPosition) && this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)){
                                    let playerPosition = this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
                                    let enemyPosition = this.world.getComponentData(otherEntity, ut.Core2D.TransformLocalPosition).position;

                                    let distance = enemyPosition.distanceTo(playerPosition);
                                    let delta = new Vector3().subVectors(playerPosition, enemyPosition);
                                    delta.normalize();
                                    hit.ImpulseForce = 150;
                                    let direction = delta.multiplyScalar(hit.ImpulseForce);
                                    let impulseVector = new Vector2(direction.x, direction.y/2);
                                    hit.Impulse = impulseVector;
                                    hit.allowImpulse = true;
                                }

                                if (!this.world.hasComponent(entity, game.Hit)) {
                                    this.world.addComponentData(entity, hit);
                                }
                                
                            }
                            
                        }
                    }*/
                });
        }
    }
}
