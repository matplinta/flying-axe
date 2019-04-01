var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var AimSystem = /** @class */ (function (_super) {
        __extends(AimSystem, _super);
        function AimSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AimSystem_1 = AimSystem;
        AimSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Input, game.AimSpeed, ut.Core2D.TransformLocalRotation, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, ut.Core2D.TransformObjectToWorld], function (input, speed, transformRotation, transformLocalPosition, transformScale, objectToWorld) {
                var worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                var dir = new Vector3().subVectors(input.aimDir, worldPos);
                var angle = Math.atan2(dir.y, dir.x);
                var scale = transformScale.scale;
                if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                    Flip(scale, transformScale);
                }
                AimSystem_1.LookAt(input.aimDir, transformRotation, worldPos);
            });
            function Flip(scale, transformScale) {
                scale.y *= -1;
                transformScale.scale = scale;
            }
            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2.0 && scale.y > 0;
            }
            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2.0 && angle < Math.PI / 2.0 && scale.y < 0;
            }
        };
        AimSystem.LookAt = function (target, transformRotation, currentWorldPos) {
            var dir = new Vector3().subVectors(target, currentWorldPos);
            var angle = Math.atan2(dir.y, dir.x);
            var euler = new Euler(0, 0, angle);
            transformRotation.rotation = new Quaternion().setFromEuler(euler);
        };
        var AimSystem_1;
        AimSystem = AimSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], AimSystem);
        return AimSystem;
    }(ut.ComponentSystem));
    game.AimSystem = AimSystem;
})(game || (game = {}));
var game;
(function (game) {
    var AxeCollisionSystem = /** @class */ (function (_super) {
        __extends(AxeCollisionSystem, _super);
        function AxeCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AxeCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.HitBox2D.HitBoxOverlapResults, game.Spin, ut.Entity, ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalRotation,
                ut.Core2D.TransformLocalScale], function (overlapResults, spin, entity, transformLocalPosition, transformLocalRotation, transformLocalScale) {
                if (overlapResults.overlaps.length > 0) {
                    var other = overlapResults.overlaps[0].otherEntity;
                    var otherLayer = _this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                    if (spin.speed > 0) {
                        var contactPointData = _this.ComputeNormalAndContactPoint(other, transformLocalPosition);
                        var contactPoint = contactPointData[0];
                        var contactPointNormal = contactPointData[1];
                        game.AimSystem.LookAt(new Vector3().subVectors(transformLocalPosition.position, contactPointNormal), transformLocalRotation, transformLocalPosition.position);
                        _this.world.removeComponent(entity, game.Spin);
                        _this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                        var child = ut.Core2D.TransformService.getChild(_this.world, entity, 0);
                        _this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], function (localRotation) {
                            localRotation.rotation = new Quaternion(0, 0, 0, 1);
                        });
                        var particleEntity = ut.EntityGroup.instantiate(_this.world, "game.HitParticle")[0];
                        var particleTransformPosition = _this.world.getComponentData(particleEntity, ut.Core2D.TransformLocalPosition);
                        particleTransformPosition.position = contactPoint;
                        _this.world.setComponentData(particleEntity, particleTransformPosition);
                        transformLocalPosition.position = contactPoint;
                    }
                    else if (spin.speed < 0 && otherLayer != 1) {
                        console.log("Enemy recall hit");
                    }
                }
            });
        };
        AxeCollisionSystem.prototype.ComputeNormalAndContactPoint = function (other, transformLocalPosition) {
            var otherRotation = this.world.getComponentData(other, ut.Core2D.TransformLocalRotation).rotation;
            var otherPosition = this.world.getComponentData(other, ut.Core2D.TransformLocalPosition);
            var otherScale = this.world.getComponentData(other, ut.Core2D.TransformLocalScale).scale;
            var otherUp = new Vector3(0, 1, 0);
            otherUp = otherUp.applyQuaternion(otherRotation);
            var otherRight = new Vector3(1, 0, 0);
            otherRight = otherRight.applyQuaternion(otherRotation);
            var dir = transformLocalPosition.position.sub(otherPosition.position);
            var dir_x = dir.dot(otherRight);
            var half_width = otherScale.x / 2.0;
            var half_height = otherScale.y / 2.0;
            if (dir_x > half_width) {
                dir_x = half_width;
            }
            else if (dir_x < -half_width) {
                dir_x = -half_width;
            }
            var dir_y = dir.dot(otherUp);
            if (dir_y > half_height) {
                dir_y = half_height;
            }
            else if (dir_y < -half_height) {
                dir_y = -half_height;
            }
            var contactPoint = otherPosition.position.add(otherRight.multiplyScalar(dir_x)).add(otherUp.multiplyScalar(dir_y));
            var contactPointNormal = (transformLocalPosition.position.sub(contactPoint)).normalize();
            return [contactPoint, contactPointNormal];
        };
        AxeCollisionSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.requiredComponents(ut.Physics2D.ColliderContacts),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], AxeCollisionSystem);
        return AxeCollisionSystem;
    }(ut.ComponentSystem));
    game.AxeCollisionSystem = AxeCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var EnemyBehaviorFilter = /** @class */ (function (_super) {
        __extends(EnemyBehaviorFilter, _super);
        function EnemyBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EnemyBehaviorFilter;
    }(ut.EntityFilter));
    game.EnemyBehaviorFilter = EnemyBehaviorFilter;
    var EnemyBehavior = /** @class */ (function (_super) {
        __extends(EnemyBehavior, _super);
        function EnemyBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the EnemyBehaviorFilter signature, once when enabled
        EnemyBehavior.prototype.OnEntityEnable = function () {
            var totalTime = ut.Time.time();
            var newSpeed = this.data.speed.value + (this.data.speedChange.changePerSecond * totalTime);
            this.data.speed.value = newSpeed;
            var randomX = genRandom(this.data.bounds.minX, this.data.bounds.maxX);
            var newPos = new Vector3(randomX, this.data.bounds.minY, 0);
            this.data.position.position = newPos;
            console.log("enemy initialized. Speed: " + newSpeed);
        };
        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        EnemyBehavior.prototype.OnEntityUpdate = function () {
            var localPosition = this.data.position.position;
            var playerPosition = new Vector3();
            this.world.forEach([ut.Core2D.TransformLocalPosition,
                game.PlayerTag,
                game.Health], function (playerPositionTemp, playerTag, playerHealth) {
                playerPosition = playerPositionTemp.position;
            });
            //tutaj zrobic zeby leciał do playera
            var distance = localPosition.distanceTo(playerPosition);
            var delta = new Vector3();
            delta = delta.subVectors(playerPosition, localPosition);
            delta.normalize();
            var moveSpeed = this.data.speed.value * ut.Time.deltaTime();
            localPosition = localPosition.add(delta.multiplyScalar(moveSpeed));
            this.data.position.position = localPosition;
            // Destroy Enemy
            //     if(localPosition.y)
            //    
        };
        return EnemyBehavior;
    }(ut.ComponentBehaviour));
    game.EnemyBehavior = EnemyBehavior;
    function genRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.GetCamera = function (world) {
            if (this.Camera == null) {
                var cameraEntity_1;
                world.forEach([ut.Core2D.Camera2D, ut.Entity], function (camera, entity) {
                    cameraEntity_1 = new ut.Entity(entity.index, entity.version);
                });
                this.Camera = cameraEntity_1;
                return cameraEntity_1;
            }
            else {
                return this.Camera;
            }
        };
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    var InputSystem = /** @class */ (function (_super) {
        __extends(InputSystem, _super);
        function InputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Input], function (input) {
                if (ut.Core2D.Input.isTouchSupported()) {
                    _this.HandleTouchInput(input);
                }
                else {
                    _this.HandleClassicInput(input);
                }
            });
        };
        InputSystem.prototype.HandleTouchInput = function (input) {
        };
        InputSystem.prototype.HandleClassicInput = function (input) {
            this.HandleKeyBoardInput(input);
            this.HandleMouseInput(input);
        };
        InputSystem.prototype.HandleKeyBoardInput = function (input) {
            var movementDir = 0;
            var heightLevel = 0;
            if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.LeftArrow)) {
                movementDir += -1;
            }
            else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.RightArrow)) {
                movementDir += 1;
            }
            else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.UpArrow)) {
                heightLevel += 1;
            }
            input.movementDir = movementDir;
            input.heightLevel = heightLevel;
            input.weaponInteraction = ut.Runtime.Input.getMouseButtonDown(0) || ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space);
        };
        InputSystem.prototype.HandleMouseInput = function (input) {
            input.aimDir = ut.Core2D.Input.translateScreenToWorld(this.world, ut.Core2D.Input.getInputPosition());
        };
        InputSystem = __decorate([
            ut.executeBefore(ut.Shared.InputFence)
        ], InputSystem);
        return InputSystem;
    }(ut.ComponentSystem));
    game.InputSystem = InputSystem;
})(game || (game = {}));
var game;
(function (game) {
    var MovementSystem = /** @class */ (function (_super) {
        __extends(MovementSystem, _super);
        function MovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovementSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.MovementSpeed,
                game.Input,
                ut.Physics2D.Velocity2D,
                ut.Entity,
                ut.Physics2D.RigidBody2D], function (speed, input, velocity, entity, body) {
                var setVelocity = new ut.Physics2D.SetVelocity2D;
                setVelocity.velocity = new Vector2(speed.value * input.movementDir * dt, velocity.velocity.y);
                // setVelocity.velocity = new Vector2(speed.value * input.movementDir * dt,speed.value * input.heightLevel * dt);
                _this.world.addComponentData(entity, setVelocity);
            });
        };
        MovementSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], MovementSystem);
        return MovementSystem;
    }(ut.ComponentSystem));
    game.MovementSystem = MovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var RecallSystem = /** @class */ (function (_super) {
        __extends(RecallSystem, _super);
        function RecallSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RecallSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Recall,
                ut.Core2D.TransformLocalPosition,
                ut.Core2D.TransformLocalRotation,
                ut.Core2D.TransformLocalScale,
                ut.Core2D.TransformNode,
                ut.Entity], function (recall, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, recalledEntity) {
                var callerEntity = recall.Caller;
                var callerObjectToWorld = _this.world.getComponentData(callerEntity, ut.Core2D.TransformObjectToWorld);
                var callerWorldPos = new Vector3().setFromMatrixPosition(callerObjectToWorld.matrix);
                var distanceToCaller = transformLocalPosition.position.distanceTo(callerWorldPos);
                if (distanceToCaller < 1.0) {
                    AttachToCaller(_this.world, transformNode, transformLocalPosition, transformLocalRotation, transformLocalScale, callerEntity, recalledEntity);
                }
                else {
                    MoveTowardsCaller(transformLocalPosition, callerWorldPos, recall);
                }
            });
            function MoveTowardsCaller(transformLocalPosition, callerWorldPos, recall) {
                transformLocalPosition.position = new Vector3().lerpVectors(transformLocalPosition.position, callerWorldPos, dt * recall.speed);
            }
            function AttachToCaller(world, transformNode, transformLocalPosition, transformLocalRotation, transformLocalScale, callerEntity, recalledEntity) {
                transformNode.parent = callerEntity;
                world.removeComponent(recalledEntity, game.Recall);
                world.removeComponent(recalledEntity, game.Spin);
                world.removeComponent(recalledEntity, ut.Physics2D.RigidBody2D);
                var entityChild = ut.Core2D.TransformService.getChild(world, recalledEntity, 0);
                world.usingComponentData(entityChild, [ut.Core2D.TransformLocalRotation], function (localRotation) {
                    localRotation.rotation = new Quaternion(0, 0, 0, 1);
                });
                world.usingComponentData(callerEntity, [game.WeaponControl], function (weaponControl) {
                    weaponControl.isInHand = true;
                    transformLocalPosition.position = weaponControl.weaponInHandLocalPosition;
                    transformLocalScale.scale = weaponControl.weaponInHandLocalScale;
                    transformLocalRotation.rotation = weaponControl.weaponInHandLocalRotation;
                });
            }
        };
        return RecallSystem;
    }(ut.ComponentSystem));
    game.RecallSystem = RecallSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SpinningSystem = /** @class */ (function (_super) {
        __extends(SpinningSystem, _super);
        function SpinningSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinningSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.Spin], function (entity, spin) {
                var child = ut.Core2D.TransformService.getChild(_this.world, entity, 0);
                _this.world.usingComponentData(child, [ut.Core2D.TransformLocalRotation], function (localRotation) {
                    localRotation.rotation = localRotation.rotation.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), spin.speed * dt));
                });
            });
        };
        SpinningSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(game.AxeCollisionSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], SpinningSystem);
        return SpinningSystem;
    }(ut.ComponentSystem));
    game.SpinningSystem = SpinningSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    /**
     * Placeholder system to provide a UnityEngine.Time like API
     *
     * e.g.
     *  let deltaTime = ut.Time.deltaTime();
     *  let time = ut.Time.time();
     *
     */
    var Time = /** @class */ (function (_super) {
        __extends(Time, _super);
        function Time() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Time_1 = Time;
        Time.deltaTime = function () {
            return Time_1._deltaTime;
        };
        Time.time = function () {
            return Time_1._time;
        };
        Time.reset = function () {
            Time_1._time = 0;
        };
        Time.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            Time_1._deltaTime = dt;
            Time_1._time += dt;
        };
        var Time_1;
        Time._deltaTime = 0;
        Time._time = 0;
        Time = Time_1 = __decorate([
            ut.executeBefore(ut.Shared.UserCodeStart)
        ], Time);
        return Time;
    }(ut.ComponentSystem));
    ut.Time = Time;
})(ut || (ut = {}));
var game;
(function (game) {
    var WeaponControlSystem = /** @class */ (function (_super) {
        __extends(WeaponControlSystem, _super);
        function WeaponControlSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WeaponControlSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.WeaponControl, game.Input, ut.Entity], function (weaponControl, input, entity) {
                if (input.weaponInteraction) {
                    if (weaponControl.isInHand) {
                        var weaponLocalPosition = _this.world.getComponentData(weaponControl.CurrentWeapon, ut.Core2D.TransformLocalPosition);
                        weaponControl.weaponInHandLocalPosition = weaponLocalPosition.position;
                        var weaponLocalRotation = _this.world.getComponentData(weaponControl.CurrentWeapon, ut.Core2D.TransformLocalRotation);
                        weaponControl.weaponInHandLocalRotation = weaponLocalRotation.rotation;
                        var weaponLocalScale = _this.world.getComponentData(weaponControl.CurrentWeapon, ut.Core2D.TransformLocalScale);
                        weaponControl.weaponInHandLocalScale = weaponLocalScale.scale;
                        game.WeaponService.ThrowWeapon(_this.world, weaponControl.CurrentWeapon);
                        weaponControl.isInHand = false;
                    }
                    else {
                        game.WeaponService.RecallWeapon(_this.world, weaponControl.CurrentWeapon, entity);
                    }
                }
            });
        };
        WeaponControlSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.executeAfter(game.AimSystem)
        ], WeaponControlSystem);
        return WeaponControlSystem;
    }(ut.ComponentSystem));
    game.WeaponControlSystem = WeaponControlSystem;
})(game || (game = {}));
var game;
(function (game) {
    var WeaponService = /** @class */ (function () {
        function WeaponService() {
        }
        WeaponService.ThrowWeapon = function (world, weapon) {
            world.usingComponentData(weapon, [ut.Core2D.TransformLocalPosition,
                ut.Core2D.TransformLocalRotation,
                ut.Core2D.TransformLocalScale,
                ut.Core2D.TransformNode,
                ut.Core2D.TransformObjectToWorld], function (transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, objectToWorld) {
                var right = DetachFromCaller(objectToWorld, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode);
                ApplyForceInDirection(right);
                StartSpinningTowards(right);
            });
            function DetachFromCaller(objectToWorld, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode) {
                var worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                var worldRotation = ut.Core2D.TransformService.computeWorldRotation(world, weapon);
                var worldScale = transformLocalScale.scale;
                world.usingComponentData(transformNode.parent, [ut.Core2D.TransformLocalScale], function (parentScale) {
                    worldScale = worldScale.multiply(parentScale.scale);
                });
                transformNode.parent = ut.NONE;
                transformLocalPosition.position = worldPos;
                transformLocalRotation.rotation = worldRotation;
                transformLocalScale.scale = worldScale;
                var right = new Vector3(1, 0, 0);
                right = right.applyQuaternion(worldRotation);
                return right;
            }
            function ApplyForceInDirection(right) {
                var impulse = new ut.Physics2D.AddImpulse2D;
                impulse.impulse = new Vector2(right.x, right.y).multiplyScalar(15);
                var rb2d = new ut.Physics2D.RigidBody2D();
                rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
                rb2d.friction = 1;
                rb2d.freezeRotation = false;
                if (world.hasComponent(weapon, ut.Physics2D.RigidBody2D)) {
                    world.setComponentData(weapon, rb2d);
                }
                else {
                    world.addComponentData(weapon, rb2d);
                }
                if (world.hasComponent(weapon, ut.Physics2D.AddImpulse2D)) {
                    world.setComponentData(weapon, impulse);
                }
                else {
                    world.addComponentData(weapon, impulse);
                }
            }
            function StartSpinningTowards(right) {
                if (!world.hasComponent(weapon, game.Spin)) {
                    var spin = new game.Spin();
                    spin.speed = 40;
                    spin.direction = right;
                    world.addComponentData(weapon, spin);
                }
            }
        };
        WeaponService.RecallWeapon = function (world, axe, caller) {
            var recall = new game.Recall();
            recall.Caller = caller;
            recall.speed = 15;
            if (world.hasComponent(axe, game.Recall)) {
                world.setComponentData(axe, recall);
            }
            else {
                world.addComponentData(axe, recall);
            }
            var spin = new game.Spin();
            spin.speed = -40;
            if (world.hasComponent(axe, game.Spin)) {
                world.setComponentData(axe, spin);
            }
            else {
                world.addComponentData(axe, spin);
            }
            var rb2d = new ut.Physics2D.RigidBody2D();
            rb2d.bodyType = ut.Physics2D.BodyType.BulletDynamic;
            rb2d.friction = 1;
            rb2d.freezeRotation = false;
            if (world.hasComponent(axe, ut.Physics2D.RigidBody2D)) {
                world.setComponentData(axe, rb2d);
            }
            else {
                world.addComponentData(axe, rb2d);
            }
        };
        return WeaponService;
    }());
    game.WeaponService = WeaponService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var DestroyAfterDelaySystem = /** @class */ (function (_super) {
        __extends(DestroyAfterDelaySystem, _super);
        function DestroyAfterDelaySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DestroyAfterDelaySystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Entity, game.DestroyAfterDelay], function (entity, destroyAfterDelay) {
                var destroyDelay = destroyAfterDelay.delay;
                destroyDelay -= deltaTime;
                destroyAfterDelay.delay = destroyDelay;
                if (destroyDelay <= 0) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                }
            });
        };
        return DestroyAfterDelaySystem;
    }(ut.ComponentSystem));
    game.DestroyAfterDelaySystem = DestroyAfterDelaySystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map