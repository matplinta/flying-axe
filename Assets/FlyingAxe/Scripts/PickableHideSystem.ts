
namespace game {

    /** New System */
    export class PickableHideSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([game.Pickable, ut.Entity, ut.Physics2D.RigidBody2D], (pickable, entity, rigidBody) => {
                let time = ut.Time.time();
                if (time - pickable.initTime > pickable.delay) {
                    if(this.world.hasComponent(entity, ut.Physics2D.RigidBody2D)){
                        this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                    }
                }
            });
        }
    }
}
