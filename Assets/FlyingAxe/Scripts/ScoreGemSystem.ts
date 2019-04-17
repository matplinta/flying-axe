namespace game {

    /** New System */
    export class ScoreGemSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.ScoreGem, game.Dead, game.Pickable, ut.Entity], (scoreGem, dead, pickable, entity) => {
                ScoreSystem.AddScore(this.world, scoreGem.scoreGain);
                this.world.removeComponent(entity, game.ScoreGem);
            });
        }
    }
}
