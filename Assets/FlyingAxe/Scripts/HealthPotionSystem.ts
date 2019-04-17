namespace game {

    @ut.executeBefore(game.DeadSystem)
    export class HealthPotionSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.HealthPotion, game.Dead, game.Pickable, ut.Entity], (healthPotion, dead, pickable, entity) => {
                HealthSystem.AddHealth(this.world, pickable.Picker, healthPotion.HealthRestore);
                this.world.removeComponent(entity, game.HealthPotion);
            });
        }
    }
}
