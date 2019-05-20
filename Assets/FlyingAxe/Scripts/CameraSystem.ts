
namespace game {

    /** New System */
    export class CameraSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            // this.world.forEach(
            //     [ut.Entity, ut.Core2D.TransformLocalPosition, game.PlayerTag],
            //     (entity, position, playerTag) => {
            //         // let smoothSpeed = 20 * this.scheduler.deltaTime();
            //         let camera = game.GameService.GetCamera(this.world);
            //         let cameraPosition = this.world.getComponentData(camera, ut.Core2D.TransformLocalPosition);
            //         let newCameraPositionVector =new Vector3(position.position.x, cameraPosition.position.y, cameraPosition.position.z);
            //         // newCameraPositionVector.lerp(position.position, smoothSpeed)
            //         newCameraPositionVector.y = cameraPosition.position.y;
            //         let newCameraPosition = new ut.Core2D.TransformLocalPosition;
            //         newCameraPosition.position = newCameraPositionVector;
            //         this.world.setComponentData(camera, newCameraPosition);
            //     });
        }
    }
}
