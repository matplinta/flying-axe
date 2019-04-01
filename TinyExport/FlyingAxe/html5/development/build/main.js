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
ut.main = function() {
    game.EnemyBehaviorFilter._Components = [ut.Entity, 
        ut.Core2D.TransformLocalPosition, game.EnemyTag, game.MovementSpeed, game.ChangeOverTime, game.Boundaries
    ];
    game.EnemyBehaviorFilter.prototype.Read = function(world, entity) {
        this.entity = entity;
        this.position = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
        this.tag = world.getComponentData(entity, game.EnemyTag);
        this.speed = world.getComponentData(entity, game.MovementSpeed);
        this.speedChange = world.getComponentData(entity, game.ChangeOverTime);
        this.bounds = world.getComponentData(entity, game.Boundaries);
    };
    game.EnemyBehaviorFilter.prototype.Reset = function() {
        this.entity = undefined;
        this.position = undefined;
        this.tag = undefined;
        this.speed = undefined;
        this.speedChange = undefined;
        this.bounds = undefined;
    };
    game.EnemyBehaviorFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.position);
        world.setComponentData(entity, this.tag);
        world.setComponentData(entity, this.speed);
        world.setComponentData(entity, this.speedChange);
        world.setComponentData(entity, this.bounds);
    };
    game.EnemyBehaviorFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, position, tag, speed, speedChange, bounds) {
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
    game.SpinningSystemJS.update = new game.SpinningSystem()._MakeSystemFn();
    game.AxeCollisionSystemJS.update = new game.AxeCollisionSystem()._MakeSystemFn();
    game.MovementSystemJS.update = new game.MovementSystem()._MakeSystemFn();
    game.RecallSystemJS.update = new game.RecallSystem()._MakeSystemFn();
    game.WeaponControlSystemJS.update = new game.WeaponControlSystem()._MakeSystemFn();
    game.DestroyAfterDelaySystemJS.update = new game.DestroyAfterDelaySystem()._MakeSystemFn();
    game.EnemyBehavior_OnEntityUpdateJS.update = game.EnemyBehavior.Instance._MakeOnEntityUpdate();
    scheduler.schedule(game.InputSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(game.EnemyBehavior_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.TimeJS);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.AimSystemJS);
    scheduler.schedule(game.SpinningSystemJS);
    scheduler.schedule(game.AxeCollisionSystemJS);
    scheduler.schedule(game.MovementSystemJS);
    scheduler.schedule(game.RecallSystemJS);
    scheduler.schedule(game.WeaponControlSystemJS);
    scheduler.schedule(game.DestroyAfterDelaySystemJS);
    scheduler.schedule(game.EnemyBehavior_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.Particles.ParticleSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1920;
    c0.height = 1080;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(game.GameContext);
    world.setConfigData(c1);
    var c2 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c2.gravity = s0;
    world.setConfigData(c2);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.Gameplay");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
