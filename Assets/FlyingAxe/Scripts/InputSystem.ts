namespace game {
    @ut.executeBefore(ut.Shared.InputFence)
    export class InputSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            this.world.forEach([game.Input], input => {
                if (ut.Core2D.Input.isTouchSupported()) {
                    this.HandleTouchInput(input)
                } else {
                    this.HandleClassicInput(input)
                }
            });
        }

        HandleTouchInput(input: game.Input): void {

        }

        HandleClassicInput(input: game.Input): void {
            this.HandleKeyBoardInput(input);
            this.HandleMouseInput(input);
        }

        HandleKeyBoardInput(input: game.Input): void {
            let movementDir = 0
            if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.LeftArrow)) {
                movementDir += -1;
            } else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.RightArrow)) {
                movementDir += 1;
            }
            input.movementDir = movementDir;
            input.weaponInteraction = ut.Runtime.Input.getMouseButtonDown(0) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space);
            
        }

        HandleMouseInput(input: game.Input): void {
            input.aimDir = ut.Core2D.Input.translateScreenToWorld(this.world, ut.Core2D.Input.getInputPosition());
        }
    }
}
