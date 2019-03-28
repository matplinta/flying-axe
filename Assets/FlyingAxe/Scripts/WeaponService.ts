namespace game {
    export class WeaponService {
        static ThrowWeapon(world: ut.World, axe: ut.Entity) {
            world.usingComponentData(axe, [ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalScale, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformNode, ut.Core2D.TransformObjectToWorld],
                (transformLocalRotation, transformLocalScale, transformLocalPosition, transformNode, objectToWorld) => {
                    let worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                    let worldRotation = ut.Core2D.TransformService.computeWorldRotation(world, axe);
                    let worldScale = transformLocalScale.scale;
                    world.usingComponentData(transformNode.parent,[ut.Core2D.TransformLocalScale],parentScale=>{
                        worldScale = worldScale.multiply(parentScale.scale);
                    });
                    transformNode.parent = ut.NONE;
                    transformLocalPosition.position = worldPos;
                    transformLocalRotation.rotation = worldRotation;
                    transformLocalScale.scale = worldScale;
                    let right = new Vector3(1, 0, 0);
                    right = right.applyQuaternion(worldRotation);
                    let impulse = new ut.Physics2D.AddImpulse2D;
                    impulse.impulse = new Vector2(right.x, right.y).multiplyScalar(15);
                    let rb2d = new ut.Physics2D.RigidBody2D();
                    rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
                    rb2d.friction = 1;
                    rb2d.freezeRotation = false;
                    world.addComponentData(axe, rb2d);
                    world.addComponentData(axe, impulse);
                    if (!world.hasComponent(axe, game.Spin)) {

                        let spin = new game.Spin();
                        spin.speed = 40;
                        spin.direction = right;
                        world.addComponentData(axe, spin);

                    }
                });
        }

        static RecallWeapon(world: ut.World, axe: ut.Entity, caller: ut.Entity) {
            if (!world.hasComponent(axe, game.Recall)) {
                world.addComponent(axe, game.Recall);
            }

            if (!world.hasComponent(axe, game.Spin)) {
                world.addComponent(axe, game.Spin);
            }

            if (!world.hasComponent(axe, ut.Physics2D.RigidBody2D)) {
                let rb2d = new ut.Physics2D.RigidBody2D();
                rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
                rb2d.friction = 1;
                rb2d.freezeRotation = false;
                world.addComponentData(axe, rb2d);
            }

            world.usingComponentData(axe, [game.Recall, game.Spin], (recall, spin) => {
                recall.Caller = caller;
                recall.speed = 15;
                spin.speed = -40;
            });

        }
    }
}
