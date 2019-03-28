
namespace game {

    /** New System */
    export class DestroyAfterDelaySystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            let deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.DestroyAfterDelay],
                (entity, destroyAfterDelay) => {
                    
                    let destroyDelay = destroyAfterDelay.delay;
                    destroyDelay -= deltaTime;
                    destroyAfterDelay.delay = destroyDelay;

                    if (destroyDelay <= 0) {
                        ut.Core2D.TransformService.destroyTree(this.world, entity, true);
                    }
                });
        }
    }
}
