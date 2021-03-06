namespace game {


    export class PickableSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Pickable, ut.HitBox2D.HitBoxOverlapResults, ut.Entity, game.Animation], (pickable, overlapResults, entity, animation) => {
                if (overlapResults.overlaps.length > 0) {
                    for (let idx in overlapResults.overlaps){
                        let other = overlapResults.overlaps[idx].otherEntity;
                        if (this.world.hasComponent(other, game.PlayerTag)) {
                            let otherLayer = this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                            if (otherLayer != 3) {
                                return;
                            }
                            pickable.Picker = other;
                            SoundService.play(this.world, "PickUp");
                            if (this.world.hasComponent(entity, ut.Physics2D.RigidBody2D)) {
                                this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                            }
                            HealthSystem.Die(this.world, entity, .86);
                        }
                    }
                }
            });
        }
    }
}
