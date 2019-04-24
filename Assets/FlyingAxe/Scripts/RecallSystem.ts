/// <reference path="WeaponControlSystem.ts"/>
namespace game {

    /** New System */
    @ut.executeAfter(game.WeaponControlSystem)
    export class RecallSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.Recall,
                    ut.Core2D.TransformLocalPosition,
                    ut.Core2D.TransformLocalRotation,
                    ut.Core2D.TransformLocalScale,
                    ut.Core2D.TransformNode,
                    ut.Entity],
                (recall, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, recalledEntity) => {
                    let callerEntity = recall.Caller;
                    let callerObjectToWorld = this.world.getComponentData(callerEntity, ut.Core2D.TransformObjectToWorld);
                    let callerWorldPos = new Vector3().setFromMatrixPosition(callerObjectToWorld.matrix);
                    let distanceToCaller = transformLocalPosition.position.distanceTo(callerWorldPos);
                    if (distanceToCaller < 3.0) {
                        AttachToCaller(this.world, transformNode, transformLocalPosition, transformLocalRotation, transformLocalScale, callerEntity, recalledEntity);
                    } else {
                        MoveTowardsCaller(transformLocalPosition, callerWorldPos, recall);
                    }
                });

            function MoveTowardsCaller(transformLocalPosition, callerWorldPos, recall) {
                transformLocalPosition.position = new Vector3().lerpVectors(transformLocalPosition.position, callerWorldPos, dt * recall.speed);
            }

            function AttachToCaller(world, transformNode, transformLocalPosition, transformLocalRotation, transformLocalScale, callerEntity, recalledEntity) {
                transformNode.parent = callerEntity;

                world.removeComponent(recalledEntity, game.Recall);
                world.removeComponent(recalledEntity, game.Spin);
                world.removeComponent(recalledEntity, ut.Physics2D.RigidBody2D);
                let entityChild = ut.Core2D.TransformService.getChild(world, recalledEntity, 0);
                world.usingComponentData(entityChild, [ut.Core2D.TransformLocalRotation], localRotation => {
                    localRotation.rotation = new Quaternion(0, 0, 0, 1);

                });

                world.usingComponentData(callerEntity, [game.WeaponControl], weaponControl => {
                    weaponControl.isInHand = true;
                    transformLocalPosition.position = weaponControl.weaponInHandLocalPosition;
                    transformLocalScale.scale = weaponControl.weaponInHandLocalScale;
                    transformLocalRotation.rotation = weaponControl.weaponInHandLocalRotation;
                    SoundService.play(world,"AxeRecall");
                });
            }

        }


    }
}
