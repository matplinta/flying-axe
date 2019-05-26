/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project FlyingAxe
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.UILayout);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Physics2D);
ut.importModule(ut.Particles);
ut.importModule(ut.Interpolation);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.UIControls);
ut.importModule(ut.Audio);
ut.importModule(ut.Tilemap2D);
ut.importModule(ut.Tweens);
ut.main = function() {
    game.EnemyBehaviorFilter._Components = [ut.Entity, 
        ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, ut.Physics2D.Velocity2D, game.EnemyTag, game.Movement, game.ChangeOverTime, game.Boundaries
    ];
    game.EnemyBehaviorFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.position = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
        this.scale = world.getComponentData(entity, ut.Core2D.TransformLocalScale);
        this.velocity = world.getComponentData(entity, ut.Physics2D.Velocity2D);
        this.tag = world.getComponentData(entity, game.EnemyTag);
        this.movement = world.getComponentData(entity, game.Movement);
        this.speedChange = world.getComponentData(entity, game.ChangeOverTime);
        this.boundaries = world.getComponentData(entity, game.Boundaries);
    };
    game.EnemyBehaviorFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.position = undefined;
        this.scale = undefined;
        this.velocity = undefined;
        this.tag = undefined;
        this.movement = undefined;
        this.speedChange = undefined;
        this.boundaries = undefined;
    };
    game.EnemyBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.position);
        world.setComponentData(entity, this.scale);
        world.setComponentData(entity, this.velocity);
        world.setComponentData(entity, this.tag);
        world.setComponentData(entity, this.movement);
        world.setComponentData(entity, this.speedChange);
        world.setComponentData(entity, this.boundaries);
    };
    game.EnemyBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, position, scale, velocity, tag, movement, speedChange, boundaries) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.EnemyBehavior.Instance = new game.EnemyBehavior();
    game.EnemyBehavior._StateType = game.EnemyBehavior_State;
    game.EnemyBehavior.prototype._GetFilter = function() { if (!this.data) { this.data = new game.EnemyBehaviorFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.InputSystemJS.update = new game.InputSystem()._MakeSystemFn();
    game.EnemyBehavior_OnEntityEnableJS.update = game.EnemyBehavior.Instance._MakeOnEntityEnable();
    ut.TimeJS.update = new ut.Time()._MakeSystemFn();
    game.AimSystemJS.update = new game.AimSystem()._MakeSystemFn();
    game.AnimationSystemJS.update = new game.AnimationSystem()._MakeSystemFn();
    game.SpinningSystemJS.update = new game.SpinningSystem()._MakeSystemFn();
    game.AxeCollisionSystemJS.update = new game.AxeCollisionSystem()._MakeSystemFn();
    game.CameraSystemJS.update = new game.CameraSystem()._MakeSystemFn();
    game.CollisionSystemJS.update = new game.CollisionSystem()._MakeSystemFn();
    game.DamageVignetteSystemJS.update = new game.DamageVignetteSystem()._MakeSystemFn();
    game.HitSystemJS.update = new game.HitSystem()._MakeSystemFn();
    game.HealthSystemJS.update = new game.HealthSystem()._MakeSystemFn();
    game.DropItemSystemJS.update = new game.DropItemSystem()._MakeSystemFn();
    game.StrengthPotionSystemJS.update = new game.StrengthPotionSystem()._MakeSystemFn();
    game.HealthBarSystemJS.update = new game.HealthBarSystem()._MakeSystemFn();
    game.MovementSystemJS.update = new game.MovementSystem()._MakeSystemFn();
    game.PlayerViewFlipSystemJS.update = new game.PlayerViewFlipSystem()._MakeSystemFn();
    game.WeaponControlSystemJS.update = new game.WeaponControlSystem()._MakeSystemFn();
    game.ScoreSystemJS.update = new game.ScoreSystem()._MakeSystemFn();
    game.SpawnSystemJS.update = new game.SpawnSystem()._MakeSystemFn();
    game.EnemyBehavior_OnEntityUpdateJS.update = game.EnemyBehavior.Instance._MakeOnEntityUpdate();
    game.HealthPotionSystemJS.update = new game.HealthPotionSystem()._MakeSystemFn();
    game.DeadSystemJS.update = new game.DeadSystem()._MakeSystemFn();
    game.DestroySystemJS.update = new game.DestroySystem()._MakeSystemFn();
    game.FlipSystemJS.update = new game.FlipSystem()._MakeSystemFn();
    game.ParalaxSystemJS.update = new game.ParalaxSystem()._MakeSystemFn();
    game.PickableHideSystemJS.update = new game.PickableHideSystem()._MakeSystemFn();
    game.PickableSystemJS.update = new game.PickableSystem()._MakeSystemFn();
    game.PlayerEnemyCollisionSystemJS.update = new game.PlayerEnemyCollisionSystem()._MakeSystemFn();
    game.RecallSystemJS.update = new game.RecallSystem()._MakeSystemFn();
    game.ScoreGemSystemJS.update = new game.ScoreGemSystem()._MakeSystemFn();
    game.ShakeSystemJS.update = new game.ShakeSystem()._MakeSystemFn();
    game.GameStateSystemJS.update = new game.GameStateSystem()._MakeSystemFn();
    game.DestroyAfterDelaySystemJS.update = new game.DestroyAfterDelaySystem()._MakeSystemFn();
    scheduler.schedule(game.InputSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(game.EnemyBehavior_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.TimeJS);
    scheduler.schedule(ut.UIControls.MouseInteractionSystem);
    scheduler.schedule(ut.UIControls.ToggleCheckedSystem);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.AimSystemJS);
    scheduler.schedule(game.AnimationSystemJS);
    scheduler.schedule(game.SpinningSystemJS);
    scheduler.schedule(game.AxeCollisionSystemJS);
    scheduler.schedule(game.CameraSystemJS);
    scheduler.schedule(game.CollisionSystemJS);
    scheduler.schedule(game.DamageVignetteSystemJS);
    scheduler.schedule(game.HitSystemJS);
    scheduler.schedule(game.HealthSystemJS);
    scheduler.schedule(game.DropItemSystemJS);
    scheduler.schedule(game.StrengthPotionSystemJS);
    scheduler.schedule(game.HealthBarSystemJS);
    scheduler.schedule(game.MovementSystemJS);
    scheduler.schedule(game.PlayerViewFlipSystemJS);
    scheduler.schedule(game.WeaponControlSystemJS);
    scheduler.schedule(game.ScoreSystemJS);
    scheduler.schedule(game.SpawnSystemJS);
    scheduler.schedule(game.EnemyBehavior_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(game.HealthPotionSystemJS);
    scheduler.schedule(game.DeadSystemJS);
    scheduler.schedule(game.DestroySystemJS);
    scheduler.schedule(game.FlipSystemJS);
    scheduler.schedule(game.ParalaxSystemJS);
    scheduler.schedule(game.PickableHideSystemJS);
    scheduler.schedule(game.PickableSystemJS);
    scheduler.schedule(game.PlayerEnemyCollisionSystemJS);
    scheduler.schedule(game.RecallSystemJS);
    scheduler.schedule(game.ScoreGemSystemJS);
    scheduler.schedule(game.ShakeSystemJS);
    scheduler.schedule(game.GameStateSystemJS);
    scheduler.schedule(game.DestroyAfterDelaySystemJS);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.UIControls.UIControlsSystem);
    scheduler.schedule(ut.UIControls.ButtonSystem);
    scheduler.schedule(ut.UIControls.ToggleSystem);
    scheduler.schedule(ut.Tilemap2D.TilemapChunkingSystem);
    scheduler.schedule(ut.Tweens.TweenSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);
    scheduler.schedule(ut.Audio.AudioSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1920;
    c0.height = 1080;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(game.GameContext);
    c1.dropRate = 0.25;
    c1.GameState = 0;
    world.setConfigData(c1);
    var c2 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c2.gravity = s0;
    world.setConfigData(c2);
    var c3 = world.getConfigData(ut.Audio.AudioConfig);
    world.setConfigData(c3);
    var c4 = world.getConfigData(game.SoundConfiguration);
    world.setConfigData(c4);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.Bootstrap");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
