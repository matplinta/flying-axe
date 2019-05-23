namespace game {
    @ut.executeAfter(ut.Shared.UserCodeEnd)

    /** New System */
    export class DestroySystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.Destroy], (entity, destroy) => {
                console.log("destroying tree of entity", this.world.getEntityName(entity), " idx: ", entity.index);
                ut.Core2D.TransformService.destroyTree(this.world, entity, true);
            });
        }
    }
}
