namespace game {


    export class PickableSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Pickable, ut.HitBox2D.HitBoxOverlapResults, ut.Entity, game.Animation], (pickable, overlapResults, entity, animation) => {
                if (overlapResults.overlaps.length > 0) {
                    let other = overlapResults.overlaps[0].otherEntity;
                    let otherLayer = this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                    if (otherLayer != 3) {
                        console.log("Layer ", otherLayer, "instead of layer 3 in HitBox Overlap");
                        return;
                    }
                    pickable.Picker = other;
                    SoundService.play(this.world, "PickUp");
                    console.log("Picked up pickable");
                    if (this.world.hasComponent(entity, ut.Physics2D.RigidBody2D)) {
                        this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                    }
                    HealthSystem.Die(this.world, entity, .86);
                }
            });
        }
    }
}
