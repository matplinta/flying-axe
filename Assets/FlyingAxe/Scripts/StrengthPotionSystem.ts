namespace game {

    @ut.executeBefore(game.DeadSystem)
    export class StrengthPotionSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.StrengthPotion, game.Dead, game.Pickable, ut.Entity], (strengthPotion, dead, pickable, entity) => {

                let damageSettings = this.world.getConfigData(game.DamageSettings);
                damageSettings.AxeDamage += strengthPotion.StrengthIncrease;
                this.world.setConfigData(damageSettings);
                console.log("Axe damage: ", damageSettings.AxeDamage);

                this.world.removeComponent(entity, game.StrengthPotion);
            });
        }
    }
}
