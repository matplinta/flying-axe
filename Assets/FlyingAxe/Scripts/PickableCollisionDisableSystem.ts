
namespace game {

    /** New System */
    export class PickableCollisionDisableSystem extends ut.ComponentSystem {

        OnUpdate():void {
        //     this.world.forEach([ut.Core2D.TransformLocalPosition, ut.Entity, game.Pickable, ut.Physics2D.NewColliderContacts],
        //         (position, entity, pickableTag, contacts) => {
        //             let groundHitResult = ut.HitBox2D.HitBox2DService.hitTest(this.world, position.position.sub(new Vector3(0, 0.7, 0)), GameService.GetCamera(this.world));
        //
        //             // if hit with element below
        //             if (!groundHitResult.entityHit.isNone()) {
        //                 // console.log("groundHitResult", this.world.getEntityName(groundHitResult.entityHit));
        //                 if(this.world.hasComponent(groundHitResult.entityHit, game.GroundTag)){
        //                     movement.onGround = true;
        //                     movement.jump = false;
        //                 }
        //             }
        //           
        //
        //            
        //
        //                     if (!this.world.hasComponent(entity, game.Hit)) {
        //                         this.world.addComponentData(entity, hit);
        //                     }
        //                 }
        //             }
        //         });
        }
    }
}
