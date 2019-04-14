
namespace game {

    export class FlipSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([game.FlipScale, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale, ut.Core2D.TransformLocalPosition],
                (scaleTag, velocity, scale, position) => {
                    scale.scale = new Vector3(velocity.velocity.x > 0 ? 1 : -1, 1, 1);
                });
        }
    }
}
