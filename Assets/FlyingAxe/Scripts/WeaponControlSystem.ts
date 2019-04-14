namespace game {

    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    @ut.executeAfter(AimSystem)
    export class WeaponControlSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            
            this.world.forEach([game.WeaponControl,game.Input, ut.Entity], (weaponControl, input, entity) => {
                if (input.weaponInteraction) {
                    if (weaponControl.isInHand) {
                        let weaponLocalPosition = this.world.getComponentData(weaponControl.CurrentWeapon,ut.Core2D.TransformLocalPosition);
                        weaponControl.weaponInHandLocalPosition = weaponLocalPosition.position;
                         let weaponLocalRotation = this.world.getComponentData(weaponControl.CurrentWeapon,ut.Core2D.TransformLocalRotation);
                        weaponControl.weaponInHandLocalRotation = weaponLocalRotation.rotation;
                         let weaponLocalScale = this.world.getComponentData(weaponControl.CurrentWeapon,ut.Core2D.TransformLocalScale);
                        weaponControl.weaponInHandLocalScale = weaponLocalScale.scale;
                        WeaponService.ThrowWeapon(this.world, weaponControl.CurrentWeapon);

                        weaponControl.isInHand = false;
                    } else {
                        WeaponService.RecallWeapon(this.world, weaponControl.CurrentWeapon, entity);
                    }
                }
            });
        }
    }
}
