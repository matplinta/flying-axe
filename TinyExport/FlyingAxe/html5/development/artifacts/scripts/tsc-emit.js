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
                // let direction = new Vector3().subVectors(input.aimDir, transformLocalPosition.position);
                // transformScale.scale = new Vector3(transformScale.scale.x, direction.x > 0 ? -1 : 1, transformScale.scale.z);
                var scale = transformScale.scale;
                if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                    Flip(scale, transformScale);
                }
                AimSystem_1.LookAt(input.aimDir, transformRotation, worldPos, transformScale);
            });
            function Flip(scale, transformScale) {
                scale.y *= -1;
                // scale.x *= -1;
                // console.log("axe scale X:" + scale.x)
                // console.log("axe scale Y:" +  scale.y)
                transformScale.scale = scale;
            }
            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2.0 && scale.y > 0;
            }
            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2.0 && angle < Math.PI / 2.0 && scale.y < 0;
            }
        };
        AimSystem.LookAt = function (target, transformRotation, currentWorldPos, transformScale) {
            var dir = new Vector3().subVectors(target, currentWorldPos);
            var angle = Math.atan2(dir.y, dir.x);
            var euler = new Euler(0, 0, angle);
            // if (transformScale.scale.x == 1){
            //     euler = new Euler(0, 0, angle);
            // }else {
            //     euler = new Euler(0, 0, -angle);
            // }
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
    var AnimationSystem = /** @class */ (function (_super) {
        __extends(AnimationSystem, _super);
        function AnimationSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.HealthPotion, game.Animation, ut.Entity], function (healthPotion, animation, entity) {
                if (_this.world.hasComponent(entity, game.PlayOneShot))
                    return;
                AnimationSystem.PlayAnimation(_this.world, animation, 0);
            });
            this.world.forEach([ut.Entity, game.PlayOneShot], function (entity, oneShot) {
                oneShot.TimePlayed += _this.scheduler.deltaTime();
                if (oneShot.TimePlayed >= oneShot.Length)
                    _this.world.removeComponent(entity, game.PlayOneShot);
            });
        };
        AnimationSystem.PlayOneShot = function (world, entity, length, state) {
            if (world.hasComponent(entity, game.PlayOneShot)) {
                var oneShot_1 = world.getComponentData(entity, game.PlayOneShot);
                oneShot_1.TimePlayed = 0;
                oneShot_1.Length = length;
                world.setComponentData(entity, oneShot_1);
                var anim_1 = world.getComponentData(entity, game.Animation);
                this.PlayAnimation(world, anim_1, state, true);
                world.setComponentData(entity, anim_1);
                return;
            }
            var oneShot = new game.PlayOneShot;
            oneShot.Length = length;
            world.addComponentData(entity, oneShot);
            var anim = world.getComponentData(entity, game.Animation);
            this.PlayAnimation(world, anim, state, true);
            world.setComponentData(entity, anim);
        };
        AnimationSystem.PlayAnimation = function (world, animations, state, override) {
            if (override === void 0) { override = false; }
            if ((override == false && animations.State == state))
                return;
            animations.State = state;
            var animation = null;
            animation = animations.Animations[state];
            this.ResetAnimationTime(world, animation);
            for (var i = 0; i < animations.Animations.length; i++) {
                game.GameService.setEntityEnabled(world, animations.Animations[i], state == i);
            }
        };
        AnimationSystem.ResetAnimationTime = function (world, animation) {
            var sequencePlayer = world.getComponentData(animation, ut.Core2D.Sprite2DSequencePlayer);
            sequencePlayer.time = 0;
            sequencePlayer.paused = false;
            world.setComponentData(animation, sequencePlayer);
        };
        AnimationSystem.DisableAnimations = function (world, animations) {
            for (var i = 0; i < animations.Animations.length; i++) {
                game.GameService.setEntityEnabled(world, animations.Animations[i], false);
            }
        };
        return AnimationSystem;
    }(ut.ComponentSystem));
    game.AnimationSystem = AnimationSystem;
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
                ut.Core2D.TransformLocalScale, ut.Core2D.TransformNode, game.Weapon], function (overlapResults, spin, entity, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode, weapon) {
                if (overlapResults.overlaps.length > 0) {
                    var other = overlapResults.overlaps[0].otherEntity;
                    var otherLayer = _this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                    // Player is on layer 3!
                    if (otherLayer == 3 || otherLayer == 2) {
                        return;
                    }
                    var playerEntity = _this.world.getEntityByName("Player");
                    var layerConfig = _this.world.getComponentData(playerEntity, ut.Core2D.LayerSorting).layer;
                    if (!playerEntity) {
                        return;
                    }
                    var playerPosition = _this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position;
                    var enemyPosition = _this.world.getComponentData(other, ut.Core2D.TransformLocalPosition).position;
                    var distance = enemyPosition.distanceTo(playerPosition); //distance to enemy 
                    var delta = new Vector3().subVectors(playerPosition, enemyPosition); //vector from player to enemy
                    delta.normalize();
                    var hit = new game.Hit();
                    if (spin.speed > 0) {
                        var contactPointData = _this.ComputeNormalAndContactPoint(other, transformLocalPosition);
                        var contactPoint = contactPointData[0];
                        var contactPointNormal = contactPointData[1];
                        var lookAtPoint = new Vector3().subVectors(transformLocalPosition.position, contactPointNormal);
                        game.AimSystem.LookAt(lookAtPoint, transformLocalRotation, transformLocalPosition.position, transformLocalScale);
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
                        var otherLocalMatrix = _this.world.getComponentData(other, ut.Core2D.TransformLocal).matrix;
                        otherLocalMatrix.getInverse(otherLocalMatrix);
                        contactPoint = contactPoint.applyMatrix4(otherLocalMatrix);
                        var otherScale = _this.world.getComponentData(other, ut.Core2D.TransformLocalScale);
                        transformNode.parent = other;
                        transformLocalScale.scale = transformLocalScale.scale.divide(otherScale.scale);
                        transformLocalPosition.position = contactPoint;
                        hit.Damage = weapon.damage;
                        var direction = new Vector3(delta.x * -1, delta.y * -1);
                        game.WeaponService.ApplyForceInDirection(_this.world, other, direction, 500, false);
                        game.ShakeSystem.Shake(_this.world, game.GameService.GetCamera(_this.world), .1, .1);
                        game.SoundService.play(_this.world, "AxeThrow");
                    }
                    else if (spin.speed < 0 && otherLayer != -1) {
                        hit.Damage = Math.round(weapon.damage * 0.3);
                        // let direction = new Vector3(delta.x * 1, 0);
                        // WeaponService.ApplyForceInDirection(this.world, other, direction, 100, false);
                        console.log("Enemy recall hit");
                    }
                    if (!_this.world.hasComponent(other, game.Hit)) {
                        _this.world.addComponentData(other, hit);
                    }
                }
            });
        };
        AxeCollisionSystem.prototype.ComputeNormalAndContactPoint = function (other, transformLocalPosition) {
            var otherRotation = this.world.getComponentData(other, ut.Core2D.TransformLocalRotation).rotation;
            var otherPosition = this.world.getComponentData(other, ut.Core2D.TransformLocalPosition);
            var otherScale = this.world.getComponentData(other, ut.Core2D.Sprite2DRendererOptions).size;
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
        AxeCollisionSystem.prototype.GetVectorFromPlayerToEntity = function (playerPosition, enemyPosition, speed) {
            var distance = enemyPosition.distanceTo(playerPosition);
            var delta = new Vector3().subVectors(playerPosition, enemyPosition);
            delta.normalize();
            var moveSpeed = speed * ut.Time.deltaTime();
            var direction = delta.multiplyScalar(moveSpeed);
            return direction;
        };
        AxeCollisionSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
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
    /** New System */
    var CameraSystem = /** @class */ (function (_super) {
        __extends(CameraSystem, _super);
        function CameraSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CameraSystem.prototype.OnUpdate = function () {
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
        };
        return CameraSystem;
    }(ut.ComponentSystem));
    game.CameraSystem = CameraSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var CollisionSystem = /** @class */ (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Movement, ut.Core2D.TransformLocalPosition, ut.Entity, game.PlayerTag, ut.Physics2D.ColliderContacts], function (movement, position, entity, playerTag, contacts) {
                movement.onGround = false;
                var groundHitResult = ut.HitBox2D.HitBox2DService.hitTest(_this.world, position.position.sub(new Vector3(0, 0.9, 0)), game.GameService.GetCamera(_this.world));
                // if hit with element below
                if (!groundHitResult.entityHit.isNone()) {
                    if (_this.world.hasComponent(groundHitResult.entityHit, game.GroundTag)) {
                        movement.onGround = true;
                        movement.jump = false;
                    }
                }
                // console.log("Movement.onGround in Collision system: ",movement.onGround );
                /*
                for (let otherEntity of contacts.contacts) {
                    // console.log(this.world.getEntityName(entity), "collided with ", this.world.getEntityName(otherEntity));

                    // if this is an enemy that a player is colliding with
                    if (otherEntity.index != ut.NONE.index && this.world.hasComponent(otherEntity, game.EnemyTag)) {

                        let enemyTag = this.world.getComponentData(otherEntity, game.EnemyTag);
                        let enemyAttack = this.world.getComponentData(otherEntity, game.EnemyAttack);
                        let time = ut.Time.time();
                        if(time - enemyAttack.lastAttackTime > enemyAttack.delayBetweenAttacks){
                            enemyAttack.lastAttackTime = time;

                            this.world.setComponentData(otherEntity, enemyAttack);

                            let hit = new game.Hit();
                            hit.Damage = enemyTag.damageToPlayer;

                            // establishing impulse vector of a hit
                            if (this.world.hasComponent(otherEntity, ut.Core2D.TransformLocalPosition) && this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)){
                                let playerPosition = this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
                                let enemyPosition = this.world.getComponentData(otherEntity, ut.Core2D.TransformLocalPosition).position;

                                let distance = enemyPosition.distanceTo(playerPosition);
                                let delta = new Vector3().subVectors(playerPosition, enemyPosition);
                                delta.normalize();
                                hit.ImpulseForce = 150;
                                let direction = delta.multiplyScalar(hit.ImpulseForce);
                                let impulseVector = new Vector2(direction.x, direction.y/2);
                                hit.Impulse = impulseVector;
                                hit.allowImpulse = true;
                            }

                            if (!this.world.hasComponent(entity, game.Hit)) {
                                this.world.addComponentData(entity, hit);
                            }
                            
                        }
                        
                    }
                }*/
            });
        };
        return CollisionSystem;
    }(ut.ComponentSystem));
    game.CollisionSystem = CollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var Color = ut.Core2D.Color;
    /** New System */
    var DamageVignetteSystem = /** @class */ (function (_super) {
        __extends(DamageVignetteSystem, _super);
        function DamageVignetteSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.startColor = new Color(1, 1, 1, 0);
            _this.endColor = new Color(1, 1, 1, .5);
            return _this;
        }
        DamageVignetteSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.DamageVignette, ut.Entity, ut.Core2D.Sprite2DRenderer], function (damageVignette, entity, spriteRenderer) {
                if (damageVignette.ElapsedTime < damageVignette.Duration) {
                    spriteRenderer.color = _this.endColor;
                    damageVignette.ElapsedTime += dt;
                }
                else {
                    spriteRenderer.color = _this.startColor;
                }
            });
        };
        return DamageVignetteSystem;
    }(ut.ComponentSystem));
    game.DamageVignetteSystem = DamageVignetteSystem;
})(game || (game = {}));
var game;
(function (game) {
    var HitSystem = /** @class */ (function (_super) {
        __extends(HitSystem, _super);
        function HitSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HitSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.Health, game.Hit], function (health, hit) {
                health.current = Math.max(0, health.current - hit.Damage);
            });
            this.world.forEach([game.Hit, game.PlayerTag], function (hit, player) {
                _this.world.forEach([game.DamageVignette], function (damageVignette) {
                    damageVignette.ElapsedTime = 0;
                });
            });
            this.world.forEach([game.Hit, ut.Entity], function (hit, entity) {
                if (hit.allowImpulse) {
                    var impulse = new ut.Physics2D.AddImpulse2D();
                    impulse.impulse = hit.Impulse;
                    _this.world.setOrAddComponentData(entity, impulse);
                    // if (this.world.hasComponent(entity, ut.Physics2D.AddImpulse2D)) {
                    //     this.world.setComponentData(entity, impulse);
                    // } else {
                    //     this.world.addComponentData(entity, impulse);
                    // }
                }
                _this.world.removeComponent(entity, game.Hit);
            });
        };
        HitSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeAfter(game.AxeCollisionSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Hit)
        ], HitSystem);
        return HitSystem;
    }(ut.ComponentSystem));
    game.HitSystem = HitSystem;
})(game || (game = {}));
/// <reference path="HitSystem.ts"/>
var game;
(function (game) {
    var HealthSystem = /** @class */ (function (_super) {
        __extends(HealthSystem, _super);
        function HealthSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HealthSystem_1 = HealthSystem;
        HealthSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Health, ut.Entity], function (health, entity) {
                if (health.current <= 0) {
                    HealthSystem_1.Die(_this.world, entity, 0.1);
                }
            });
        };
        HealthSystem.Die = function (world, entity, dyingTime) {
            if (world.hasComponent(entity, ut.HitBox2D.RectHitBox2D)) {
                world.removeComponent(entity, ut.HitBox2D.RectHitBox2D);
            }
            if (!world.hasComponent(entity, game.Dead)) {
                var dead = new game.Dead();
                dead.elapsedTime = 0;
                dead.dyingTime = dyingTime;
                world.addComponentData(entity, dead);
            }
        };
        HealthSystem.AddHealth = function (world, entity, amount) {
            var health = world.getComponentData(entity, game.Health);
            health.current = Math.min(health.current + amount, health.max);
            world.setComponentData(entity, health);
        };
        HealthSystem.AdjustHealth = function (world, entity, value) {
            if (world.hasComponent(entity, game.Health)) {
                var health = world.getComponentData(entity, game.Health);
                health.current -= value;
                console.log(entity, health);
                world.setComponentData(entity, health);
                if (health.current <= 0) {
                    // this.Die(world, entity, 2)
                }
            }
        };
        var HealthSystem_1;
        HealthSystem = HealthSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.executeAfter(game.HitSystem),
            ut.requiredComponents(game.Health)
        ], HealthSystem);
        return HealthSystem;
    }(ut.ComponentSystem));
    game.HealthSystem = HealthSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var DropItemSystem = /** @class */ (function (_super) {
        __extends(DropItemSystem, _super);
        function DropItemSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.availableItems = ["game.HealthPotion", "game.ScoreGem", "game.StrengthPotion"];
            return _this;
        }
        DropItemSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.DropItemOnKill,
                game.Dead,
                ut.Core2D.TransformLocalPosition,
                ut.Entity], function (itemDrop, dead, transformLocalPosition, entity) {
                var context = _this.world.getConfigData(game.GameContext);
                for (var _i = 0, _a = _this.availableItems; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (Math.random() <= context.dropRate) {
                        var itemEntity = ut.EntityGroup.instantiate(_this.world, item)[0];
                        var itemTransformPosition = _this.world.getComponentData(itemEntity, ut.Core2D.TransformLocalPosition);
                        itemTransformPosition.position = transformLocalPosition.position.add(new Vector3(0, 1, 0));
                        _this.world.setComponentData(itemEntity, itemTransformPosition);
                        if (_this.world.hasComponent(itemEntity, game.Pickable)) {
                            var pickable = _this.world.getComponentData(itemEntity, game.Pickable);
                            pickable.initTime = ut.Time.time();
                            _this.world.setComponentData(itemEntity, pickable);
                        }
                        break;
                    }
                }
                _this.world.removeComponent(entity, game.DropItemOnKill);
            });
        };
        return DropItemSystem;
    }(ut.ComponentSystem));
    game.DropItemSystem = DropItemSystem;
})(game || (game = {}));
var game;
(function (game) {
    var StrengthPotionSystem = /** @class */ (function (_super) {
        __extends(StrengthPotionSystem, _super);
        function StrengthPotionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StrengthPotionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.StrengthPotion, game.Dead, game.Pickable, ut.Entity], function (strengthPotion, dead, pickable, entity) {
                var axeEntity = _this.world.getEntityByName("Axe");
                if (axeEntity.index != ut.NONE.index) {
                    var weapon = _this.world.getComponentData(axeEntity, game.Weapon);
                    weapon.damage += strengthPotion.StrengthIncrease;
                    _this.world.setComponentData(axeEntity, weapon);
                    _this.world.removeComponent(entity, game.StrengthPotion);
                }
            });
        };
        return StrengthPotionSystem;
    }(ut.ComponentSystem));
    game.StrengthPotionSystem = StrengthPotionSystem;
})(game || (game = {}));
/// <reference path="HealthSystem.ts"/>
/// <reference path="CollisionSystem.ts"/>
/// <reference path="DropItemSystem.ts"/>
/// <reference path="StrengthPotionSystem.ts"/>
var game;
(function (game) {
    var DeadSystem = /** @class */ (function (_super) {
        __extends(DeadSystem, _super);
        function DeadSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DeadSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.EnemyTag, game.Dead], function (enemy, dead) {
                if (dead.elapsedTime == 0) {
                    game.ScoreSystem.AddScore(_this.world, enemy.killReward);
                    var spawnerEntity = _this.world.getEntityByName("Spawner");
                    if (spawnerEntity.index != ut.NONE.index) {
                        var spawnerConfig = _this.world.getComponentData(spawnerEntity, game.Spawner);
                        spawnerConfig.numOfEnemies -= 1;
                        _this.world.setComponentData(spawnerEntity, spawnerConfig);
                        console.log("Dead: numOfEnemies:", spawnerConfig.numOfEnemies);
                    }
                }
            });
            this.world.forEach([game.PlayerTag, game.Dead], function (player, dead) {
                if (dead.elapsedTime == 0) {
                    game.GameStateLoadingService.setGameState(_this.world, game.GameStateType.GameOver);
                }
            });
            this.world.forEach([ut.Entity, game.Dead], function (entity, dead) {
                console.log("DEBUGGING: ", _this.world.getEntityName(entity), " idx: ", entity.index);
                if (dead.elapsedTime == 0) {
                    console.log("1");
                    var weapon = ut.Core2D.TransformService.find(_this.world, entity, "Axe");
                    if (_this.world.exists(weapon) && weapon.index != ut.NONE.index && _this.world.hasComponent(weapon, game.Weapon)) {
                        console.log("detached axe from enemy");
                        game.WeaponService.DropWeapon(_this.world, weapon);
                    }
                    console.log("3");
                    if (_this.world.hasComponent(entity, game.Animation)) {
                        console.log("4");
                        game.AnimationSystem.PlayOneShot(_this.world, entity, .86, 1);
                    }
                }
                console.log("5");
                if (dead.elapsedTime < dead.dyingTime) {
                    console.log("6");
                    dead.elapsedTime += _this.scheduler.deltaTime();
                }
                else {
                    // console.log("destroying tree of entity", this.world.getEntityName(entity), " idx: ", entity.index);
                    // ut.Core2D.TransformService.destroyTree(this.world, entity, true);
                    _this.world.setOrAddComponentData(entity, new game.Destroy());
                }
            });
        };
        DeadSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd),
            ut.executeAfter(game.HealthSystem),
            ut.executeAfter(game.CollisionSystem),
            ut.executeAfter(game.DropItemSystem),
            ut.executeAfter(game.StrengthPotionSystem)
        ], DeadSystem);
        return DeadSystem;
    }(ut.ComponentSystem));
    game.DeadSystem = DeadSystem;
})(game || (game = {}));
var game;
(function (game) {
    var DestroySystem = /** @class */ (function (_super) {
        __extends(DestroySystem, _super);
        /** New System */
        function DestroySystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DestroySystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Destroy], function (entity, destroy) {
                console.log("destroying tree of entity", _this.world.getEntityName(entity), " idx: ", entity.index);
                ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
            });
        };
        DestroySystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd)
            /** New System */
        ], DestroySystem);
        return DestroySystem;
    }(ut.ComponentSystem));
    game.DestroySystem = DestroySystem;
})(game || (game = {}));
/// <reference path="DeadSystem.ts"/>
var game;
(function (game) {
    var EnemyBehaviorFilter = /** @class */ (function (_super) {
        __extends(EnemyBehaviorFilter, _super);
        function EnemyBehaviorFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EnemyBehaviorFilter = __decorate([
            ut.executeAfter(game.DeadSystem)
        ], EnemyBehaviorFilter);
        return EnemyBehaviorFilter;
    }(ut.EntityFilter));
    game.EnemyBehaviorFilter = EnemyBehaviorFilter;
    var EnemyBehavior = /** @class */ (function (_super) {
        __extends(EnemyBehavior, _super);
        function EnemyBehavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EnemyBehavior.prototype.OnEntityEnable = function () {
            var totalTime = ut.Time.time();
            var newSpeed = this.data.movement.speed + (this.data.speedChange.changePerSecond * totalTime);
            this.data.movement.speed = newSpeed;
            var playerPosition = this.world.getComponentData(this.world.getEntityByName("Player"), ut.Core2D.TransformLocalPosition).position;
            var enemyPosition = new Vector3();
            while (!this.CheckEnemyPositionBoundaries(enemyPosition, playerPosition, this.data.boundaries)) {
                enemyPosition = new Vector3(game.SpawnSystem.GetRandFromArray([-1, 1]) * genRandom(5, 15) + playerPosition.x, genRandom(this.data.boundaries.minY, this.data.boundaries.maxY), playerPosition.z);
            }
            this.data.position.position = enemyPosition;
        };
        // this method is called for each entity matching the EnemyBehaviorFilter signature, every frame it's enabled
        EnemyBehavior.prototype.OnEntityUpdate = function () {
            var gameState = game.GameService.getGameState(this.world);
            if (gameState.CurrentState == game.GameStateType.GamePlay) {
                var playerEntity = this.world.getEntityByName("Player");
                if (!playerEntity) {
                    return;
                }
                var playerPosition = this.world.getComponentData(playerEntity, ut.Core2D.TransformLocalPosition).position;
                var localPosition = this.data.position.position;
                var distance = localPosition.distanceTo(playerPosition); //distance to enemy 
                var delta = new Vector3().subVectors(playerPosition, localPosition); //vector from player to enemy
                delta.normalize(); //vector normalized
                var moveSpeed = this.data.movement.speed * ut.Time.deltaTime(); //normalized vector multiplied by speed and deltaTime
                var direction = delta.multiplyScalar(moveSpeed);
                var newVelocity = new ut.Physics2D.SetVelocity2D;
                //set scale to face the player at all times
                this.data.scale.scale = new Vector3(delta.x > 0 ? 1 : -1, 1, 1);
                if (this.data.tag.fly) {
                    newVelocity.velocity = new Vector2(direction.x, direction.y);
                }
                else {
                    newVelocity.velocity = new Vector2(direction.x, this.data.velocity.velocity.y);
                }
                if (distance > 0.3) {
                    this.world.addComponentData(this.data.entity, newVelocity);
                }
                else {
                    this.world.addComponentData(this.data.entity, new ut.Physics2D.SetVelocity2D(new Vector2(0, 0)));
                }
            }
        };
        EnemyBehavior.prototype.CheckEnemyPositionBoundaries = function (position, playerPosition, boundaries) {
            //Check if enemy position is within boundaries, and if it is outside of player sight (outside camera)
            return (position.x < boundaries.maxX && position.x > -boundaries.maxX && position.y > boundaries.minY && position.y < boundaries.maxY && (position.x >= 8 + playerPosition.x || position.x <= -8 + playerPosition.x));
        };
        EnemyBehavior.prototype.GetVectorFromEntityToPlayer = function (playerPosition, enemyPosition, speed) {
            var distance = enemyPosition.distanceTo(playerPosition);
            var delta = new Vector3().subVectors(playerPosition, enemyPosition);
            delta.normalize();
            var moveSpeed = speed * ut.Time.deltaTime();
            var direction = delta.multiplyScalar(moveSpeed);
            return direction;
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
    var FlipSystem = /** @class */ (function (_super) {
        __extends(FlipSystem, _super);
        function FlipSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlipSystem.prototype.OnUpdate = function () {
            this.world.forEach([game.FlipScale, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale, ut.Core2D.TransformLocalPosition], function (scaleTag, velocity, scale, position) {
                scale.scale = new Vector3(velocity.velocity.x > 0 ? 1 : -1, 1, 1);
            });
        };
        return FlipSystem;
    }(ut.ComponentSystem));
    game.FlipSystem = FlipSystem;
})(game || (game = {}));
var game;
(function (game) {
    var HealthBarSystem = /** @class */ (function (_super) {
        __extends(HealthBarSystem, _super);
        function HealthBarSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HealthBarSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Health, game.HealthVisualization], function (health, visualization) {
                _this.world.usingComponentData(visualization.Bar, [ut.Core2D.TransformLocalScale], function (transformLocalScale) {
                    var currentScale = transformLocalScale.scale;
                    currentScale.x = health.current / health.max;
                    transformLocalScale.scale = currentScale;
                });
            });
        };
        HealthBarSystem = __decorate([
            ut.executeAfter(game.HealthSystem),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], HealthBarSystem);
        return HealthBarSystem;
    }(ut.ComponentSystem));
    game.HealthBarSystem = HealthBarSystem;
})(game || (game = {}));
var game;
(function (game) {
    var HealthPotionSystem = /** @class */ (function (_super) {
        __extends(HealthPotionSystem, _super);
        function HealthPotionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HealthPotionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.HealthPotion, game.Dead, game.Pickable, ut.Entity], function (healthPotion, dead, pickable, entity) {
                game.HealthSystem.AddHealth(_this.world, pickable.Picker, healthPotion.HealthRestore);
                _this.world.removeComponent(entity, game.HealthPotion);
            });
        };
        HealthPotionSystem = __decorate([
            ut.executeBefore(game.DeadSystem)
        ], HealthPotionSystem);
        return HealthPotionSystem;
    }(ut.ComponentSystem));
    game.HealthPotionSystem = HealthPotionSystem;
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
            this.world.forEach([game.Input, game.Movement], function (input, movement) {
                if (ut.Core2D.Input.isTouchSupported()) {
                    _this.HandleTouchInput(input, movement);
                }
                else {
                    _this.HandleClassicInput(input, movement);
                }
            });
        };
        InputSystem.prototype.HandleTouchInput = function (input, movement) {
        };
        InputSystem.prototype.HandleClassicInput = function (input, movement) {
            this.HandleKeyBoardInput(input, movement);
            this.HandleMouseInput(input);
        };
        InputSystem.prototype.HandleKeyBoardInput = function (input, movement) {
            if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                input.axis = new Vector2(-1, input.axis.y);
            }
            else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                input.axis = new Vector2(1, input.axis.y);
            }
            else {
                input.axis = new Vector2(0, input.axis.y);
            }
            movement.direction = input.axis;
            if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.W)) {
                movement.shouldJump = true;
            }
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
            this.world.forEach([ut.Entity, game.Movement, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale, game.PlayerTag], function (entity, movement, velocity, scale, playerTag) {
                if (movement.direction.x == 1 || movement.direction.x == -1 || movement.direction.x == 0) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(movement.speed * movement.direction.x * dt, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                if (movement.shouldJump) {
                    // console.log("should jump if on ground:", movement.onGround);
                    if (movement.onGround) {
                        var impulse = new ut.Physics2D.AddImpulse2D;
                        impulse.impulse = new Vector2(movement.direction.x, movement.jumpForce);
                        _this.world.addComponentData(entity, impulse);
                        movement.jump = true;
                        movement.onGround = false;
                    }
                }
                movement.shouldJump = false;
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
    var ParalaxSystem = /** @class */ (function (_super) {
        __extends(ParalaxSystem, _super);
        function ParalaxSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.playerPrevPos = new Vector3;
            return _this;
        }
        ParalaxSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([game.PlayerTag, ut.Core2D.TransformLocalPosition], function (player, playerTransform) {
                _this.world.forEach([game.ParalaxElement, ut.Core2D.TransformLocalPosition, ut.Entity], function (paralaxElement, elementTransform, entity) {
                    var deltaPos = new Vector3().subVectors(playerTransform.position, _this.playerPrevPos).normalize();
                    deltaPos.multiplyScalar(paralaxElement.Speed * dt * -1);
                    deltaPos.y = 0;
                    elementTransform.position = elementTransform.position.add(deltaPos);
                });
                _this.playerPrevPos = playerTransform.position;
            });
        };
        return ParalaxSystem;
    }(ut.ComponentSystem));
    game.ParalaxSystem = ParalaxSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PickableHideSystem = /** @class */ (function (_super) {
        __extends(PickableHideSystem, _super);
        function PickableHideSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PickableHideSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Pickable, ut.Entity, ut.Physics2D.RigidBody2D], function (pickable, entity, rigidBody) {
                var time = ut.Time.time();
                if (time - pickable.initTime > pickable.delay) {
                    if (_this.world.hasComponent(entity, ut.Physics2D.RigidBody2D)) {
                        _this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                    }
                }
            });
        };
        return PickableHideSystem;
    }(ut.ComponentSystem));
    game.PickableHideSystem = PickableHideSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PickableSystem = /** @class */ (function (_super) {
        __extends(PickableSystem, _super);
        function PickableSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PickableSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Pickable, ut.HitBox2D.HitBoxOverlapResults, ut.Entity, game.Animation], function (pickable, overlapResults, entity, animation) {
                if (overlapResults.overlaps.length > 0) {
                    for (var idx in overlapResults.overlaps) {
                        var other = overlapResults.overlaps[idx].otherEntity;
                        if (_this.world.hasComponent(other, game.PlayerTag)) {
                            var otherLayer = _this.world.getComponentData(other, ut.Core2D.LayerSorting).layer;
                            if (otherLayer != 3) {
                                return;
                            }
                            pickable.Picker = other;
                            game.SoundService.play(_this.world, "PickUp");
                            if (_this.world.hasComponent(entity, ut.Physics2D.RigidBody2D)) {
                                _this.world.removeComponent(entity, ut.Physics2D.RigidBody2D);
                            }
                            game.HealthSystem.Die(_this.world, entity, .86);
                        }
                    }
                }
            });
        };
        return PickableSystem;
    }(ut.ComponentSystem));
    game.PickableSystem = PickableSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PlayerEnemyCollisionSystem = /** @class */ (function (_super) {
        __extends(PlayerEnemyCollisionSystem, _super);
        function PlayerEnemyCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerEnemyCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.HitBox2D.HitBoxOverlapResults, ut.Entity, ut.Core2D.TransformLocalPosition, game.PlayerTag], function (overlapResults, entity, transformLocalPosition) {
                if (overlapResults.overlaps.length > 0) {
                    for (var idx in overlapResults.overlaps) {
                        var otherEntity = overlapResults.overlaps[idx].otherEntity;
                        if (_this.world.hasComponent(otherEntity, game.EnemyTag) && _this.world.hasComponent(otherEntity, game.EnemyAttack)) {
                            var otherLayer = _this.world.getComponentData(otherEntity, ut.Core2D.LayerSorting).layer;
                            // Enemy is on layer1!
                            if (otherLayer != 1) {
                                // console.log("Hitresult entity: ", this.world.getEntityName(otherEntity), "idx: ", otherEntity.index);
                                return;
                            }
                            var enemyTag = _this.world.getComponentData(otherEntity, game.EnemyTag);
                            var enemyAttack = _this.world.getComponentData(otherEntity, game.EnemyAttack);
                            var time = ut.Time.time();
                            if (time - enemyAttack.lastAttackTime > enemyAttack.delayBetweenAttacks) {
                                enemyAttack.lastAttackTime = time;
                                _this.world.setComponentData(otherEntity, enemyAttack);
                                var hit = new game.Hit();
                                hit.Damage = enemyTag.damageToPlayer;
                                // establishing impulse vector of a hit
                                if (_this.world.hasComponent(otherEntity, ut.Core2D.TransformLocalPosition) && _this.world.hasComponent(entity, ut.Core2D.TransformLocalPosition)) {
                                    var playerPosition = _this.world.getComponentData(entity, ut.Core2D.TransformLocalPosition).position;
                                    var enemyPosition = _this.world.getComponentData(otherEntity, ut.Core2D.TransformLocalPosition).position;
                                    var delta = new Vector3().subVectors(playerPosition, enemyPosition);
                                    delta.normalize();
                                    hit.ImpulseForce = 500;
                                    var direction = delta.multiplyScalar(hit.ImpulseForce);
                                    var impulseVector = new Vector2(direction.x, direction.y / 7);
                                    hit.Impulse = impulseVector;
                                    hit.allowImpulse = true;
                                }
                                if (!_this.world.hasComponent(entity, game.Hit)) {
                                    _this.world.addComponentData(entity, hit);
                                }
                            }
                        }
                    }
                }
            });
        };
        return PlayerEnemyCollisionSystem;
    }(ut.ComponentSystem));
    game.PlayerEnemyCollisionSystem = PlayerEnemyCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PlayerViewFlipSystem = /** @class */ (function (_super) {
        __extends(PlayerViewFlipSystem, _super);
        function PlayerViewFlipSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerViewFlipSystem.prototype.OnUpdate = function () {
            var _this = this;
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalScale, game.PlayerViewTag, ut.Core2D.TransformObjectToWorld], function (transformScale, tag, objectToWorld) {
                var mouseVector = ut.Core2D.Input.translateScreenToWorld(_this.world, ut.Core2D.Input.getInputPosition());
                var worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                var dir = new Vector3().subVectors(mouseVector, worldPos);
                var angle = Math.atan2(dir.y, dir.x);
                // let direction = new Vector3().subVectors(input.aimDir, transformLocalPosition.position);
                // transformScale.scale = new Vector3(transformScale.scale.x, direction.x > 0 ? -1 : 1, transformScale.scale.z);
                var scale = transformScale.scale;
                if (ShouldFlipToLeft(angle, scale) || ShouldFlipToRight(angle, scale)) {
                    Flip(scale, transformScale);
                }
            });
            function Flip(scale, transformScale) {
                // scale.y *= -1;
                scale.x *= -1;
                transformScale.scale = scale;
            }
            function ShouldFlipToLeft(angle, scale) {
                return Math.abs(angle) >= Math.PI / 2.0 && scale.x > 0;
            }
            function ShouldFlipToRight(angle, scale) {
                return angle > -Math.PI / 2.0 && angle < Math.PI / 2.0 && scale.x < 0;
            }
        };
        PlayerViewFlipSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], PlayerViewFlipSystem);
        return PlayerViewFlipSystem;
    }(ut.ComponentSystem));
    game.PlayerViewFlipSystem = PlayerViewFlipSystem;
})(game || (game = {}));
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
/// <reference path="WeaponControlSystem.ts"/>
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
                if (distanceToCaller < 3.0) {
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
                    game.SoundService.play(world, "AxeRecall");
                });
            }
        };
        RecallSystem = __decorate([
            ut.executeAfter(game.WeaponControlSystem)
        ], RecallSystem);
        return RecallSystem;
    }(ut.ComponentSystem));
    game.RecallSystem = RecallSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var ScoreGemSystem = /** @class */ (function (_super) {
        __extends(ScoreGemSystem, _super);
        function ScoreGemSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScoreGemSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.ScoreGem, game.Dead, game.Pickable, ut.Entity], function (scoreGem, dead, pickable, entity) {
                game.ScoreSystem.AddScore(_this.world, scoreGem.scoreGain);
                _this.world.removeComponent(entity, game.ScoreGem);
            });
        };
        return ScoreGemSystem;
    }(ut.ComponentSystem));
    game.ScoreGemSystem = ScoreGemSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ScoreSystem = /** @class */ (function (_super) {
        __extends(ScoreSystem, _super);
        function ScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Updates the scoring text
         */
        ScoreSystem.prototype.OnUpdate = function () {
            var context = this.world.getConfigData(game.GameContext);
            this.world.forEach([ut.Entity, ut.Text.Text2DRenderer, game.Score], function (entity, textRenderer, scoreComponent) {
                var score = context.score.toString();
                var text = "Score: " + score;
                textRenderer.text = text;
            });
        };
        ScoreSystem.AddScore = function (world, value) {
            var context = world.getConfigData(game.GameContext);
            context.score += value;
            world.setConfigData(context);
        };
        ScoreSystem.ResetScore = function (world) {
            var context = world.getConfigData(game.GameContext);
            context.score = 0;
            world.setConfigData(context);
        };
        ScoreSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Score)
        ], ScoreSystem);
        return ScoreSystem;
    }(ut.ComponentSystem));
    game.ScoreSystem = ScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    var ShakeSystem = /** @class */ (function (_super) {
        __extends(ShakeSystem, _super);
        function ShakeSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShakeSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Shake, ut.Entity], function (transformLocalPosition, shake, entity) {
                if (shake.elapsedTime == 0) {
                    shake.initialPosition = transformLocalPosition.position;
                }
                if (shake.elapsedTime <= shake.duration) {
                    shake.elapsedTime += deltaTime;
                    transformLocalPosition.position = new Vector3().addVectors(shake.initialPosition, new Vector3(Math.random() * shake.amount, Math.random() * shake.amount, 0));
                }
                else {
                    transformLocalPosition.position = shake.initialPosition;
                    _this.world.removeComponent(entity, game.Shake);
                }
            });
        };
        ShakeSystem.Shake = function (world, entity, duration, amount) {
            var shake = new game.Shake();
            shake.duration = duration;
            shake.amount = amount;
            if (world.hasComponent(entity, game.Shake)) {
                world.setComponentData(entity, shake);
            }
            else {
                world.addComponentData(entity, shake);
            }
        };
        return ShakeSystem;
    }(ut.ComponentSystem));
    game.ShakeSystem = ShakeSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SpawnSystem = /** @class */ (function (_super) {
        __extends(SpawnSystem, _super);
        /** New System */
        function SpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnSystem_1 = SpawnSystem;
        SpawnSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Spawner], function (spawner) {
                _this.CheckScoreAndIncreaseDifficulty(spawner);
                if (spawner.isPaused) {
                    return;
                }
                var time = spawner.time;
                var delay = spawner.delay;
                time -= ut.Time.deltaTime();
                if (time <= 0 && spawner.numOfEnemies < spawner.maxNumOfEnemies) {
                    time += delay;
                    _this.CheckScoreAndAddNewEnemies();
                    SpawnSystem_1.SpawnEnemy(SpawnSystem_1.GenRandEnemy(), _this.world, spawner.newEnemyKillReward, spawner.newEnemyDamageToPlayer, spawner.enemySpeed);
                    spawner.numOfEnemies += 1;
                    _this.VerboseSpawner(spawner);
                }
                spawner.time = time;
            });
        };
        SpawnSystem.GetRandFromArray = function (array) {
            return array[Math.floor(Math.random() * array.length)];
        };
        SpawnSystem.GenRandEnemy = function () {
            var enemy = SpawnSystem_1.GetRandFromArray(game.GameService.enemyTypeArray);
            // let enemy = SpawnSystem.GetRandFromArray([0, 1]);
            // let enemy = 1;
            console.log("GenRandEnemy: enemyType:", enemy);
            switch (enemy) {
                case game.EnemyType.Land:
                    return "game.LandEnemy";
                case game.EnemyType.Air:
                    return "game.AirEnemy";
                default:
                    return "game.LandEnemy";
            }
        };
        SpawnSystem.prototype.GenRandEnemyBasedOnScore = function () {
            var score = this.world.getConfigData(game.GameContext).score;
            var enemy;
            if (score < 10) {
                enemy = SpawnSystem_1.GetRandFromArray([0]);
            }
            else {
                enemy = SpawnSystem_1.GetRandFromArray([0, 1]);
            }
            console.log("GenRandEnemy: enemyType:", enemy);
            switch (enemy) {
                case game.EnemyType.Land:
                    return "game.LandEnemy";
                case game.EnemyType.Air:
                    return "game.AirEnemy";
                default:
                    return "game.LandEnemy";
            }
        };
        SpawnSystem.SpawnEnemy = function (name, world, killReward, damageToPlayer, speed) {
            console.log("SpawnEnemy:", name);
            var enemy = ut.EntityGroup.instantiate(world, name)[0];
            // if killReward and damageToPlayer defined in function call, apply them to enemy;
            // otherwise use default values
            if (world.hasComponent(enemy, game.EnemyTag) && killReward != 0 && damageToPlayer != 0) {
                var enemyTag = world.getComponentData(enemy, game.EnemyTag);
                var enemyMovement = world.getComponentData(enemy, game.Movement);
                enemyTag.killReward = killReward;
                enemyTag.damageToPlayer = damageToPlayer;
                enemyMovement.speed = speed;
                world.setComponentData(enemy, enemyTag);
                world.setComponentData(enemy, enemyMovement);
            }
        };
        SpawnSystem.prototype.CheckScoreAndAddNewEnemies = function () {
            var context = this.world.getConfigData(game.GameContext);
            var exists = game.GameService.enemyTypeArray.filter(function (x) {
                return x == game.EnemyType.Air;
            });
            var existsBool = exists.length < 1 ? false : true;
            console.log("CheckScoreAndAddNewEnemies:", exists);
            if (context.score > 50 && !existsBool) {
                game.GameService.enemyTypeArray.push(game.EnemyType.Air);
                console.log("3");
            }
            //    for new enemies here add them upon score increase
        };
        SpawnSystem.prototype.CheckScoreAndIncreaseDifficulty = function (spawner) {
            var context = this.world.getConfigData(game.GameContext);
            var maxNumOfEnemies = Math.round(3 * SpawnSystem_1.log(1.9, 2 + context.score / 100) - 2);
            var delay = Math.round(-3 * SpawnSystem_1.log(10, 0.8 + context.score / 100) + 3);
            var reward = Math.round(3.3 * SpawnSystem_1.log(1.1, 24 + context.score / 100) - 100);
            var damage = Math.round(3.4 * SpawnSystem_1.log(1.1, 50 + context.score / 100) - 130);
            var speed = Math.round(-24 * SpawnSystem_1.log(0.7, 2.5 + context.score / 100) - 13);
            if (spawner.maxNumOfEnemies < maxNumOfEnemies) {
                spawner.maxNumOfEnemies = maxNumOfEnemies;
            }
            if (spawner.delay > delay && delay > 0) {
                spawner.delay = delay;
            }
            if (spawner.newEnemyKillReward < reward) {
                spawner.newEnemyKillReward = reward;
            }
            if (spawner.newEnemyDamageToPlayer < damage) {
                spawner.newEnemyDamageToPlayer = damage;
            }
            if (spawner.enemySpeed < speed) {
                spawner.enemySpeed = speed;
            }
        };
        SpawnSystem.log = function (base, x) {
            return Math.log(x) / Math.log(base);
        };
        ;
        SpawnSystem.prototype.VerboseSpawner = function (spawner) {
            for (var _i = 0, _a = game.GameService.enemyTypeArray; _i < _a.length; _i++) {
                var enemy = _a[_i];
                console.log("CheckScoreAndAddNewEnemies: game.GameService.enemyTypeArray =>", enemy);
            }
            console.log("Spawner: maxNumOfEnemies", spawner.maxNumOfEnemies);
            console.log("Spawner: numOfEnemies", spawner.numOfEnemies);
            console.log("Spawner: newEnemyKillReward", spawner.newEnemyKillReward);
            console.log("Spawner: newEnemyDamageToPlayer", spawner.newEnemyDamageToPlayer);
        };
        var SpawnSystem_1;
        SpawnSystem = SpawnSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd),
            ut.requiredComponents(game.Score)
            /** New System */
        ], SpawnSystem);
        return SpawnSystem;
    }(ut.ComponentSystem));
    game.SpawnSystem = SpawnSystem;
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
                WeaponService.ApplyForceInDirection(world, weapon, right, 15, true);
                WeaponService.SpinWeaponWithSpeed(40, world, weapon);
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
        };
        WeaponService.ApplyForceInDirection = function (world, entity, right, force, attachRigidbody) {
            var impulse = new ut.Physics2D.AddImpulse2D;
            impulse.impulse = new Vector2(right.x, right.y).multiplyScalar(force);
            if (attachRigidbody) {
                WeaponService.AttachRigidbodyToWeapon(world, entity);
            }
            if (world.hasComponent(entity, ut.Physics2D.AddImpulse2D)) {
                world.setComponentData(entity, impulse);
            }
            else {
                world.addComponentData(entity, impulse);
            }
        };
        WeaponService.SpinWeaponWithSpeed = function (speed, world, weapon) {
            if (!world.hasComponent(weapon, game.Spin)) {
                var spin = new game.Spin();
                spin.speed = speed;
                world.addComponentData(weapon, spin);
            }
        };
        WeaponService.AttachRigidbodyToWeapon = function (world, weapon) {
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
        };
        WeaponService.DropWeapon = function (world, weapon) {
            this.DetachFromParent(world, weapon);
            this.AttachRigidbodyToWeapon(world, weapon);
            this.SpinWeaponWithSpeed(1, world, weapon);
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
            var transformNode = world.getComponentData(axe, ut.Core2D.TransformNode);
            if (transformNode.parent.index != ut.NONE.index) {
                WeaponService.DetachFromParent(world, axe);
            }
        };
        WeaponService.DetachFromParent = function (world, entity) {
            world.usingComponentData(entity, [ut.Core2D.TransformObjectToWorld,
                ut.Core2D.TransformLocalPosition,
                ut.Core2D.TransformLocalRotation,
                ut.Core2D.TransformLocalScale,
                ut.Core2D.TransformNode], function (objectToWorld, transformLocalPosition, transformLocalRotation, transformLocalScale, transformNode) {
                var worldPos = new Vector3().setFromMatrixPosition(objectToWorld.matrix);
                var worldRotation = ut.Core2D.TransformService.computeWorldRotation(world, entity);
                var worldScale = transformLocalScale.scale;
                world.usingComponentData(transformNode.parent, [ut.Core2D.TransformLocalScale], function (parentScale) {
                    worldScale = worldScale.multiply(parentScale.scale);
                });
                transformNode.parent = ut.NONE;
                transformLocalPosition.position = worldPos;
                transformLocalRotation.rotation = worldRotation;
                transformLocalScale.scale = worldScale;
                console.log("detached");
            });
        };
        return WeaponService;
    }());
    game.WeaponService = WeaponService;
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
        GameService.setEntityEnabled = function (world, entity, isEnabled) {
            var hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
            if (isEnabled && hasDisabledComponent) {
                world.removeComponent(entity, ut.Disabled);
            }
            else if (!isEnabled && !hasDisabledComponent) {
                if (world.hasComponent(entity, game.Animation)) {
                    var anim = world.getComponentData(entity, game.Animation);
                    game.AnimationSystem.DisableAnimations(world, anim);
                }
                if (world.hasComponent(entity, ut.Physics2D.BoxCollider2D)) {
                    world.removeComponent(entity, ut.Physics2D.BoxCollider2D);
                }
                world.addComponent(entity, ut.Disabled);
            }
        };
        GameService.clearGameState = function () {
            this.gameStateEntity = new ut.Entity();
        };
        ;
        GameService.getGameState = function (world) {
            if (!world.exists(this.gameStateEntity)) {
                this.gameStateEntity = world.getEntityByName("Game");
                if (!world.exists(this.gameStateEntity)) {
                    this.gameStateEntity = null;
                    return null;
                }
            }
            return world.getComponentData(this.gameStateEntity, game.GameState);
        };
        GameService.IsFacingEntity = function (transform1, transform2, transform1Scale) {
            return transform1.position.x > transform2.position.x && transform1Scale.scale.x == -1 || transform1.position.x < transform2.position.x && transform1Scale.scale.x == 1;
        };
        GameService.genRandom = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        GameService.AddEnemyTypeToEnemyArray = function (type) {
            this.enemyTypeArray.push(type);
        };
        GameService.enemyTypeArray = [game.EnemyType.Land];
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    var GameStateLoadingService = /** @class */ (function () {
        function GameStateLoadingService() {
        }
        GameStateLoadingService.setGameState = function (world, gameStateType) {
            var gameState = game.GameService.getGameState(world);
            gameState.CurrentState = gameStateType;
            world.setComponentData(game.GameService.gameStateEntity, gameState);
            switch (gameStateType) {
                case game.GameStateType.Menu:
                    this.loadMenu(world);
                    break;
                case game.GameStateType.GamePlay:
                    this.loadGamePlay(world);
                    break;
                case game.GameStateType.GameOver:
                    this.loadGameOver(world);
                    break;
            }
            game.SoundService.playMusic(world);
        };
        GameStateLoadingService.loadMenu = function (world) {
            ut.EntityGroup.instantiate(world, "game.Menu");
        };
        GameStateLoadingService.loadGamePlay = function (world) {
            game.ScoreSystem.ResetScore(world);
            ut.EntityGroup.instantiate(world, "game.GamePlay");
            ut.EntityGroup.instantiate(world, "game.PlayerGroup");
        };
        GameStateLoadingService.loadGameOver = function (world) {
            ut.EntityGroup.destroyAll(world, "game.ScoreGem");
            ut.EntityGroup.destroyAll(world, "game.HealthPotion");
            ut.EntityGroup.destroyAll(world, "game.StrengthPotion");
            ut.EntityGroup.destroyAll(world, "game.LandEnemy");
            ut.EntityGroup.destroyAll(world, "game.AirEnemy");
            ut.EntityGroup.destroyAll(world, "game.PlayerGroup");
            ut.EntityGroup.destroyAll(world, "game.GamePlay");
            ut.EntityGroup.instantiate(world, "game.GameOver");
        };
        return GameStateLoadingService;
    }());
    game.GameStateLoadingService = GameStateLoadingService;
})(game || (game = {}));
var game;
(function (game) {
    var GameStateSystem = /** @class */ (function (_super) {
        __extends(GameStateSystem, _super);
        function GameStateSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameStateSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.GameState], function (gameState) {
                switch (gameState.CurrentState) {
                    case game.GameStateType.Init:
                        _this.updateInit(_this.world, gameState);
                        break;
                    case game.GameStateType.Menu:
                        _this.updateMenu(_this.world, gameState);
                        break;
                    case game.GameStateType.GamePlay:
                        if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.E)) {
                            var ent = ut.EntityGroup.instantiate(_this.world, "game.AirEnemy")[0];
                            var trans = _this.world.getComponentData(ent, ut.Core2D.TransformLocalPosition);
                            trans.position = new Vector3(game.GameService.genRandom(2, 12), game.GameService.genRandom(2, 6));
                            _this.world.setComponentData(ent, trans);
                            console.log("Enemy created!");
                        }
                        if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Q)) {
                            var ent = ut.EntityGroup.instantiate(_this.world, "game.StrengthPotion")[0];
                            var trans = _this.world.getComponentData(ent, ut.Core2D.TransformLocalPosition);
                            trans.position = new Vector3(game.GameService.genRandom(2, 12), game.GameService.genRandom(2, 6));
                            _this.world.setComponentData(ent, trans);
                            console.log("Enemy created!");
                        }
                        break;
                    case game.GameStateType.GameOver:
                        _this.updateGameOver(_this.world, gameState);
                        break;
                }
            });
        };
        GameStateSystem.prototype.updateInit = function (world, gameState) {
            // SoundService.init(world);
            game.GameStateLoadingService.setGameState(world, game.GameStateType.Menu);
        };
        GameStateSystem.prototype.updateMenu = function (world, gameState) {
            world.forEach([game.MainMenu], function (menu) {
                var playButton = world.getComponentData(menu.PlayButton, ut.UIControls.MouseInteraction);
                if (playButton.clicked) {
                    ut.EntityGroup.destroyAll(world, "game.Menu");
                    game.GameStateLoadingService.setGameState(world, game.GameStateType.GamePlay);
                }
            });
        };
        GameStateSystem.prototype.updateGameOver = function (world, gameState) {
            world.forEach([game.GameOver], function (gameOver) {
                var tryAgainButton = world.getComponentData(gameOver.TryAgainButton, ut.UIControls.MouseInteraction);
                if (tryAgainButton.clicked) {
                    ut.EntityGroup.destroyAll(world, "game.GameOver");
                    game.GameStateLoadingService.setGameState(world, game.GameStateType.GamePlay);
                }
            });
        };
        return GameStateSystem;
    }(ut.ComponentSystem));
    game.GameStateSystem = GameStateSystem;
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
var game;
(function (game) {
    var SoundService = /** @class */ (function () {
        function SoundService() {
        }
        SoundService.getSoundConfiguration = function (world) {
            return world.getConfigData(game.SoundConfiguration);
        };
        SoundService.init = function (world) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsSoundOn = game.UserDataService.getIsSoundOn();
            soundConfig.IsMusicOn = game.UserDataService.getIsMusicOn();
            world.setConfigData(soundConfig);
        };
        SoundService.play = function (world, entityName) {
            if (this.getIsSoundOn(world)) {
                var soundEntity = world.getEntityByName(entityName);
                if (world.exists(soundEntity) && !world.hasComponent(soundEntity, ut.Audio.AudioSourceStart)) {
                    world.addComponent(soundEntity, ut.Audio.AudioSourceStart);
                }
            }
        };
        SoundService.stop = function (world, entityName) {
            world.addComponent(world.getEntityByName(entityName), ut.Audio.AudioSourceStop);
        };
        SoundService.playMusic = function (world) {
            this.stopMusic(world);
            if (!this.getIsMusicOn(world)) {
                return;
            }
            var gameState = game.GameService.getGameState(world);
            var musicName = "";
            switch (gameState.CurrentState) {
                case game.GameStateType.Menu:
                    musicName = "MusicMenu";
                    break;
                case game.GameStateType.GamePlay:
                    musicName = "MusicGame";
                    break;
                case game.GameStateType.GameOver:
                    musicName = "MusicGameOver";
                    break;
            }
            var soundConfiguration = this.getSoundConfiguration(world);
            soundConfiguration.CurrentMusic = musicName;
            world.setConfigData(soundConfiguration);
            var musicEntity = world.getEntityByName(musicName);
            if (world.exists(musicEntity)) {
                world.addComponent(musicEntity, ut.Audio.AudioSourceStart);
            }
            else {
                console.log("[" + musicName + "] entity does not exists.");
            }
        };
        SoundService.stopMusic = function (world) {
            if (this.getSoundConfiguration(world).CurrentMusic != "") {
                world.addComponent(world.getEntityByName(this.getSoundConfiguration(world).CurrentMusic), ut.Audio.AudioSourceStop);
            }
        };
        SoundService.toggleSoundIsOn = function (world) {
            return this.setIsSoundOn(world, !this.getIsSoundOn(world));
        };
        SoundService.getIsSoundOn = function (world) {
            return this.getSoundConfiguration(world).IsSoundOn;
        };
        SoundService.setIsSoundOn = function (world, value) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsSoundOn = value;
            world.setConfigData(soundConfig);
            game.UserDataService.setIsSoundOn(value);
            return value;
        };
        SoundService.toggleMusicIsOn = function (world) {
            return this.setIsMusicOn(world, !this.getIsMusicOn(world));
        };
        SoundService.getIsMusicOn = function (world) {
            return this.getSoundConfiguration(world).IsMusicOn;
        };
        SoundService.setIsMusicOn = function (world, value) {
            var soundConfig = this.getSoundConfiguration(world);
            soundConfig.IsMusicOn = value;
            world.setConfigData(soundConfig);
            game.UserDataService.setIsMusicOn(value);
            this.playMusic(world);
            return value;
        };
        return SoundService;
    }());
    game.SoundService = SoundService;
})(game || (game = {}));
var game;
(function (game) {
    /**
     * Save and load player data into web cookies.
     */
    var UserDataService = /** @class */ (function () {
        function UserDataService() {
        }
        UserDataService.getBestScore = function () {
            var cookieName = "BestScore";
            var value = this.getCookie(cookieName);
            if (value) {
                return Number(value);
            }
            else {
                return 0;
            }
        };
        UserDataService.setBestScore = function (score) {
            var cookieName = "BestScore";
            this.setCookie(cookieName, String(score));
        };
        UserDataService.getIsSoundOn = function () {
            var cookieName = "Sound";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return true;
            }
        };
        UserDataService.setIsSoundOn = function (isSoundOn) {
            var cookieName = "Sound";
            this.setCookie(cookieName, String(isSoundOn ? 1 : 0));
        };
        UserDataService.getIsMusicOn = function () {
            var cookieName = "Music";
            var value = this.getCookie(cookieName);
            if (value) {
                return this.getCookie(cookieName) == "1" ? true : false;
            }
            else {
                return true;
            }
        };
        UserDataService.setIsMusicOn = function (isMusicOn) {
            var cookieName = "Music";
            this.setCookie(cookieName, String(isMusicOn ? 1 : 0));
        };
        UserDataService.getCookie = function (name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) {
                return parts.pop().split(";").shift();
            }
        };
        UserDataService.setCookie = function (name, val) {
            var date = new Date();
            var value = val;
            date.setTime(date.getTime() + (1000 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.deleteCookie = function (name) {
            var date = new Date();
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
        };
        UserDataService.deleteAllCookies = function () {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        };
        return UserDataService;
    }());
    game.UserDataService = UserDataService;
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