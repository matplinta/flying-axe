namespace game {

    export class WeaponService {
        static ThrowWeapon(world: ut.World, weapon: ut.Entity) {

            world.usingComponentData(weapon,
                [ut.Core2D.TransformLocalPosition,
                    ut.Core2D.TransformLocalRotation,
                    ut.Core2D.TransformLocalScale,
                    ut.Core2D.TransformNode,
                    ut.Core2D.TransformObjectToWorld],
                (transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, objectToWorld) => {
                    let right = DetachFromCaller(objectToWorld, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode);
                    ApplyForceInDirection(right);
                    WeaponService.SpinWeaponWithSpeed(40, world, weapon);

                });

            function DetachFromCaller(objectToWorld, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode) {
                let worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                let worldRotation = ut.Core2D.TransformService.computeWorldRotation(world, weapon);
                let worldScale = transformLocalScale.scale;
                world.usingComponentData(transformNode.parent, [ut.Core2D.TransformLocalScale], parentScale => {
                    worldScale = worldScale.multiply(parentScale.scale);
                });
                transformNode.parent = ut.NONE;
                transformLocalPosition.position = worldPos;
                transformLocalRotation.rotation = worldRotation;
                transformLocalScale.scale = worldScale;
                let right = new Vector3(1, 0, 0);
                right = right.applyQuaternion(worldRotation);
                return right;
            }


            function ApplyForceInDirection(right) {
                let impulse = new ut.Physics2D.AddImpulse2D;
                impulse.impulse = new Vector2(right.x, right.y).multiplyScalar(15);
                WeaponService.AttachRigidbodyToWeapon(world, weapon);
                if (world.hasComponent(weapon, ut.Physics2D.AddImpulse2D)) {
                    world.setComponentData(weapon, impulse);
                } else {
                    world.addComponentData(weapon, impulse);
                }

            }

        }

        static SpinWeaponWithSpeed(speed: number, world: ut.World, weapon: ut.Entity) {
            if (!world.hasComponent(weapon, game.Spin)) {
                let spin = new game.Spin();
                spin.speed = speed;
                world.addComponentData(weapon, spin);

            }
        }

        static AttachRigidbodyToWeapon(world: ut.World, weapon: ut.Entity) {
            let rb2d = new ut.Physics2D.RigidBody2D();
            rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
            rb2d.friction = 1;
            rb2d.freezeRotation = false;
            if (world.hasComponent(weapon, ut.Physics2D.RigidBody2D)) {
                world.setComponentData(weapon, rb2d);
            } else {
                world.addComponentData(weapon, rb2d);
            }
        }

        static DropWeapon(world: ut.World, weapon: ut.Entity) {
            this.DetachFromParent(world, weapon);
            this.AttachRigidbodyToWeapon(world, weapon);
            this.SpinWeaponWithSpeed(1,world,weapon);

        }

        static RecallWeapon(world: ut.World, axe: ut.Entity, caller: ut.Entity) {
            let recall = new game.Recall();
            recall.Caller = caller;
            recall.speed = 15;

            if (world.hasComponent(axe, game.Recall)) {
                world.setComponentData(axe, recall);
            } else {
                world.addComponentData(axe, recall);
            }


            let spin = new game.Spin();
            spin.speed = -40;

            if (world.hasComponent(axe, game.Spin)) {
                world.setComponentData(axe, spin);
            } else {
                world.addComponentData(axe, spin);
            }


            let rb2d = new ut.Physics2D.RigidBody2D();
            rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
            rb2d.friction = 1;
            rb2d.freezeRotation = false;

            if (world.hasComponent(axe, ut.Physics2D.RigidBody2D)) {
                world.setComponentData(axe, rb2d);
            } else {
                world.addComponentData(axe, rb2d);
            }
            let transformNode = world.getComponentData(axe, ut.Core2D.TransformNode);

            if (transformNode.parent.index != ut.NONE.index) {
                WeaponService.DetachFromParent(world, axe);
            }

        }

        static DetachFromParent(world: ut.World, entity: ut.Entity) {
            world.usingComponentData(entity,
                [ut.Core2D.TransformObjectToWorld,
                    ut.Core2D.TransformLocalPosition,
                    ut.Core2D.TransformLocalRotation,
                    ut.Core2D.TransformLocalScale,
                    ut.Core2D.TransformNode],
                (objectToWorld,
                 transformLocalPosition,
                 transformLocalRotation,
                 transformLocalScale,
                 transformNode) => {

                    let worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                    let worldRotation = ut.Core2D.TransformService.computeWorldRotation(world, entity);
                    let worldScale = transformLocalScale.scale;
                    world.usingComponentData(transformNode.parent, [ut.Core2D.TransformLocalScale], parentScale => {
                        worldScale = worldScale.multiply(parentScale.scale);
                    });
                    transformNode.parent = ut.NONE;
                    transformLocalPosition.position = worldPos;
                    transformLocalRotation.rotation = worldRotation;
                    transformLocalScale.scale = worldScale;
                });
        }
    }
}
