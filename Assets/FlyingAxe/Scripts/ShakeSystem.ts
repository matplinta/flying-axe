namespace game {


    export class ShakeSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Shake, ut.Entity], (transformLocalPosition, shake, entity) => {
                if (shake.elapsedTime == 0) {
                    shake.initialPosition = transformLocalPosition.position;
                }
                if (shake.elapsedTime <= shake.duration) {
                    shake.elapsedTime += deltaTime;
                    transformLocalPosition.position = new Vector3().addVectors(shake.initialPosition, new Vector3(Math.random() * shake.amount, Math.random() * shake.amount, 0));
                } else {
                    transformLocalPosition.position = shake.initialPosition;
                    this.world.removeComponent(entity, game.Shake);
                }
            });
        }

        static Shake(world: ut.World, entity: ut.Entity, duration: number, amount: number) {
            let shake = new game.Shake();
            shake.duration = duration;
            shake.amount = amount;
            if (world.hasComponent(entity, game.Shake)) {
                world.setComponentData(entity, shake);
            } else {

                world.addComponentData(entity, shake);
            }
        }
    }
}
