namespace game {

    export class ParalaxSystem extends ut.ComponentSystem {

        private playerPrevPos: Vector3 = new Vector3;

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.PlayerTag, ut.Core2D.TransformLocalPosition], (player, playerTransform) => {
                this.world.forEach([game.ParalaxElement, ut.Core2D.TransformLocalPosition,ut.Entity], (paralaxElement, elementTransform,entity) => {
                    let deltaPos = new Vector3().subVectors(playerTransform.position, this.playerPrevPos).normalize();
                    deltaPos.multiplyScalar(paralaxElement.Speed * dt * -1);
                    deltaPos.y = 0;
                    elementTransform.position = elementTransform.position.add(deltaPos);
                });
                this.playerPrevPos = playerTransform.position;
            });


        }
    }
}
