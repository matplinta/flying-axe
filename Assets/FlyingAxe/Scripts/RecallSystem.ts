namespace game {

    /** New System */
    export class RecallSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.Recall, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformNode, ut.Entity, ut.Core2D.TransformLocalRotation],
                (recall, transformLocalPosition, transformNode, entity, transformLocalRotation) => {
                let callerEntity = recall.Caller;
                let callerObjectToWorld = this.world.getComponentData(callerEntity, ut.Core2D.TransformObjectToWorld);
                let callerWorldPos = new Vector3().setFromMatrixPosition(callerObjectToWorld.matrix);
                let distance = transformLocalPosition.position.distanceTo(callerWorldPos);
                if (distance < 1.0) {
                    transformNode.parent = callerEntity;
                    transformLocalPosition.position = new Vector3();
                    transformLocalRotation.rotation = new Quaternion();
                    this.world.removeComponent(entity, game.Recall);
                    this.world.removeComponent(entity, game.Spin);
                    this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                    let child = ut.Core2D.TransformService.getChild(this.world, entity, 0);
                    this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], localRotation => {
                        localRotation.rotation = new Quaternion(0, 0, 0, 1);

                    });
                    
                    this.world.usingComponentData(callerEntity,[game.WeaponControl],weaponControl=>{
                        weaponControl.isInHand = true;
                    });
                } else {

                    transformLocalPosition.position = new Vector3().lerpVectors(transformLocalPosition.position, callerWorldPos, dt * recall.speed);
                }
            });
        }
    }
}
