namespace game {

    import Color = ut.Core2D.Color;

    /** New System */
    export class DamageVignetteSystem extends ut.ComponentSystem {
        private startColor = new Color(1, 1, 1, 0);
        private endColor = new Color(1, 1, 1, .5);

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.DamageVignette, ut.Entity, ut.Core2D.Sprite2DRenderer], (damageVignette, entity, spriteRenderer) => {

                if (damageVignette.ElapsedTime < damageVignette.Duration) {
                    spriteRenderer.color = this.endColor;
                    damageVignette.ElapsedTime += dt;
                } else {
                    spriteRenderer.color = this.startColor;
                }

            });
        }
    }
}
