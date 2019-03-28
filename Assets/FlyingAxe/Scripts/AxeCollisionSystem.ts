namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.requiredComponents(ut.Physics2D.ColliderContacts)
    @ut.executeBefore(ut.Shared.UserCodeEnd)

    export class AxeCollisionSystem extends ut.ComponentSystem {

        OnUpdate(): void {

            this.world.forEach([ut.Physics2D.ColliderContacts, game.Spin, ut.Entity, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation,
                    ut.Core2D.TransformLocalScale],
                (colliderContacts, spin, entity, transformLocalPosition, transformLocalRotation, transformLocalScale) => {
                    let contacts = colliderContacts.contacts;
                    if (contacts.length > 0) {

                        
                        let other = contacts[0];
                        let otherLayer = this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                        if (spin.speed > 0) {
                            let contactPointData = this.ComputeNormalAndContactPoint(other, transformLocalPosition);
                            let contactPoint = contactPointData[0];
                            let contactPointNormal = contactPointData[1];
                            game.AimSystem.LookAt(new Vector3().subVectors(transformLocalPosition.position, contactPointNormal), transformLocalRotation, transformLocalPosition.position);
                            this.world.removeComponent(entity, game.Spin);
                            this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                            let child = ut.Core2D.TransformService.getChild(this.world, entity, 0);
                            this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], localRotation => {
                                localRotation.rotation = new Quaternion(0, 0, 0, 1);

                            });
                            let particleEntity = ut.EntityGroup.instantiate(this.world, "game.HitParticle")[0];
                            let particleTransformPosition = this.world.getComponentData(particleEntity, ut.Core2D.TransformLocalPosition);
                            particleTransformPosition.position = contactPoint;
                            this.world.setComponentData(particleEntity,particleTransformPosition);
                        }
                        else if(spin.speed < 0 && otherLayer != 1){
                            console.log("Enemy recall hit");
                        }


                    }
                });
        }

        private ComputeNormalAndContactPoint(other, transformLocalPosition) {
            let otherRotation = this.world.getComponentData(other, ut.Core2D.TransformLocalRotation).rotation;
            let otherPosition = this.world.getComponentData(other, ut.Core2D.TransformLocalPosition);
            let otherScale = this.world.getComponentData(other, ut.Core2D.TransformLocalScale).scale;

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

            let contactPointNormal = (transformLocalPosition.position.sub(contactPoint)).normalize();
            return [contactPoint,contactPointNormal];
        }
    }
}
