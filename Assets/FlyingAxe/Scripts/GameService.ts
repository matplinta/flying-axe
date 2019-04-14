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
                world.addComponent(entity, ut.Disabled);
            }
        }
    }
}
