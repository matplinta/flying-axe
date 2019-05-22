namespace game {

    /** New System */
    export class DropItemSystem extends ut.ComponentSystem {
        private availableItems: string[] = ["game.HealthPotion", "game.ScoreGem", "game.StrengthPotion"];

        OnUpdate(): void {
            this.world.forEach(
                [game.DropItemOnKill,
                    game.Dead,
                    ut.Core2D.TransformLocalPosition,
                    ut.Entity],
                (itemDrop, dead, transformLocalPosition, entity) => {
                    let context = this.world.getConfigData(game.GameContext);
                    for (let item of this.availableItems) {
                        if (Math.random() <= context.dropRate) {
                            item = "game.StrengthPotion";
                            let itemEntity = ut.EntityGroup.instantiate(this.world, item)[0];
                            let itemTransformPosition = this.world.getComponentData(itemEntity, ut.Core2D.TransformLocalPosition);
                            itemTransformPosition.position = transformLocalPosition.position.add(new Vector3(0,1,0));
                            this.world.setComponentData(itemEntity, itemTransformPosition);
                            break;
                        }
                    }
                    this.world.removeComponent(entity, game.DropItemOnKill);

                });
        }
    }
}
