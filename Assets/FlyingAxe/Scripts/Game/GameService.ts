namespace game {

    /** New System */
    export class GameService {

        private static Camera: ut.Entity;

        static GetCamera(world: ut.World) {
            if (this.Camera == null) {
                let cameraEntity: ut.Entity;
                world.forEach([ut.Core2D.Camera2D, ut.Entity], (camera, entity) => {
                    cameraEntity = new ut.Entity(entity.index, entity.version);
                });
                this.Camera = cameraEntity;
                return cameraEntity;
            } else {
                return this.Camera;
            }

        }


        static setEntityEnabled(world: ut.World, entity: ut.Entity, isEnabled: boolean) {
            let hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
            if (isEnabled && hasDisabledComponent) {
                world.removeComponent(entity, ut.Disabled);
            } else if (!isEnabled && !hasDisabledComponent) {

                if (world.hasComponent(entity, game.Animation)) {
                    let anim = world.getComponentData(entity, game.Animation);
                    AnimationSystem.DisableAnimations(world, anim);

                }
                if (world.hasComponent(entity, ut.Physics2D.BoxCollider2D)) {
                    world.removeComponent(entity, ut.Physics2D.BoxCollider2D);
                }

                world.addComponent(entity, ut.Disabled);

            }
        }

        static gameStateEntity: ut.Entity;

        static clearGameState() {
            this.gameStateEntity = new ut.Entity();
        };

        static getGameState(world: ut.World): game.GameState {

            if (!world.exists(this.gameStateEntity)) {
                this.gameStateEntity = world.getEntityByName("Game");
                if (!world.exists(this.gameStateEntity)) {
                    this.gameStateEntity = null;
                    return null;
                }
            }

            return world.getComponentData(this.gameStateEntity, game.GameState);
        }
        
        static IsFacingEntity(transform1: ut.Core2D.TransformLocalPosition, transform2: ut.Core2D.TransformLocalPosition, transform1Scale: ut.Core2D.TransformLocalScale) {
            return transform1.position.x > transform2.position.x && transform1Scale.scale.x == -1 || transform1.position.x < transform2.position.x && transform1Scale.scale.x == 1;
        }

        static genRandom(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }
}
