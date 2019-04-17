namespace game {


    export class PickableSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Pickable, ut.HitBox2D.HitBoxOverlapResults, ut.Entity, game.Animation], (pickable, overlapResults, entity, animation) => {
                if (overlapResults.overlaps.length > 0) {
                    let other = overlapResults.overlaps[0].otherEntity;
                    let otherLayer = this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                    if (otherLayer != 3) {
                        return;
                    }
                    pickable.Picker = other;
                    HealthSystem.Die(this.world, entity, .86);

                }
            });
        }
    }
}
