
namespace game {

    /** New System */
    export class PlayerEnemyCollisionSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.HitBox2D.HitBoxOverlapResults, ut.Entity, ut.Core2D.TransformLocalPosition, game.PlayerTag],
                (overlapResults, entity, transformLocalPosition) => {

                    if (overlapResults.overlaps.length > 0) {
                        for (let idx in overlapResults.overlaps) {
                            let otherEntity = overlapResults.overlaps[idx].otherEntity;

                            if (this.world.hasComponent(otherEntity, game.EnemyTag) && this.world.hasComponent(otherEntity, game.EnemyAttack)) {
                                let otherLayer = this.world.getComponentData(otherEntity, ut.Core2D.LayerSorting).layer;
                                // Enemy is on layer1!
                                if (otherLayer != 1) {
                                    // console.log("Hitresult entity: ", this.world.getEntityName(otherEntity), "idx: ", otherEntity.index);
                                    return;
                                }

                                let enemyTag = this.world.getComponentData(otherEntity, game.EnemyTag);
                                let enemyAttack = this.world.getComponentData(otherEntity, game.EnemyAttack);
                                let time = ut.Time.time();
                                if (time - enemyAttack.lastAttackTime > enemyAttack.delayBetweenAttacks) {
                                    enemyAttack.lastAttackTime = time;

                                    this.world.setComponentData(otherEntity, enemyAttack);

                                    let hit = new game.Hit();
                                    hit.Damage = enemyTag.damageToPlayer;

                                    // establishing impulse vector of a hit
                                    if (this.world.hasComponent(otherEntity, ut.Core2D.TransformLocalPosition) && this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)) {
                                        let playerPosition = this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
                                        let enemyPosition = this.world.getComponentData(otherEntity, ut.Core2D.TransformLocalPosition).position;
                                        let delta = new Vector3().subVectors(playerPosition, enemyPosition);
                                        delta.normalize();
                                        hit.ImpulseForce = 500;
                                        let direction = delta.multiplyScalar(hit.ImpulseForce);
                                        let impulseVector = new Vector2(direction.x, direction.y/7);
                                        hit.Impulse = impulseVector;
                                        hit.allowImpulse = true;
                                    }

                                    if (!this.world.hasComponent(entity, game.Hit)) {
                                        this.world.addComponentData(entity, hit);
                                    }
                                }
                            }
                        }
                    }
            });
        }
    }
}
