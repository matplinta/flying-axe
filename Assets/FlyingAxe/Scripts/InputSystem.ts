namespace game {
    @ut.executeBefore(ut.Shared.InputFence)
    export class InputSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            this.world.forEach([game.Input, game.Movement], (input, movement) => {
                if (ut.Core2D.Input.isTouchSupported()) {
                    this.HandleTouchInput(input, movement)
                } else {
                    this.HandleClassicInput(input, movement)
                }
            });
        }

        HandleTouchInput(input: game.Input, movement: game.Movement): void {

        }

        HandleClassicInput(input: game.Input, movement: game.Movement): void {
            this.HandleKeyBoardInput(input, movement);
            this.HandleMouseInput(input);
        }

        HandleKeyBoardInput(input: game.Input, movement: game.Movement): void {
            if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                input.axis = new Vector2(-1, input.axis.y);
            } else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                input.axis = new Vector2(1, input.axis.y);
            } else {
                input.axis = new Vector2(0, input.axis.y);
            }
            movement.direction = input.axis;
            
            if(ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)){
                movement.shouldJump = true;
            }
            input.weaponInteraction = ut.Runtime.Input.getMouseButtonDown(0);
            
        }

        HandleMouseInput(input: game.Input): void {
            input.aimDir = ut.Core2D.Input.translateScreenToWorld(this.world, ut.Core2D.Input.getInputPosition());
        }
    }
}
