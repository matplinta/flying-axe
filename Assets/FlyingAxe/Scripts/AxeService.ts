namespace game {
    export class AxeService {
        static ThrowAxe(world: ut.World, axe: ut.Entity) {
            world.usingComponentData(axe, [ut.Core2D.TransformLocalRotation,ut.Core2D.TransformLocalScale], (transformLocalRotation,transformLocalScale) => {
                let right = new Vector3(1, 0, 0);
                right = right.applyQuaternion(transformLocalRotation.rotation);
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
                    world.removeComponent(axe,game.Input);
                }
            });
        }

        static RecallAxe(world: ut.World, axe: ut.Entity, caller: ut.Entity) {
            world.addComponent(axe, game.Recall);
            world.usingComponentData(axe, [game.Recall], (recall) => {
                recall.Caller = caller;
            });

        }
    }
}
