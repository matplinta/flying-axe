namespace game {
    import LayerSorting = ut.Core2D.LayerSorting;

    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.requiredComponents(ut.Physics2D.ColliderContacts)
    @ut.executeBefore(ut.Shared.UserCodeEnd)

    export class AxeCollisionSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            this.world.forEach([ut.HitBox2D.HitBoxOverlapResults, game.Spin, ut.Entity, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation,
                    ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, game.Weapon],
                (overlapResults, spin, entity, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, weapon) => {

                    if (overlapResults.overlaps.length > 0) {
                        let other = overlapResults.overlaps[0].otherEntity;
                        let otherLayer = this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                        // Player is on layer 3!
                        if (otherLayer == 3 || otherLayer == 2) {
                            return;
                        }

                        let playerEntity = this.world.getEntityByName("Player");
                        let layerConfig = this.world.getComponentData(playerEntity, ut.Core2D.LayerSorting).layer;
                        if (!playerEntity) {
                            return;
                        }
                        let playerPosition = this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position;
                        let enemyPosition = this.world.getComponentData(other, ut.Core2D.TransformLocalPosition).position;
                        let distance = enemyPosition.distanceTo(playerPosition);                //distance to enemy 
                        let delta = new Vector3().subVectors(playerPosition, enemyPosition);    //vector from player to enemy
                        delta.normalize();
                        
                        let hit = new game.Hit();
                        if (spin.speed > 0) {
                            let contactPointData = this.ComputeNormalAndContactPoint(other, transformLocalPosition);
                            let contactPoint = contactPointData[0];
                            let contactPointNormal = contactPointData[1];
                            let lookAtPoint = new Vector3().subVectors(transformLocalPosition.position, contactPointNormal);
                            game.AimSystem.LookAt(lookAtPoint, transformLocalRotation, transformLocalPosition.position, transformLocalScale);
                            this.world.removeComponent(entity, game.Spin);
                            this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                            let child = ut.Core2D.TransformService.getChild(this.world, entity, 0);
                            this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], localRotation => {
                                localRotation.rotation = new Quaternion(0, 0, 0, 1);
                            });
                            let particleEntity = ut.EntityGroup.instantiate(this.world, "game.HitParticle")[0];
                            let particleTransformPosition = this.world.getComponentData(particleEntity, ut.Core2D.TransformLocalPosition);
                            particleTransformPosition.position = contactPoint;
                            this.world.setComponentData(particleEntity, particleTransformPosition);
                            transformLocalPosition.position = contactPoint;

                            let otherLocalMatrix = this.world.getComponentData(other, ut.Core2D.TransformLocal).matrix;
                            otherLocalMatrix.getInverse(otherLocalMatrix);
                            contactPoint = contactPoint.applyMatrix4(otherLocalMatrix);
                            let otherScale = this.world.getComponentData(other, ut.Core2D.TransformLocalScale);
                            transformNode.parent = other;
                            transformLocalScale.scale = transformLocalScale.scale.divide(otherScale.scale)

                            transformLocalPosition.position = contactPoint;

                            hit.Damage = weapon.damage;
                               
                            let direction = new Vector3(delta.x * -1, delta.y * -1);
                            WeaponService.ApplyForceInDirection(this.world, other, direction, 500, false);
                            ShakeSystem.Shake(this.world, GameService.GetCamera(this.world), .1, .1);
                            SoundService.play(this.world,"AxeThrow");

                        } else if (spin.speed < 0 && otherLayer != -1) {
                            hit.Damage = Math.round(weapon.damage * 0.3);
                            // let direction = new Vector3(delta.x * 1, 0);
                            // WeaponService.ApplyForceInDirection(this.world, other, direction, 100, false);
                            console.log("Enemy recall hit");
                        }
                        if (!this.world.hasComponent(other, game.Hit)) {
                            this.world.addComponentData(other, hit);
                        }

                    }
                });
        }

        private ComputeNormalAndContactPoint(other, transformLocalPosition) {
            let otherRotation = this.world.getComponentData(other, ut.Core2D.TransformLocalRotation).rotation;
            let otherPosition = this.world.getComponentData(other, ut.Core2D.TransformLocalPosition);
            let otherScale = this.world.getComponentData(other, ut.Core2D.Sprite2DRendererOptions).size;

            let otherUp = new Vector3(0, 1, 0);
            otherUp = otherUp.applyQuaternion(otherRotation);

            let otherRight = new Vector3(1, 0, 0);
            otherRight = otherRight.applyQuaternion(otherRotation);

            let dir = transformLocalPosition.position.sub(otherPosition.position);
            let dir_x = dir.dot(otherRight);
            let half_width = otherScale.x / 2.0;
            let half_height = otherScale.y / 2.0;
            if (dir_x > half_width) {
                dir_x = half_width;
            } else if (dir_x < -half_width) {
                dir_x = -half_width;
            }

            let dir_y = dir.dot(otherUp);
            if (dir_y > half_height) {
                dir_y = half_height;
            } else if (dir_y < -half_height) {
                dir_y = -half_height;
            }

            let contactPoint = otherPosition.position.add(otherRight.multiplyScalar(dir_x)).add(otherUp.multiplyScalar(dir_y));
            console.log("Contact point: ",contactPoint,"Position: ",transformLocalPosition.position);
            let contactPointNormal = (transformLocalPosition.position.sub(contactPoint)).normalize();
            
            return [contactPoint, contactPointNormal];
        }

        GetVectorFromPlayerToEntity(playerPosition: Vector3, enemyPosition: Vector3, speed: number){
            let distance = enemyPosition.distanceTo(playerPosition);
            let delta = new Vector3().subVectors(playerPosition, enemyPosition);
            delta.normalize();
            let moveSpeed = speed * ut.Time.deltaTime();
            let direction = delta.multiplyScalar(moveSpeed)
            return direction
        }
    }
}
