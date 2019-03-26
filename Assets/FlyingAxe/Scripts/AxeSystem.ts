
namespace game {

    /** New System */
    export class AxeSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity,game.Axe],(entity,axe)=>{
                if(ut.Runtime.Input.getMouseButtonDown(0) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)){
                    AxeService.ThrowAxe(this.world,entity);
                }
            });
        }
    }
}
