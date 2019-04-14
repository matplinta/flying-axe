
namespace game {

    /** New System */
    export class CollisionSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([game.Movement, ut.Core2D.TransformLocalPosition, ut.Entity, game.PlayerTag],
                (movement, position, entity) => {
                    movement.onGround = false;
                    let hitResult = ut.HitBox2D.HitBox2DService.hitTest(this.world, position.position.sub(new Vector3(0, 0.7, 0)), GameService.GetCamera(this.world));
                    // jezeli bedzie hit z elementem ponizej
                    if (!hitResult.entityHit.isNone()) {
                        movement.onGround = true;
                        movement.jump = false;
                    }
                });
        }
    }
}
