namespace game {

    /** New System */
    export class WeaponControlSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.WeaponControl, ut.Entity], (weaponControl, entity) => {
                if (ut.Runtime.Input.getMouseButtonDown(0) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)) {
                    if (weaponControl.isInHand) {
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
