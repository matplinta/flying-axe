
namespace game {

    /** New System */
    export class DestroySystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.EnemyTag, game.Dead, ut.Disabled], (entity, enemy, dead, disabled) => {
                // this.world.destroyEntity(entity);
            });
        }
    }
}
