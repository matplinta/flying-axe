namespace game {

    export class StrengthPotionSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.StrengthPotion, game.Dead, game.Pickable, ut.Entity], (strengthPotion, dead, pickable, entity) => {
                let axeEntity = this.world.getEntityByName("Axe");
                if (axeEntity.index != ut.NONE.index) {
                    let weapon = this.world.getComponentData(axeEntity, game.Weapon);
                    weapon.damage += strengthPotion.StrengthIncrease;
                    this.world.setComponentData(axeEntity, weapon);
                    this.world.removeComponent(entity, game.StrengthPotion);
                }
            });
        }
    }
}
