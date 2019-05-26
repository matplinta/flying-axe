/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
var game = game || {};
game.EnemyType = {
  Land: 0,
  Air: 1
};
game.GameStateType = {
  Init: 0,
  Menu: 1,
  GamePlay: 2,
  GameOver: 3
};
var entities = entities || {};
entities.game = entities.game || {};
entities.game.AirEnemy = entities.game.AirEnemy || {};
entities.game.AirEnemy.Component = function() {
};
entities.game.AirEnemy.Component.prototype = Object.create(null);
entities.game.AirEnemy.Component.prototype.constructor = entities.game.AirEnemy.Component;
Object.defineProperties(entities.game.AirEnemy.Component.prototype, {
});
entities.game.AirEnemy.Component._size = 1;
entities.game.AirEnemy.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.AirEnemy.Component.prototype);
  return v;
};
entities.game.AirEnemy.Component._toPtr = function(ptr, v) {
};
entities.game.AirEnemy.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.AirEnemy.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.AirEnemy.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.AirEnemy.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.AirEnemy.Component.StorageView.prototype = Object.create(null);
entities.game.AirEnemy.Component.StorageView.prototype.constructor = entities.game.AirEnemy.Component.StorageView;
entities.game.AirEnemy.Component._view = entities.game.AirEnemy.Component.StorageView;
entities.game.AirEnemy.Component.StorageView._isSharedComp = entities.game.AirEnemy.Component._isSharedComp = false;
entities.game.AirEnemy.Component.StorageView._fromPtr = entities.game.AirEnemy.Component._fromPtr;
entities.game.AirEnemy.Component.StorageView._toPtr = entities.game.AirEnemy.Component._toPtr;
entities.game.AirEnemy.Component.StorageView._tempHeapPtr = entities.game.AirEnemy.Component._tempHeapPtr;
entities.game.AirEnemy.Component.StorageView._size = entities.game.AirEnemy.Component._size;
entities.game.AirEnemy.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.AirEnemy.Component.StorageView.prototype, {
});
entities.game.AirEnemy.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.AirEnemy.Component is a POD type, so a JavaScript side copy constructor entities.game.AirEnemy.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.AirEnemy.Component, { cid: { configurable: true, get: function() { delete entities.game.AirEnemy.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.AirEnemy.Component.cid = Module._ut_component_register_cid(/*entities.game.AirEnemy.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::AirEnemy::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.AirEnemy.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.AirEnemy.Component.cid; } } });
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid(/*entities.game.Bootstrap.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Bootstrap::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.GameOver = entities.game.GameOver || {};
entities.game.GameOver.Component = function() {
};
entities.game.GameOver.Component.prototype = Object.create(null);
entities.game.GameOver.Component.prototype.constructor = entities.game.GameOver.Component;
Object.defineProperties(entities.game.GameOver.Component.prototype, {
});
entities.game.GameOver.Component._size = 1;
entities.game.GameOver.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOver.Component.prototype);
  return v;
};
entities.game.GameOver.Component._toPtr = function(ptr, v) {
};
entities.game.GameOver.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOver.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOver.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOver.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOver.Component.StorageView.prototype = Object.create(null);
entities.game.GameOver.Component.StorageView.prototype.constructor = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component._view = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component.StorageView._isSharedComp = entities.game.GameOver.Component._isSharedComp = false;
entities.game.GameOver.Component.StorageView._fromPtr = entities.game.GameOver.Component._fromPtr;
entities.game.GameOver.Component.StorageView._toPtr = entities.game.GameOver.Component._toPtr;
entities.game.GameOver.Component.StorageView._tempHeapPtr = entities.game.GameOver.Component._tempHeapPtr;
entities.game.GameOver.Component.StorageView._size = entities.game.GameOver.Component._size;
entities.game.GameOver.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOver.Component.StorageView.prototype, {
});
entities.game.GameOver.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOver.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOver.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GameOver.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOver.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOver.Component.cid = Module._ut_component_register_cid(/*entities.game.GameOver.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GameOver::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GameOver.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOver.Component.cid; } } });
entities.game.GamePlay = entities.game.GamePlay || {};
entities.game.GamePlay.Component = function() {
};
entities.game.GamePlay.Component.prototype = Object.create(null);
entities.game.GamePlay.Component.prototype.constructor = entities.game.GamePlay.Component;
Object.defineProperties(entities.game.GamePlay.Component.prototype, {
});
entities.game.GamePlay.Component._size = 1;
entities.game.GamePlay.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GamePlay.Component.prototype);
  return v;
};
entities.game.GamePlay.Component._toPtr = function(ptr, v) {
};
entities.game.GamePlay.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GamePlay.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GamePlay.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GamePlay.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GamePlay.Component.StorageView.prototype = Object.create(null);
entities.game.GamePlay.Component.StorageView.prototype.constructor = entities.game.GamePlay.Component.StorageView;
entities.game.GamePlay.Component._view = entities.game.GamePlay.Component.StorageView;
entities.game.GamePlay.Component.StorageView._isSharedComp = entities.game.GamePlay.Component._isSharedComp = false;
entities.game.GamePlay.Component.StorageView._fromPtr = entities.game.GamePlay.Component._fromPtr;
entities.game.GamePlay.Component.StorageView._toPtr = entities.game.GamePlay.Component._toPtr;
entities.game.GamePlay.Component.StorageView._tempHeapPtr = entities.game.GamePlay.Component._tempHeapPtr;
entities.game.GamePlay.Component.StorageView._size = entities.game.GamePlay.Component._size;
entities.game.GamePlay.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GamePlay.Component.StorageView.prototype, {
});
entities.game.GamePlay.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GamePlay.Component is a POD type, so a JavaScript side copy constructor entities.game.GamePlay.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.GamePlay.Component, { cid: { configurable: true, get: function() { delete entities.game.GamePlay.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GamePlay.Component.cid = Module._ut_component_register_cid(/*entities.game.GamePlay.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::GamePlay::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.GamePlay.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GamePlay.Component.cid; } } });
entities.game.HealthPotion = entities.game.HealthPotion || {};
entities.game.HealthPotion.Component = function() {
};
entities.game.HealthPotion.Component.prototype = Object.create(null);
entities.game.HealthPotion.Component.prototype.constructor = entities.game.HealthPotion.Component;
Object.defineProperties(entities.game.HealthPotion.Component.prototype, {
});
entities.game.HealthPotion.Component._size = 1;
entities.game.HealthPotion.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.HealthPotion.Component.prototype);
  return v;
};
entities.game.HealthPotion.Component._toPtr = function(ptr, v) {
};
entities.game.HealthPotion.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.HealthPotion.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.HealthPotion.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.HealthPotion.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.HealthPotion.Component.StorageView.prototype = Object.create(null);
entities.game.HealthPotion.Component.StorageView.prototype.constructor = entities.game.HealthPotion.Component.StorageView;
entities.game.HealthPotion.Component._view = entities.game.HealthPotion.Component.StorageView;
entities.game.HealthPotion.Component.StorageView._isSharedComp = entities.game.HealthPotion.Component._isSharedComp = false;
entities.game.HealthPotion.Component.StorageView._fromPtr = entities.game.HealthPotion.Component._fromPtr;
entities.game.HealthPotion.Component.StorageView._toPtr = entities.game.HealthPotion.Component._toPtr;
entities.game.HealthPotion.Component.StorageView._tempHeapPtr = entities.game.HealthPotion.Component._tempHeapPtr;
entities.game.HealthPotion.Component.StorageView._size = entities.game.HealthPotion.Component._size;
entities.game.HealthPotion.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.HealthPotion.Component.StorageView.prototype, {
});
entities.game.HealthPotion.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.HealthPotion.Component is a POD type, so a JavaScript side copy constructor entities.game.HealthPotion.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.HealthPotion.Component, { cid: { configurable: true, get: function() { delete entities.game.HealthPotion.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.HealthPotion.Component.cid = Module._ut_component_register_cid(/*entities.game.HealthPotion.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::HealthPotion::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.HealthPotion.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.HealthPotion.Component.cid; } } });
entities.game.HitParticle = entities.game.HitParticle || {};
entities.game.HitParticle.Component = function() {
};
entities.game.HitParticle.Component.prototype = Object.create(null);
entities.game.HitParticle.Component.prototype.constructor = entities.game.HitParticle.Component;
Object.defineProperties(entities.game.HitParticle.Component.prototype, {
});
entities.game.HitParticle.Component._size = 1;
entities.game.HitParticle.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.HitParticle.Component.prototype);
  return v;
};
entities.game.HitParticle.Component._toPtr = function(ptr, v) {
};
entities.game.HitParticle.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.HitParticle.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.HitParticle.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.HitParticle.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.HitParticle.Component.StorageView.prototype = Object.create(null);
entities.game.HitParticle.Component.StorageView.prototype.constructor = entities.game.HitParticle.Component.StorageView;
entities.game.HitParticle.Component._view = entities.game.HitParticle.Component.StorageView;
entities.game.HitParticle.Component.StorageView._isSharedComp = entities.game.HitParticle.Component._isSharedComp = false;
entities.game.HitParticle.Component.StorageView._fromPtr = entities.game.HitParticle.Component._fromPtr;
entities.game.HitParticle.Component.StorageView._toPtr = entities.game.HitParticle.Component._toPtr;
entities.game.HitParticle.Component.StorageView._tempHeapPtr = entities.game.HitParticle.Component._tempHeapPtr;
entities.game.HitParticle.Component.StorageView._size = entities.game.HitParticle.Component._size;
entities.game.HitParticle.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.HitParticle.Component.StorageView.prototype, {
});
entities.game.HitParticle.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.HitParticle.Component is a POD type, so a JavaScript side copy constructor entities.game.HitParticle.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.HitParticle.Component, { cid: { configurable: true, get: function() { delete entities.game.HitParticle.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.HitParticle.Component.cid = Module._ut_component_register_cid(/*entities.game.HitParticle.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::HitParticle::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.HitParticle.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.HitParticle.Component.cid; } } });
entities.game.LandEnemy = entities.game.LandEnemy || {};
entities.game.LandEnemy.Component = function() {
};
entities.game.LandEnemy.Component.prototype = Object.create(null);
entities.game.LandEnemy.Component.prototype.constructor = entities.game.LandEnemy.Component;
Object.defineProperties(entities.game.LandEnemy.Component.prototype, {
});
entities.game.LandEnemy.Component._size = 1;
entities.game.LandEnemy.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.LandEnemy.Component.prototype);
  return v;
};
entities.game.LandEnemy.Component._toPtr = function(ptr, v) {
};
entities.game.LandEnemy.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.LandEnemy.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.LandEnemy.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.LandEnemy.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.LandEnemy.Component.StorageView.prototype = Object.create(null);
entities.game.LandEnemy.Component.StorageView.prototype.constructor = entities.game.LandEnemy.Component.StorageView;
entities.game.LandEnemy.Component._view = entities.game.LandEnemy.Component.StorageView;
entities.game.LandEnemy.Component.StorageView._isSharedComp = entities.game.LandEnemy.Component._isSharedComp = false;
entities.game.LandEnemy.Component.StorageView._fromPtr = entities.game.LandEnemy.Component._fromPtr;
entities.game.LandEnemy.Component.StorageView._toPtr = entities.game.LandEnemy.Component._toPtr;
entities.game.LandEnemy.Component.StorageView._tempHeapPtr = entities.game.LandEnemy.Component._tempHeapPtr;
entities.game.LandEnemy.Component.StorageView._size = entities.game.LandEnemy.Component._size;
entities.game.LandEnemy.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.LandEnemy.Component.StorageView.prototype, {
});
entities.game.LandEnemy.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.LandEnemy.Component is a POD type, so a JavaScript side copy constructor entities.game.LandEnemy.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.LandEnemy.Component, { cid: { configurable: true, get: function() { delete entities.game.LandEnemy.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.LandEnemy.Component.cid = Module._ut_component_register_cid(/*entities.game.LandEnemy.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::LandEnemy::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.LandEnemy.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.LandEnemy.Component.cid; } } });
entities.game.Menu = entities.game.Menu || {};
entities.game.Menu.Component = function() {
};
entities.game.Menu.Component.prototype = Object.create(null);
entities.game.Menu.Component.prototype.constructor = entities.game.Menu.Component;
Object.defineProperties(entities.game.Menu.Component.prototype, {
});
entities.game.Menu.Component._size = 1;
entities.game.Menu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Menu.Component.prototype);
  return v;
};
entities.game.Menu.Component._toPtr = function(ptr, v) {
};
entities.game.Menu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Menu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Menu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Menu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Menu.Component.StorageView.prototype = Object.create(null);
entities.game.Menu.Component.StorageView.prototype.constructor = entities.game.Menu.Component.StorageView;
entities.game.Menu.Component._view = entities.game.Menu.Component.StorageView;
entities.game.Menu.Component.StorageView._isSharedComp = entities.game.Menu.Component._isSharedComp = false;
entities.game.Menu.Component.StorageView._fromPtr = entities.game.Menu.Component._fromPtr;
entities.game.Menu.Component.StorageView._toPtr = entities.game.Menu.Component._toPtr;
entities.game.Menu.Component.StorageView._tempHeapPtr = entities.game.Menu.Component._tempHeapPtr;
entities.game.Menu.Component.StorageView._size = entities.game.Menu.Component._size;
entities.game.Menu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Menu.Component.StorageView.prototype, {
});
entities.game.Menu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Menu.Component is a POD type, so a JavaScript side copy constructor entities.game.Menu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.Menu.Component, { cid: { configurable: true, get: function() { delete entities.game.Menu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Menu.Component.cid = Module._ut_component_register_cid(/*entities.game.Menu.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::Menu::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.Menu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Menu.Component.cid; } } });
entities.game.PlayerGroup = entities.game.PlayerGroup || {};
entities.game.PlayerGroup.Component = function() {
};
entities.game.PlayerGroup.Component.prototype = Object.create(null);
entities.game.PlayerGroup.Component.prototype.constructor = entities.game.PlayerGroup.Component;
Object.defineProperties(entities.game.PlayerGroup.Component.prototype, {
});
entities.game.PlayerGroup.Component._size = 1;
entities.game.PlayerGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PlayerGroup.Component.prototype);
  return v;
};
entities.game.PlayerGroup.Component._toPtr = function(ptr, v) {
};
entities.game.PlayerGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PlayerGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PlayerGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PlayerGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PlayerGroup.Component.StorageView.prototype = Object.create(null);
entities.game.PlayerGroup.Component.StorageView.prototype.constructor = entities.game.PlayerGroup.Component.StorageView;
entities.game.PlayerGroup.Component._view = entities.game.PlayerGroup.Component.StorageView;
entities.game.PlayerGroup.Component.StorageView._isSharedComp = entities.game.PlayerGroup.Component._isSharedComp = false;
entities.game.PlayerGroup.Component.StorageView._fromPtr = entities.game.PlayerGroup.Component._fromPtr;
entities.game.PlayerGroup.Component.StorageView._toPtr = entities.game.PlayerGroup.Component._toPtr;
entities.game.PlayerGroup.Component.StorageView._tempHeapPtr = entities.game.PlayerGroup.Component._tempHeapPtr;
entities.game.PlayerGroup.Component.StorageView._size = entities.game.PlayerGroup.Component._size;
entities.game.PlayerGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PlayerGroup.Component.StorageView.prototype, {
});
entities.game.PlayerGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PlayerGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.PlayerGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.PlayerGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.PlayerGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PlayerGroup.Component.cid = Module._ut_component_register_cid(/*entities.game.PlayerGroup.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::PlayerGroup::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.PlayerGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PlayerGroup.Component.cid; } } });
entities.game.ScoreGem = entities.game.ScoreGem || {};
entities.game.ScoreGem.Component = function() {
};
entities.game.ScoreGem.Component.prototype = Object.create(null);
entities.game.ScoreGem.Component.prototype.constructor = entities.game.ScoreGem.Component;
Object.defineProperties(entities.game.ScoreGem.Component.prototype, {
});
entities.game.ScoreGem.Component._size = 1;
entities.game.ScoreGem.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.ScoreGem.Component.prototype);
  return v;
};
entities.game.ScoreGem.Component._toPtr = function(ptr, v) {
};
entities.game.ScoreGem.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.ScoreGem.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.ScoreGem.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.ScoreGem.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.ScoreGem.Component.StorageView.prototype = Object.create(null);
entities.game.ScoreGem.Component.StorageView.prototype.constructor = entities.game.ScoreGem.Component.StorageView;
entities.game.ScoreGem.Component._view = entities.game.ScoreGem.Component.StorageView;
entities.game.ScoreGem.Component.StorageView._isSharedComp = entities.game.ScoreGem.Component._isSharedComp = false;
entities.game.ScoreGem.Component.StorageView._fromPtr = entities.game.ScoreGem.Component._fromPtr;
entities.game.ScoreGem.Component.StorageView._toPtr = entities.game.ScoreGem.Component._toPtr;
entities.game.ScoreGem.Component.StorageView._tempHeapPtr = entities.game.ScoreGem.Component._tempHeapPtr;
entities.game.ScoreGem.Component.StorageView._size = entities.game.ScoreGem.Component._size;
entities.game.ScoreGem.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.ScoreGem.Component.StorageView.prototype, {
});
entities.game.ScoreGem.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.ScoreGem.Component is a POD type, so a JavaScript side copy constructor entities.game.ScoreGem.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.ScoreGem.Component, { cid: { configurable: true, get: function() { delete entities.game.ScoreGem.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.ScoreGem.Component.cid = Module._ut_component_register_cid(/*entities.game.ScoreGem.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::ScoreGem::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.ScoreGem.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.ScoreGem.Component.cid; } } });
entities.game.StrengthPotion = entities.game.StrengthPotion || {};
entities.game.StrengthPotion.Component = function() {
};
entities.game.StrengthPotion.Component.prototype = Object.create(null);
entities.game.StrengthPotion.Component.prototype.constructor = entities.game.StrengthPotion.Component;
Object.defineProperties(entities.game.StrengthPotion.Component.prototype, {
});
entities.game.StrengthPotion.Component._size = 1;
entities.game.StrengthPotion.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.StrengthPotion.Component.prototype);
  return v;
};
entities.game.StrengthPotion.Component._toPtr = function(ptr, v) {
};
entities.game.StrengthPotion.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.StrengthPotion.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.StrengthPotion.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.StrengthPotion.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.StrengthPotion.Component.StorageView.prototype = Object.create(null);
entities.game.StrengthPotion.Component.StorageView.prototype.constructor = entities.game.StrengthPotion.Component.StorageView;
entities.game.StrengthPotion.Component._view = entities.game.StrengthPotion.Component.StorageView;
entities.game.StrengthPotion.Component.StorageView._isSharedComp = entities.game.StrengthPotion.Component._isSharedComp = false;
entities.game.StrengthPotion.Component.StorageView._fromPtr = entities.game.StrengthPotion.Component._fromPtr;
entities.game.StrengthPotion.Component.StorageView._toPtr = entities.game.StrengthPotion.Component._toPtr;
entities.game.StrengthPotion.Component.StorageView._tempHeapPtr = entities.game.StrengthPotion.Component._tempHeapPtr;
entities.game.StrengthPotion.Component.StorageView._size = entities.game.StrengthPotion.Component._size;
entities.game.StrengthPotion.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.StrengthPotion.Component.StorageView.prototype, {
});
entities.game.StrengthPotion.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.StrengthPotion.Component is a POD type, so a JavaScript side copy constructor entities.game.StrengthPotion.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(entities.game.StrengthPotion.Component, { cid: { configurable: true, get: function() { delete entities.game.StrengthPotion.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.StrengthPotion.Component.cid = Module._ut_component_register_cid(/*entities.game.StrengthPotion.Component*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"entities::game::StrengthPotion::Component"*/, 0, 0); } } });
Object.defineProperties(entities.game.StrengthPotion.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.StrengthPotion.Component.cid; } } });
game.AimSpeed = function(arg0) {
  this._value = (+(arg0===undefined ? 0 : arg0));
};
game.AimSpeed.prototype = Object.create(null);
game.AimSpeed.prototype.constructor = game.AimSpeed;
Object.defineProperties(game.AimSpeed.prototype, {
  value: {
    get: function() { return this._value; },
    set: function(v) { this._value = (+(v===undefined ? 0 : v)); },
  },
});
game.AimSpeed._size = 4;
game.AimSpeed._fromPtr = function(ptr, v) {
  v = v || Object.create(game.AimSpeed.prototype);
  v._value = HEAPF32[(ptr+0)>>2];
  return v;
};
game.AimSpeed._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.value;
};
game.AimSpeed._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.value;
};
game.AimSpeed._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.AimSpeed._toTempHeapPtr(ptr, v);
  return ptr;
};
game.AimSpeed.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.AimSpeed.StorageView.prototype = Object.create(null);
game.AimSpeed.StorageView.prototype.constructor = game.AimSpeed.StorageView;
game.AimSpeed._view = game.AimSpeed.StorageView;
game.AimSpeed.StorageView._isSharedComp = game.AimSpeed._isSharedComp = false;
game.AimSpeed.StorageView._fromPtr = game.AimSpeed._fromPtr;
game.AimSpeed.StorageView._toPtr = game.AimSpeed._toPtr;
game.AimSpeed.StorageView._tempHeapPtr = game.AimSpeed._tempHeapPtr;
game.AimSpeed.StorageView._size = game.AimSpeed._size;
game.AimSpeed.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.AimSpeed.StorageView.prototype, {
  value: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.AimSpeed._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.AimSpeed is a POD type, so a JavaScript side copy constructor game.AimSpeed._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.AimSpeed, { cid: { configurable: true, get: function() { delete game.AimSpeed.cid; var offsetsPtr = 0, offsetsCount = 0; return game.AimSpeed.cid = Module._ut_component_register_cid(/*game.AimSpeed*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::AimSpeed"*/, 0, 0); } } });
Object.defineProperties(game.AimSpeed.StorageView, { cid: { configurable: true, get: function() { return game.AimSpeed.cid; } } });
game.AimSpeed.value = { $ofs:0, $t:"float", $c:game.AimSpeed };
game.Boundaries = function(arg0, arg1, arg2, arg3) {
  this._minX = (+(arg0===undefined ? 0 : arg0));
  this._maxX = (+(arg1===undefined ? 0 : arg1));
  this._minY = (+(arg2===undefined ? 0 : arg2));
  this._maxY = (+(arg3===undefined ? 0 : arg3));
};
game.Boundaries.prototype = Object.create(null);
game.Boundaries.prototype.constructor = game.Boundaries;
Object.defineProperties(game.Boundaries.prototype, {
  minX: {
    get: function() { return this._minX; },
    set: function(v) { this._minX = (+(v===undefined ? 0 : v)); },
  },
  maxX: {
    get: function() { return this._maxX; },
    set: function(v) { this._maxX = (+(v===undefined ? 0 : v)); },
  },
  minY: {
    get: function() { return this._minY; },
    set: function(v) { this._minY = (+(v===undefined ? 0 : v)); },
  },
  maxY: {
    get: function() { return this._maxY; },
    set: function(v) { this._maxY = (+(v===undefined ? 0 : v)); },
  },
});
game.Boundaries._size = 16;
game.Boundaries._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Boundaries.prototype);
  v._minX = HEAPF32[(ptr+0)>>2];
  v._maxX = HEAPF32[(ptr+4)>>2];
  v._minY = HEAPF32[(ptr+8)>>2];
  v._maxY = HEAPF32[(ptr+12)>>2];
  return v;
};
game.Boundaries._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.minX;
  HEAPF32[(ptr+4)>>2] = v.maxX;
  HEAPF32[(ptr+8)>>2] = v.minY;
  HEAPF32[(ptr+12)>>2] = v.maxY;
};
game.Boundaries._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.minX;
  HEAPF32[(ptr+4)>>2] = v.maxX;
  HEAPF32[(ptr+8)>>2] = v.minY;
  HEAPF32[(ptr+12)>>2] = v.maxY;
};
game.Boundaries._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Boundaries._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Boundaries.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Boundaries.StorageView.prototype = Object.create(null);
game.Boundaries.StorageView.prototype.constructor = game.Boundaries.StorageView;
game.Boundaries._view = game.Boundaries.StorageView;
game.Boundaries.StorageView._isSharedComp = game.Boundaries._isSharedComp = false;
game.Boundaries.StorageView._fromPtr = game.Boundaries._fromPtr;
game.Boundaries.StorageView._toPtr = game.Boundaries._toPtr;
game.Boundaries.StorageView._tempHeapPtr = game.Boundaries._tempHeapPtr;
game.Boundaries.StorageView._size = game.Boundaries._size;
game.Boundaries.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Boundaries.StorageView.prototype, {
  minX: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  maxX: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  minY: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  maxY: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.Boundaries._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Boundaries is a POD type, so a JavaScript side copy constructor game.Boundaries._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Boundaries, { cid: { configurable: true, get: function() { delete game.Boundaries.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Boundaries.cid = Module._ut_component_register_cid(/*game.Boundaries*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Boundaries"*/, 0, 0); } } });
Object.defineProperties(game.Boundaries.StorageView, { cid: { configurable: true, get: function() { return game.Boundaries.cid; } } });
game.Boundaries.minX = { $ofs:0, $t:"float", $c:game.Boundaries };
game.Boundaries.maxX = { $ofs:4, $t:"float", $c:game.Boundaries };
game.Boundaries.minY = { $ofs:8, $t:"float", $c:game.Boundaries };
game.Boundaries.maxY = { $ofs:12, $t:"float", $c:game.Boundaries };
game.ChangeOverTime = function(arg0) {
  this._changePerSecond = (+(arg0===undefined ? 0 : arg0));
};
game.ChangeOverTime.prototype = Object.create(null);
game.ChangeOverTime.prototype.constructor = game.ChangeOverTime;
Object.defineProperties(game.ChangeOverTime.prototype, {
  changePerSecond: {
    get: function() { return this._changePerSecond; },
    set: function(v) { this._changePerSecond = (+(v===undefined ? 0 : v)); },
  },
});
game.ChangeOverTime._size = 4;
game.ChangeOverTime._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ChangeOverTime.prototype);
  v._changePerSecond = HEAPF32[(ptr+0)>>2];
  return v;
};
game.ChangeOverTime._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.changePerSecond;
};
game.ChangeOverTime._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.changePerSecond;
};
game.ChangeOverTime._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.ChangeOverTime._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ChangeOverTime.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ChangeOverTime.StorageView.prototype = Object.create(null);
game.ChangeOverTime.StorageView.prototype.constructor = game.ChangeOverTime.StorageView;
game.ChangeOverTime._view = game.ChangeOverTime.StorageView;
game.ChangeOverTime.StorageView._isSharedComp = game.ChangeOverTime._isSharedComp = false;
game.ChangeOverTime.StorageView._fromPtr = game.ChangeOverTime._fromPtr;
game.ChangeOverTime.StorageView._toPtr = game.ChangeOverTime._toPtr;
game.ChangeOverTime.StorageView._tempHeapPtr = game.ChangeOverTime._tempHeapPtr;
game.ChangeOverTime.StorageView._size = game.ChangeOverTime._size;
game.ChangeOverTime.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.ChangeOverTime.StorageView.prototype, {
  changePerSecond: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.ChangeOverTime._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ChangeOverTime is a POD type, so a JavaScript side copy constructor game.ChangeOverTime._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ChangeOverTime, { cid: { configurable: true, get: function() { delete game.ChangeOverTime.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ChangeOverTime.cid = Module._ut_component_register_cid(/*game.ChangeOverTime*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ChangeOverTime"*/, 0, 0); } } });
Object.defineProperties(game.ChangeOverTime.StorageView, { cid: { configurable: true, get: function() { return game.ChangeOverTime.cid; } } });
game.ChangeOverTime.changePerSecond = { $ofs:0, $t:"float", $c:game.ChangeOverTime };
game.DamageVignette = function(arg0, arg1) {
  this._Duration = (+(arg0===undefined ? 0 : arg0));
  this._ElapsedTime = (+(arg1===undefined ? 0 : arg1));
};
game.DamageVignette.prototype = Object.create(null);
game.DamageVignette.prototype.constructor = game.DamageVignette;
Object.defineProperties(game.DamageVignette.prototype, {
  Duration: {
    get: function() { return this._Duration; },
    set: function(v) { this._Duration = (+(v===undefined ? 0 : v)); },
  },
  ElapsedTime: {
    get: function() { return this._ElapsedTime; },
    set: function(v) { this._ElapsedTime = (+(v===undefined ? 0 : v)); },
  },
});
game.DamageVignette._size = 8;
game.DamageVignette._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DamageVignette.prototype);
  v._Duration = HEAPF32[(ptr+0)>>2];
  v._ElapsedTime = HEAPF32[(ptr+4)>>2];
  return v;
};
game.DamageVignette._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ElapsedTime;
};
game.DamageVignette._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Duration;
  HEAPF32[(ptr+4)>>2] = v.ElapsedTime;
};
game.DamageVignette._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.DamageVignette._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DamageVignette.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DamageVignette.StorageView.prototype = Object.create(null);
game.DamageVignette.StorageView.prototype.constructor = game.DamageVignette.StorageView;
game.DamageVignette._view = game.DamageVignette.StorageView;
game.DamageVignette.StorageView._isSharedComp = game.DamageVignette._isSharedComp = false;
game.DamageVignette.StorageView._fromPtr = game.DamageVignette._fromPtr;
game.DamageVignette.StorageView._toPtr = game.DamageVignette._toPtr;
game.DamageVignette.StorageView._tempHeapPtr = game.DamageVignette._tempHeapPtr;
game.DamageVignette.StorageView._size = game.DamageVignette._size;
game.DamageVignette.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.DamageVignette.StorageView.prototype, {
  Duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  ElapsedTime: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.DamageVignette._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DamageVignette is a POD type, so a JavaScript side copy constructor game.DamageVignette._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DamageVignette, { cid: { configurable: true, get: function() { delete game.DamageVignette.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DamageVignette.cid = Module._ut_component_register_cid(/*game.DamageVignette*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::DamageVignette"*/, 0, 0); } } });
Object.defineProperties(game.DamageVignette.StorageView, { cid: { configurable: true, get: function() { return game.DamageVignette.cid; } } });
game.DamageVignette.Duration = { $ofs:0, $t:"float", $c:game.DamageVignette };
game.DamageVignette.ElapsedTime = { $ofs:4, $t:"float", $c:game.DamageVignette };
game.Dead = function(arg0, arg1) {
  this._elapsedTime = (+(arg0===undefined ? 0 : arg0));
  this._dyingTime = (+(arg1===undefined ? 0 : arg1));
};
game.Dead.prototype = Object.create(null);
game.Dead.prototype.constructor = game.Dead;
Object.defineProperties(game.Dead.prototype, {
  elapsedTime: {
    get: function() { return this._elapsedTime; },
    set: function(v) { this._elapsedTime = (+(v===undefined ? 0 : v)); },
  },
  dyingTime: {
    get: function() { return this._dyingTime; },
    set: function(v) { this._dyingTime = (+(v===undefined ? 0 : v)); },
  },
});
game.Dead._size = 8;
game.Dead._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Dead.prototype);
  v._elapsedTime = HEAPF32[(ptr+0)>>2];
  v._dyingTime = HEAPF32[(ptr+4)>>2];
  return v;
};
game.Dead._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.elapsedTime;
  HEAPF32[(ptr+4)>>2] = v.dyingTime;
};
game.Dead._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.elapsedTime;
  HEAPF32[(ptr+4)>>2] = v.dyingTime;
};
game.Dead._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Dead._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Dead.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Dead.StorageView.prototype = Object.create(null);
game.Dead.StorageView.prototype.constructor = game.Dead.StorageView;
game.Dead._view = game.Dead.StorageView;
game.Dead.StorageView._isSharedComp = game.Dead._isSharedComp = false;
game.Dead.StorageView._fromPtr = game.Dead._fromPtr;
game.Dead.StorageView._toPtr = game.Dead._toPtr;
game.Dead.StorageView._tempHeapPtr = game.Dead._tempHeapPtr;
game.Dead.StorageView._size = game.Dead._size;
game.Dead.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Dead.StorageView.prototype, {
  elapsedTime: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  dyingTime: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.Dead._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Dead is a POD type, so a JavaScript side copy constructor game.Dead._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Dead, { cid: { configurable: true, get: function() { delete game.Dead.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Dead.cid = Module._ut_component_register_cid(/*game.Dead*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Dead"*/, 0, 0); } } });
Object.defineProperties(game.Dead.StorageView, { cid: { configurable: true, get: function() { return game.Dead.cid; } } });
game.Dead.elapsedTime = { $ofs:0, $t:"float", $c:game.Dead };
game.Dead.dyingTime = { $ofs:4, $t:"float", $c:game.Dead };
game.Destroy = function() {
};
game.Destroy.prototype = Object.create(null);
game.Destroy.prototype.constructor = game.Destroy;
Object.defineProperties(game.Destroy.prototype, {
});
game.Destroy._size = 1;
game.Destroy._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Destroy.prototype);
  return v;
};
game.Destroy._toPtr = function(ptr, v) {
};
game.Destroy._toTempHeapPtr = function(ptr, v) {
};
game.Destroy._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Destroy._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Destroy.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Destroy.StorageView.prototype = Object.create(null);
game.Destroy.StorageView.prototype.constructor = game.Destroy.StorageView;
game.Destroy._view = game.Destroy.StorageView;
game.Destroy.StorageView._isSharedComp = game.Destroy._isSharedComp = false;
game.Destroy.StorageView._fromPtr = game.Destroy._fromPtr;
game.Destroy.StorageView._toPtr = game.Destroy._toPtr;
game.Destroy.StorageView._tempHeapPtr = game.Destroy._tempHeapPtr;
game.Destroy.StorageView._size = game.Destroy._size;
game.Destroy.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Destroy.StorageView.prototype, {
});
game.Destroy._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Destroy is a POD type, so a JavaScript side copy constructor game.Destroy._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Destroy, { cid: { configurable: true, get: function() { delete game.Destroy.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Destroy.cid = Module._ut_component_register_cid(/*game.Destroy*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Destroy"*/, 0, 0); } } });
Object.defineProperties(game.Destroy.StorageView, { cid: { configurable: true, get: function() { return game.Destroy.cid; } } });
game.DropItemOnKill = function() {
};
game.DropItemOnKill.prototype = Object.create(null);
game.DropItemOnKill.prototype.constructor = game.DropItemOnKill;
Object.defineProperties(game.DropItemOnKill.prototype, {
});
game.DropItemOnKill._size = 1;
game.DropItemOnKill._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DropItemOnKill.prototype);
  return v;
};
game.DropItemOnKill._toPtr = function(ptr, v) {
};
game.DropItemOnKill._toTempHeapPtr = function(ptr, v) {
};
game.DropItemOnKill._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.DropItemOnKill._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DropItemOnKill.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DropItemOnKill.StorageView.prototype = Object.create(null);
game.DropItemOnKill.StorageView.prototype.constructor = game.DropItemOnKill.StorageView;
game.DropItemOnKill._view = game.DropItemOnKill.StorageView;
game.DropItemOnKill.StorageView._isSharedComp = game.DropItemOnKill._isSharedComp = false;
game.DropItemOnKill.StorageView._fromPtr = game.DropItemOnKill._fromPtr;
game.DropItemOnKill.StorageView._toPtr = game.DropItemOnKill._toPtr;
game.DropItemOnKill.StorageView._tempHeapPtr = game.DropItemOnKill._tempHeapPtr;
game.DropItemOnKill.StorageView._size = game.DropItemOnKill._size;
game.DropItemOnKill.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.DropItemOnKill.StorageView.prototype, {
});
game.DropItemOnKill._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DropItemOnKill is a POD type, so a JavaScript side copy constructor game.DropItemOnKill._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DropItemOnKill, { cid: { configurable: true, get: function() { delete game.DropItemOnKill.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DropItemOnKill.cid = Module._ut_component_register_cid(/*game.DropItemOnKill*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::DropItemOnKill"*/, 0, 0); } } });
Object.defineProperties(game.DropItemOnKill.StorageView, { cid: { configurable: true, get: function() { return game.DropItemOnKill.cid; } } });
game.EnemyAttack = function(arg0, arg1) {
  this._delayBetweenAttacks = (+(arg0===undefined ? 0 : arg0));
  this._lastAttackTime = (+(arg1===undefined ? 0 : arg1));
};
game.EnemyAttack.prototype = Object.create(null);
game.EnemyAttack.prototype.constructor = game.EnemyAttack;
Object.defineProperties(game.EnemyAttack.prototype, {
  delayBetweenAttacks: {
    get: function() { return this._delayBetweenAttacks; },
    set: function(v) { this._delayBetweenAttacks = (+(v===undefined ? 0 : v)); },
  },
  lastAttackTime: {
    get: function() { return this._lastAttackTime; },
    set: function(v) { this._lastAttackTime = (+(v===undefined ? 0 : v)); },
  },
});
game.EnemyAttack._size = 8;
game.EnemyAttack._fromPtr = function(ptr, v) {
  v = v || Object.create(game.EnemyAttack.prototype);
  v._delayBetweenAttacks = HEAPF32[(ptr+0)>>2];
  v._lastAttackTime = HEAPF32[(ptr+4)>>2];
  return v;
};
game.EnemyAttack._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.delayBetweenAttacks;
  HEAPF32[(ptr+4)>>2] = v.lastAttackTime;
};
game.EnemyAttack._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.delayBetweenAttacks;
  HEAPF32[(ptr+4)>>2] = v.lastAttackTime;
};
game.EnemyAttack._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.EnemyAttack._toTempHeapPtr(ptr, v);
  return ptr;
};
game.EnemyAttack.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.EnemyAttack.StorageView.prototype = Object.create(null);
game.EnemyAttack.StorageView.prototype.constructor = game.EnemyAttack.StorageView;
game.EnemyAttack._view = game.EnemyAttack.StorageView;
game.EnemyAttack.StorageView._isSharedComp = game.EnemyAttack._isSharedComp = false;
game.EnemyAttack.StorageView._fromPtr = game.EnemyAttack._fromPtr;
game.EnemyAttack.StorageView._toPtr = game.EnemyAttack._toPtr;
game.EnemyAttack.StorageView._tempHeapPtr = game.EnemyAttack._tempHeapPtr;
game.EnemyAttack.StorageView._size = game.EnemyAttack._size;
game.EnemyAttack.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.EnemyAttack.StorageView.prototype, {
  delayBetweenAttacks: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  lastAttackTime: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.EnemyAttack._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.EnemyAttack is a POD type, so a JavaScript side copy constructor game.EnemyAttack._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.EnemyAttack, { cid: { configurable: true, get: function() { delete game.EnemyAttack.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyAttack.cid = Module._ut_component_register_cid(/*game.EnemyAttack*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::EnemyAttack"*/, 0, 0); } } });
Object.defineProperties(game.EnemyAttack.StorageView, { cid: { configurable: true, get: function() { return game.EnemyAttack.cid; } } });
game.EnemyAttack.delayBetweenAttacks = { $ofs:0, $t:"float", $c:game.EnemyAttack };
game.EnemyAttack.lastAttackTime = { $ofs:4, $t:"float", $c:game.EnemyAttack };
game.EnemyTag = function(arg0, arg1, arg2) {
  this._killReward = (arg0|0);
  this._fly = (arg1 ? true : false);
  this._damageToPlayer = (+(arg2===undefined ? 0 : arg2));
};
game.EnemyTag.prototype = Object.create(null);
game.EnemyTag.prototype.constructor = game.EnemyTag;
Object.defineProperties(game.EnemyTag.prototype, {
  killReward: {
    get: function() { return this._killReward; },
    set: function(v) { this._killReward = (v|0); },
  },
  fly: {
    get: function() { return this._fly; },
    set: function(v) { this._fly = (v ? true : false); },
  },
  damageToPlayer: {
    get: function() { return this._damageToPlayer; },
    set: function(v) { this._damageToPlayer = (+(v===undefined ? 0 : v)); },
  },
});
game.EnemyTag._size = 12;
game.EnemyTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.EnemyTag.prototype);
  v._killReward = HEAP32[(ptr+0)>>2];
  v._fly = (HEAP8[ptr+4]?true:false);
  v._damageToPlayer = HEAPF32[(ptr+8)>>2];
  return v;
};
game.EnemyTag._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.killReward;
  HEAP8[ptr+4] = (v.fly)?1:0;
  HEAPF32[(ptr+8)>>2] = v.damageToPlayer;
};
game.EnemyTag._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.killReward;
  HEAP8[ptr+4] = (v.fly)?1:0;
  HEAPF32[(ptr+8)>>2] = v.damageToPlayer;
};
game.EnemyTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.EnemyTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.EnemyTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.EnemyTag.StorageView.prototype = Object.create(null);
game.EnemyTag.StorageView.prototype.constructor = game.EnemyTag.StorageView;
game.EnemyTag._view = game.EnemyTag.StorageView;
game.EnemyTag.StorageView._isSharedComp = game.EnemyTag._isSharedComp = false;
game.EnemyTag.StorageView._fromPtr = game.EnemyTag._fromPtr;
game.EnemyTag.StorageView._toPtr = game.EnemyTag._toPtr;
game.EnemyTag.StorageView._tempHeapPtr = game.EnemyTag._tempHeapPtr;
game.EnemyTag.StorageView._size = game.EnemyTag._size;
game.EnemyTag.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.EnemyTag.StorageView.prototype, {
  killReward: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  fly: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  damageToPlayer: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.EnemyTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.EnemyTag is a POD type, so a JavaScript side copy constructor game.EnemyTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.EnemyTag, { cid: { configurable: true, get: function() { delete game.EnemyTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyTag.cid = Module._ut_component_register_cid(/*game.EnemyTag*/ 12, 4, 0, offsetsPtr, offsetsCount, 0/*"game::EnemyTag"*/, 0, 0); } } });
Object.defineProperties(game.EnemyTag.StorageView, { cid: { configurable: true, get: function() { return game.EnemyTag.cid; } } });
game.EnemyTag.killReward = { $ofs:0, $t:"int32_t", $c:game.EnemyTag };
game.EnemyTag.fly = { $ofs:4, $t:"bool", $c:game.EnemyTag };
game.EnemyTag.damageToPlayer = { $ofs:8, $t:"float", $c:game.EnemyTag };
game.FlipScale = function() {
};
game.FlipScale.prototype = Object.create(null);
game.FlipScale.prototype.constructor = game.FlipScale;
Object.defineProperties(game.FlipScale.prototype, {
});
game.FlipScale._size = 1;
game.FlipScale._fromPtr = function(ptr, v) {
  v = v || Object.create(game.FlipScale.prototype);
  return v;
};
game.FlipScale._toPtr = function(ptr, v) {
};
game.FlipScale._toTempHeapPtr = function(ptr, v) {
};
game.FlipScale._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.FlipScale._toTempHeapPtr(ptr, v);
  return ptr;
};
game.FlipScale.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.FlipScale.StorageView.prototype = Object.create(null);
game.FlipScale.StorageView.prototype.constructor = game.FlipScale.StorageView;
game.FlipScale._view = game.FlipScale.StorageView;
game.FlipScale.StorageView._isSharedComp = game.FlipScale._isSharedComp = false;
game.FlipScale.StorageView._fromPtr = game.FlipScale._fromPtr;
game.FlipScale.StorageView._toPtr = game.FlipScale._toPtr;
game.FlipScale.StorageView._tempHeapPtr = game.FlipScale._tempHeapPtr;
game.FlipScale.StorageView._size = game.FlipScale._size;
game.FlipScale.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.FlipScale.StorageView.prototype, {
});
game.FlipScale._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.FlipScale is a POD type, so a JavaScript side copy constructor game.FlipScale._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.FlipScale, { cid: { configurable: true, get: function() { delete game.FlipScale.cid; var offsetsPtr = 0, offsetsCount = 0; return game.FlipScale.cid = Module._ut_component_register_cid(/*game.FlipScale*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::FlipScale"*/, 0, 0); } } });
Object.defineProperties(game.FlipScale.StorageView, { cid: { configurable: true, get: function() { return game.FlipScale.cid; } } });
game.GameState = function(arg0) {
  this._CurrentState = (arg0|0);
};
game.GameState.prototype = Object.create(null);
game.GameState.prototype.constructor = game.GameState;
Object.defineProperties(game.GameState.prototype, {
  CurrentState: {
    get: function() { return this._CurrentState; },
    set: function(v) { this._CurrentState = (v|0); },
  },
});
game.GameState._size = 4;
game.GameState._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameState.prototype);
  v._CurrentState = HEAP32[(ptr+0)>>2];
  return v;
};
game.GameState._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentState;
};
game.GameState._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.CurrentState;
};
game.GameState._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.GameState._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameState.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameState.StorageView.prototype = Object.create(null);
game.GameState.StorageView.prototype.constructor = game.GameState.StorageView;
game.GameState._view = game.GameState.StorageView;
game.GameState.StorageView._isSharedComp = game.GameState._isSharedComp = false;
game.GameState.StorageView._fromPtr = game.GameState._fromPtr;
game.GameState.StorageView._toPtr = game.GameState._toPtr;
game.GameState.StorageView._tempHeapPtr = game.GameState._tempHeapPtr;
game.GameState.StorageView._size = game.GameState._size;
game.GameState.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.GameState.StorageView.prototype, {
  CurrentState: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.GameState._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameState is a POD type, so a JavaScript side copy constructor game.GameState._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.GameState, { cid: { configurable: true, get: function() { delete game.GameState.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameState.cid = Module._ut_component_register_cid(/*game.GameState*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::GameState"*/, 0, 0); } } });
Object.defineProperties(game.GameState.StorageView, { cid: { configurable: true, get: function() { return game.GameState.cid; } } });
game.GameState.CurrentState = { $ofs:0, $t:"game.GameStateType", $c:game.GameState };
game.GroundTag = function() {
};
game.GroundTag.prototype = Object.create(null);
game.GroundTag.prototype.constructor = game.GroundTag;
Object.defineProperties(game.GroundTag.prototype, {
});
game.GroundTag._size = 1;
game.GroundTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GroundTag.prototype);
  return v;
};
game.GroundTag._toPtr = function(ptr, v) {
};
game.GroundTag._toTempHeapPtr = function(ptr, v) {
};
game.GroundTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.GroundTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GroundTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GroundTag.StorageView.prototype = Object.create(null);
game.GroundTag.StorageView.prototype.constructor = game.GroundTag.StorageView;
game.GroundTag._view = game.GroundTag.StorageView;
game.GroundTag.StorageView._isSharedComp = game.GroundTag._isSharedComp = false;
game.GroundTag.StorageView._fromPtr = game.GroundTag._fromPtr;
game.GroundTag.StorageView._toPtr = game.GroundTag._toPtr;
game.GroundTag.StorageView._tempHeapPtr = game.GroundTag._tempHeapPtr;
game.GroundTag.StorageView._size = game.GroundTag._size;
game.GroundTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.GroundTag.StorageView.prototype, {
});
game.GroundTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GroundTag is a POD type, so a JavaScript side copy constructor game.GroundTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.GroundTag, { cid: { configurable: true, get: function() { delete game.GroundTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GroundTag.cid = Module._ut_component_register_cid(/*game.GroundTag*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::GroundTag"*/, 0, 0); } } });
Object.defineProperties(game.GroundTag.StorageView, { cid: { configurable: true, get: function() { return game.GroundTag.cid; } } });
game.Health = function(arg0, arg1) {
  this._current = (+(arg0===undefined ? 0 : arg0));
  this._max = (+(arg1===undefined ? 0 : arg1));
};
game.Health.prototype = Object.create(null);
game.Health.prototype.constructor = game.Health;
Object.defineProperties(game.Health.prototype, {
  current: {
    get: function() { return this._current; },
    set: function(v) { this._current = (+(v===undefined ? 0 : v)); },
  },
  max: {
    get: function() { return this._max; },
    set: function(v) { this._max = (+(v===undefined ? 0 : v)); },
  },
});
game.Health._size = 8;
game.Health._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Health.prototype);
  v._current = HEAPF32[(ptr+0)>>2];
  v._max = HEAPF32[(ptr+4)>>2];
  return v;
};
game.Health._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.current;
  HEAPF32[(ptr+4)>>2] = v.max;
};
game.Health._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.current;
  HEAPF32[(ptr+4)>>2] = v.max;
};
game.Health._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Health._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Health.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Health.StorageView.prototype = Object.create(null);
game.Health.StorageView.prototype.constructor = game.Health.StorageView;
game.Health._view = game.Health.StorageView;
game.Health.StorageView._isSharedComp = game.Health._isSharedComp = false;
game.Health.StorageView._fromPtr = game.Health._fromPtr;
game.Health.StorageView._toPtr = game.Health._toPtr;
game.Health.StorageView._tempHeapPtr = game.Health._tempHeapPtr;
game.Health.StorageView._size = game.Health._size;
game.Health.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Health.StorageView.prototype, {
  current: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  max: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.Health._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Health is a POD type, so a JavaScript side copy constructor game.Health._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Health, { cid: { configurable: true, get: function() { delete game.Health.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Health.cid = Module._ut_component_register_cid(/*game.Health*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Health"*/, 0, 0); } } });
Object.defineProperties(game.Health.StorageView, { cid: { configurable: true, get: function() { return game.Health.cid; } } });
game.Health.current = { $ofs:0, $t:"float", $c:game.Health };
game.Health.max = { $ofs:4, $t:"float", $c:game.Health };
game.HealthVisualization = function(arg0) {
  this._Bar = (arg0 === undefined ? new ut.Entity : arg0);
};
game.HealthVisualization.prototype = Object.create(null);
game.HealthVisualization.prototype.constructor = game.HealthVisualization;
Object.defineProperties(game.HealthVisualization.prototype, {
  Bar: {
    get: function() { return this._Bar; },
    set: function(v) { this._Bar = (v === undefined ? new ut.Entity : v); },
  },
});
game.HealthVisualization._size = 8;
game.HealthVisualization._fromPtr = function(ptr, v) {
  v = v || Object.create(game.HealthVisualization.prototype);
  v._Bar = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.HealthVisualization._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Bar);
};
game.HealthVisualization._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Bar);
};
game.HealthVisualization._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.HealthVisualization._toTempHeapPtr(ptr, v);
  return ptr;
};
game.HealthVisualization.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.HealthVisualization.StorageView.prototype = Object.create(null);
game.HealthVisualization.StorageView.prototype.constructor = game.HealthVisualization.StorageView;
game.HealthVisualization._view = game.HealthVisualization.StorageView;
game.HealthVisualization.StorageView._isSharedComp = game.HealthVisualization._isSharedComp = false;
game.HealthVisualization.StorageView._fromPtr = game.HealthVisualization._fromPtr;
game.HealthVisualization.StorageView._toPtr = game.HealthVisualization._toPtr;
game.HealthVisualization.StorageView._tempHeapPtr = game.HealthVisualization._tempHeapPtr;
game.HealthVisualization.StorageView._size = game.HealthVisualization._size;
game.HealthVisualization.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.HealthVisualization.StorageView.prototype, {
  Bar: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.HealthVisualization._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.HealthVisualization is a POD type, so a JavaScript side copy constructor game.HealthVisualization._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.HealthVisualization, { cid: { configurable: true, get: function() { delete game.HealthVisualization.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.HealthVisualization.cid = Module._ut_component_register_cid(/*game.HealthVisualization*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::HealthVisualization"*/, 0, 0); } } });
Object.defineProperties(game.HealthVisualization.StorageView, { cid: { configurable: true, get: function() { return game.HealthVisualization.cid; } } });
game.HealthVisualization.Bar = { $ofs:0, $t:"ut.Entity", $c:game.HealthVisualization };
game.HealthVisualization.Bar.index = { $ofs:0, $t:"int32_t", $c:game.HealthVisualization };
game.HealthVisualization.Bar.version = { $ofs:4, $t:"int32_t", $c:game.HealthVisualization };
game.Hit = function(arg0, arg1, arg2, arg3) {
  this._Damage = (+(arg0===undefined ? 0 : arg0));
  this._allowImpulse = (arg1 ? true : false);
  this._Impulse = new ut.Math.Vector2(); if ((arg2) !== undefined) { this._Impulse.copy(arg2); };
  this._ImpulseForce = (arg3|0);
};
game.Hit.prototype = Object.create(null);
game.Hit.prototype.constructor = game.Hit;
Object.defineProperties(game.Hit.prototype, {
  Damage: {
    get: function() { return this._Damage; },
    set: function(v) { this._Damage = (+(v===undefined ? 0 : v)); },
  },
  allowImpulse: {
    get: function() { return this._allowImpulse; },
    set: function(v) { this._allowImpulse = (v ? true : false); },
  },
  Impulse: {
    get: function() { return this._Impulse; },
    set: function(v) { this._Impulse.copy(v); },
  },
  ImpulseForce: {
    get: function() { return this._ImpulseForce; },
    set: function(v) { this._ImpulseForce = (v|0); },
  },
});
game.Hit._size = 20;
game.Hit._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Hit.prototype);
  v._Damage = HEAPF32[(ptr+0)>>2];
  v._allowImpulse = (HEAP8[ptr+4]?true:false);
  v._Impulse = ut._utils.vec2FromHeap(null, ptr+8);
  v._ImpulseForce = HEAP16[(ptr+16)>>1];
  return v;
};
game.Hit._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Damage;
  HEAP8[ptr+4] = (v.allowImpulse)?1:0;
  ut._utils.vec2ToHeap(v.Impulse, ptr+8);
  HEAP16[(ptr+16)>>1] = v.ImpulseForce;
};
game.Hit._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Damage;
  HEAP8[ptr+4] = (v.allowImpulse)?1:0;
  ut._utils.vec2ToHeap(v.Impulse, ptr+8);
  HEAP16[(ptr+16)>>1] = v.ImpulseForce;
};
game.Hit._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Hit._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Hit.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Hit.StorageView.prototype = Object.create(null);
game.Hit.StorageView.prototype.constructor = game.Hit.StorageView;
game.Hit._view = game.Hit.StorageView;
game.Hit.StorageView._isSharedComp = game.Hit._isSharedComp = false;
game.Hit.StorageView._fromPtr = game.Hit._fromPtr;
game.Hit.StorageView._toPtr = game.Hit._toPtr;
game.Hit.StorageView._tempHeapPtr = game.Hit._tempHeapPtr;
game.Hit.StorageView._size = game.Hit._size;
game.Hit.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Hit.StorageView.prototype, {
  Damage: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  allowImpulse: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  Impulse: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+8); },
  },
  ImpulseForce: {
    get: function() { return HEAP16[(this._ptr+16)>>1]; },
    set: function(v) { HEAP16[(this._ptr+16)>>1] = v; },
  },
});
game.Hit._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Hit is a POD type, so a JavaScript side copy constructor game.Hit._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Hit, { cid: { configurable: true, get: function() { delete game.Hit.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Hit.cid = Module._ut_component_register_cid(/*game.Hit*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Hit"*/, 0, 0); } } });
Object.defineProperties(game.Hit.StorageView, { cid: { configurable: true, get: function() { return game.Hit.cid; } } });
game.Hit.Damage = { $ofs:0, $t:"float", $c:game.Hit };
game.Hit.allowImpulse = { $ofs:4, $t:"bool", $c:game.Hit };
game.Hit.Impulse = { $ofs:8, $t:"ut.Math.Vector2", $c:game.Hit };
game.Hit.Impulse.y = { $ofs:12, $t:"float", $c:game.Hit };
game.Hit.Impulse.x = { $ofs:8, $t:"float", $c:game.Hit };
game.Hit.ImpulseForce = { $ofs:16, $t:"int16_t", $c:game.Hit };
game.Input = function(arg0, arg1, arg2) {
  this._axis = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._axis.copy(arg0); };
  this._aimDir = new ut.Math.Vector3(); if ((arg1) !== undefined) { this._aimDir.copy(arg1); };
  this._weaponInteraction = (arg2 ? true : false);
};
game.Input.prototype = Object.create(null);
game.Input.prototype.constructor = game.Input;
Object.defineProperties(game.Input.prototype, {
  axis: {
    get: function() { return this._axis; },
    set: function(v) { this._axis.copy(v); },
  },
  aimDir: {
    get: function() { return this._aimDir; },
    set: function(v) { this._aimDir.copy(v); },
  },
  weaponInteraction: {
    get: function() { return this._weaponInteraction; },
    set: function(v) { this._weaponInteraction = (v ? true : false); },
  },
});
game.Input._size = 24;
game.Input._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Input.prototype);
  v._axis = ut._utils.vec2FromHeap(null, ptr+0);
  v._aimDir = ut._utils.vec3FromHeap(null, ptr+8);
  v._weaponInteraction = (HEAP8[ptr+20]?true:false);
  return v;
};
game.Input._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.axis, ptr+0);
  ut._utils.vec3ToHeap(v.aimDir, ptr+8);
  HEAP8[ptr+20] = (v.weaponInteraction)?1:0;
};
game.Input._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.axis, ptr+0);
  ut._utils.vec3ToHeap(v.aimDir, ptr+8);
  HEAP8[ptr+20] = (v.weaponInteraction)?1:0;
};
game.Input._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.Input._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Input.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Input.StorageView.prototype = Object.create(null);
game.Input.StorageView.prototype.constructor = game.Input.StorageView;
game.Input._view = game.Input.StorageView;
game.Input.StorageView._isSharedComp = game.Input._isSharedComp = false;
game.Input.StorageView._fromPtr = game.Input._fromPtr;
game.Input.StorageView._toPtr = game.Input._toPtr;
game.Input.StorageView._tempHeapPtr = game.Input._tempHeapPtr;
game.Input.StorageView._size = game.Input._size;
game.Input.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.Input.StorageView.prototype, {
  axis: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
  aimDir: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+8); },
  },
  weaponInteraction: {
    get: function() { return (HEAP8[this._ptr+20]?true:false); },
    set: function(v) { HEAP8[this._ptr+20] = (v)?1:0; },
  },
});
game.Input._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Input is a POD type, so a JavaScript side copy constructor game.Input._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Input, { cid: { configurable: true, get: function() { delete game.Input.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Input.cid = Module._ut_component_register_cid(/*game.Input*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Input"*/, 0, 0); } } });
Object.defineProperties(game.Input.StorageView, { cid: { configurable: true, get: function() { return game.Input.cid; } } });
game.Input.axis = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Input };
game.Input.axis.y = { $ofs:4, $t:"float", $c:game.Input };
game.Input.axis.x = { $ofs:0, $t:"float", $c:game.Input };
game.Input.aimDir = { $ofs:8, $t:"ut.Math.Vector3", $c:game.Input };
game.Input.aimDir.z = { $ofs:16, $t:"float", $c:game.Input };
game.Input.aimDir.y = { $ofs:12, $t:"float", $c:game.Input };
game.Input.aimDir.x = { $ofs:8, $t:"float", $c:game.Input };
game.Input.weaponInteraction = { $ofs:20, $t:"bool", $c:game.Input };
game.Movement = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
  this._direction = new ut.Math.Vector2(); if ((arg1) !== undefined) { this._direction.copy(arg1); };
  this._jumpForce = (+(arg2===undefined ? 0 : arg2));
  this._jump = (arg3 ? true : false);
  this._onGround = (arg4 ? true : false);
  this._shouldJump = (arg5 ? true : false);
};
game.Movement.prototype = Object.create(null);
game.Movement.prototype.constructor = game.Movement;
Object.defineProperties(game.Movement.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
  direction: {
    get: function() { return this._direction; },
    set: function(v) { this._direction.copy(v); },
  },
  jumpForce: {
    get: function() { return this._jumpForce; },
    set: function(v) { this._jumpForce = (+(v===undefined ? 0 : v)); },
  },
  jump: {
    get: function() { return this._jump; },
    set: function(v) { this._jump = (v ? true : false); },
  },
  onGround: {
    get: function() { return this._onGround; },
    set: function(v) { this._onGround = (v ? true : false); },
  },
  shouldJump: {
    get: function() { return this._shouldJump; },
    set: function(v) { this._shouldJump = (v ? true : false); },
  },
});
game.Movement._size = 20;
game.Movement._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Movement.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  v._direction = ut._utils.vec2FromHeap(null, ptr+4);
  v._jumpForce = HEAPF32[(ptr+12)>>2];
  v._jump = (HEAP8[ptr+16]?true:false);
  v._onGround = (HEAP8[ptr+17]?true:false);
  v._shouldJump = (HEAP8[ptr+18]?true:false);
  return v;
};
game.Movement._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  ut._utils.vec2ToHeap(v.direction, ptr+4);
  HEAPF32[(ptr+12)>>2] = v.jumpForce;
  HEAP8[ptr+16] = (v.jump)?1:0;
  HEAP8[ptr+17] = (v.onGround)?1:0;
  HEAP8[ptr+18] = (v.shouldJump)?1:0;
};
game.Movement._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  ut._utils.vec2ToHeap(v.direction, ptr+4);
  HEAPF32[(ptr+12)>>2] = v.jumpForce;
  HEAP8[ptr+16] = (v.jump)?1:0;
  HEAP8[ptr+17] = (v.onGround)?1:0;
  HEAP8[ptr+18] = (v.shouldJump)?1:0;
};
game.Movement._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(20);
  if (v) game.Movement._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Movement.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Movement.StorageView.prototype = Object.create(null);
game.Movement.StorageView.prototype.constructor = game.Movement.StorageView;
game.Movement._view = game.Movement.StorageView;
game.Movement.StorageView._isSharedComp = game.Movement._isSharedComp = false;
game.Movement.StorageView._fromPtr = game.Movement._fromPtr;
game.Movement.StorageView._toPtr = game.Movement._toPtr;
game.Movement.StorageView._tempHeapPtr = game.Movement._tempHeapPtr;
game.Movement.StorageView._size = game.Movement._size;
game.Movement.StorageView.prototype.$advance = function() {
  this._ptr += 20;
};
Object.defineProperties(game.Movement.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  direction: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+4); },
  },
  jumpForce: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
  jump: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  onGround: {
    get: function() { return (HEAP8[this._ptr+17]?true:false); },
    set: function(v) { HEAP8[this._ptr+17] = (v)?1:0; },
  },
  shouldJump: {
    get: function() { return (HEAP8[this._ptr+18]?true:false); },
    set: function(v) { HEAP8[this._ptr+18] = (v)?1:0; },
  },
});
game.Movement._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Movement is a POD type, so a JavaScript side copy constructor game.Movement._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Movement, { cid: { configurable: true, get: function() { delete game.Movement.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Movement.cid = Module._ut_component_register_cid(/*game.Movement*/ 20, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Movement"*/, 0, 0); } } });
Object.defineProperties(game.Movement.StorageView, { cid: { configurable: true, get: function() { return game.Movement.cid; } } });
game.Movement.speed = { $ofs:0, $t:"float", $c:game.Movement };
game.Movement.direction = { $ofs:4, $t:"ut.Math.Vector2", $c:game.Movement };
game.Movement.direction.y = { $ofs:8, $t:"float", $c:game.Movement };
game.Movement.direction.x = { $ofs:4, $t:"float", $c:game.Movement };
game.Movement.jumpForce = { $ofs:12, $t:"float", $c:game.Movement };
game.Movement.jump = { $ofs:16, $t:"bool", $c:game.Movement };
game.Movement.onGround = { $ofs:17, $t:"bool", $c:game.Movement };
game.Movement.shouldJump = { $ofs:18, $t:"bool", $c:game.Movement };
game.Pickable = function(arg0, arg1, arg2) {
  this._Picker = (arg0 === undefined ? new ut.Entity : arg0);
  this._initTime = (+(arg1===undefined ? 0 : arg1));
  this._delay = (+(arg2===undefined ? 0 : arg2));
};
game.Pickable.prototype = Object.create(null);
game.Pickable.prototype.constructor = game.Pickable;
Object.defineProperties(game.Pickable.prototype, {
  Picker: {
    get: function() { return this._Picker; },
    set: function(v) { this._Picker = (v === undefined ? new ut.Entity : v); },
  },
  initTime: {
    get: function() { return this._initTime; },
    set: function(v) { this._initTime = (+(v===undefined ? 0 : v)); },
  },
  delay: {
    get: function() { return this._delay; },
    set: function(v) { this._delay = (+(v===undefined ? 0 : v)); },
  },
});
game.Pickable._size = 16;
game.Pickable._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Pickable.prototype);
  v._Picker = ut.Entity._fromPtr(ptr+0);
  v._initTime = HEAPF32[(ptr+8)>>2];
  v._delay = HEAPF32[(ptr+12)>>2];
  return v;
};
game.Pickable._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Picker);
  HEAPF32[(ptr+8)>>2] = v.initTime;
  HEAPF32[(ptr+12)>>2] = v.delay;
};
game.Pickable._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Picker);
  HEAPF32[(ptr+8)>>2] = v.initTime;
  HEAPF32[(ptr+12)>>2] = v.delay;
};
game.Pickable._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Pickable._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Pickable.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Pickable.StorageView.prototype = Object.create(null);
game.Pickable.StorageView.prototype.constructor = game.Pickable.StorageView;
game.Pickable._view = game.Pickable.StorageView;
game.Pickable.StorageView._isSharedComp = game.Pickable._isSharedComp = false;
game.Pickable.StorageView._fromPtr = game.Pickable._fromPtr;
game.Pickable.StorageView._toPtr = game.Pickable._toPtr;
game.Pickable.StorageView._tempHeapPtr = game.Pickable._tempHeapPtr;
game.Pickable.StorageView._size = game.Pickable._size;
game.Pickable.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Pickable.StorageView.prototype, {
  Picker: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  initTime: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  delay: {
    get: function() { return HEAPF32[(this._ptr+12)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+12)>>2] = v; },
  },
});
game.Pickable._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Pickable is a POD type, so a JavaScript side copy constructor game.Pickable._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Pickable, { cid: { configurable: true, get: function() { delete game.Pickable.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.Pickable.cid = Module._ut_component_register_cid(/*game.Pickable*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Pickable"*/, 0, 0); } } });
Object.defineProperties(game.Pickable.StorageView, { cid: { configurable: true, get: function() { return game.Pickable.cid; } } });
game.Pickable.Picker = { $ofs:0, $t:"ut.Entity", $c:game.Pickable };
game.Pickable.Picker.index = { $ofs:0, $t:"int32_t", $c:game.Pickable };
game.Pickable.Picker.version = { $ofs:4, $t:"int32_t", $c:game.Pickable };
game.Pickable.initTime = { $ofs:8, $t:"float", $c:game.Pickable };
game.Pickable.delay = { $ofs:12, $t:"float", $c:game.Pickable };
game.PlayerTag = function() {
};
game.PlayerTag.prototype = Object.create(null);
game.PlayerTag.prototype.constructor = game.PlayerTag;
Object.defineProperties(game.PlayerTag.prototype, {
});
game.PlayerTag._size = 1;
game.PlayerTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayerTag.prototype);
  return v;
};
game.PlayerTag._toPtr = function(ptr, v) {
};
game.PlayerTag._toTempHeapPtr = function(ptr, v) {
};
game.PlayerTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.PlayerTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayerTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayerTag.StorageView.prototype = Object.create(null);
game.PlayerTag.StorageView.prototype.constructor = game.PlayerTag.StorageView;
game.PlayerTag._view = game.PlayerTag.StorageView;
game.PlayerTag.StorageView._isSharedComp = game.PlayerTag._isSharedComp = false;
game.PlayerTag.StorageView._fromPtr = game.PlayerTag._fromPtr;
game.PlayerTag.StorageView._toPtr = game.PlayerTag._toPtr;
game.PlayerTag.StorageView._tempHeapPtr = game.PlayerTag._tempHeapPtr;
game.PlayerTag.StorageView._size = game.PlayerTag._size;
game.PlayerTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.PlayerTag.StorageView.prototype, {
});
game.PlayerTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayerTag is a POD type, so a JavaScript side copy constructor game.PlayerTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.PlayerTag, { cid: { configurable: true, get: function() { delete game.PlayerTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerTag.cid = Module._ut_component_register_cid(/*game.PlayerTag*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::PlayerTag"*/, 0, 0); } } });
Object.defineProperties(game.PlayerTag.StorageView, { cid: { configurable: true, get: function() { return game.PlayerTag.cid; } } });
game.PlayerViewTag = function() {
};
game.PlayerViewTag.prototype = Object.create(null);
game.PlayerViewTag.prototype.constructor = game.PlayerViewTag;
Object.defineProperties(game.PlayerViewTag.prototype, {
});
game.PlayerViewTag._size = 1;
game.PlayerViewTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayerViewTag.prototype);
  return v;
};
game.PlayerViewTag._toPtr = function(ptr, v) {
};
game.PlayerViewTag._toTempHeapPtr = function(ptr, v) {
};
game.PlayerViewTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.PlayerViewTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayerViewTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayerViewTag.StorageView.prototype = Object.create(null);
game.PlayerViewTag.StorageView.prototype.constructor = game.PlayerViewTag.StorageView;
game.PlayerViewTag._view = game.PlayerViewTag.StorageView;
game.PlayerViewTag.StorageView._isSharedComp = game.PlayerViewTag._isSharedComp = false;
game.PlayerViewTag.StorageView._fromPtr = game.PlayerViewTag._fromPtr;
game.PlayerViewTag.StorageView._toPtr = game.PlayerViewTag._toPtr;
game.PlayerViewTag.StorageView._tempHeapPtr = game.PlayerViewTag._tempHeapPtr;
game.PlayerViewTag.StorageView._size = game.PlayerViewTag._size;
game.PlayerViewTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.PlayerViewTag.StorageView.prototype, {
});
game.PlayerViewTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayerViewTag is a POD type, so a JavaScript side copy constructor game.PlayerViewTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.PlayerViewTag, { cid: { configurable: true, get: function() { delete game.PlayerViewTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerViewTag.cid = Module._ut_component_register_cid(/*game.PlayerViewTag*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::PlayerViewTag"*/, 0, 0); } } });
Object.defineProperties(game.PlayerViewTag.StorageView, { cid: { configurable: true, get: function() { return game.PlayerViewTag.cid; } } });
game.Recall = function(arg0, arg1) {
  this._Caller = (arg0 === undefined ? new ut.Entity : arg0);
  this._speed = (+(arg1===undefined ? 0 : arg1));
};
game.Recall.prototype = Object.create(null);
game.Recall.prototype.constructor = game.Recall;
Object.defineProperties(game.Recall.prototype, {
  Caller: {
    get: function() { return this._Caller; },
    set: function(v) { this._Caller = (v === undefined ? new ut.Entity : v); },
  },
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
});
game.Recall._size = 12;
game.Recall._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Recall.prototype);
  v._Caller = ut.Entity._fromPtr(ptr+0);
  v._speed = HEAPF32[(ptr+8)>>2];
  return v;
};
game.Recall._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Caller);
  HEAPF32[(ptr+8)>>2] = v.speed;
};
game.Recall._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Caller);
  HEAPF32[(ptr+8)>>2] = v.speed;
};
game.Recall._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.Recall._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Recall.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Recall.StorageView.prototype = Object.create(null);
game.Recall.StorageView.prototype.constructor = game.Recall.StorageView;
game.Recall._view = game.Recall.StorageView;
game.Recall.StorageView._isSharedComp = game.Recall._isSharedComp = false;
game.Recall.StorageView._fromPtr = game.Recall._fromPtr;
game.Recall.StorageView._toPtr = game.Recall._toPtr;
game.Recall.StorageView._tempHeapPtr = game.Recall._tempHeapPtr;
game.Recall.StorageView._size = game.Recall._size;
game.Recall.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.Recall.StorageView.prototype, {
  Caller: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  speed: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
});
game.Recall._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Recall is a POD type, so a JavaScript side copy constructor game.Recall._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Recall, { cid: { configurable: true, get: function() { delete game.Recall.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.Recall.cid = Module._ut_component_register_cid(/*game.Recall*/ 12, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Recall"*/, 0, 0); } } });
Object.defineProperties(game.Recall.StorageView, { cid: { configurable: true, get: function() { return game.Recall.cid; } } });
game.Recall.Caller = { $ofs:0, $t:"ut.Entity", $c:game.Recall };
game.Recall.Caller.index = { $ofs:0, $t:"int32_t", $c:game.Recall };
game.Recall.Caller.version = { $ofs:4, $t:"int32_t", $c:game.Recall };
game.Recall.speed = { $ofs:8, $t:"float", $c:game.Recall };
game.Score = function() {
};
game.Score.prototype = Object.create(null);
game.Score.prototype.constructor = game.Score;
Object.defineProperties(game.Score.prototype, {
});
game.Score._size = 1;
game.Score._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Score.prototype);
  return v;
};
game.Score._toPtr = function(ptr, v) {
};
game.Score._toTempHeapPtr = function(ptr, v) {
};
game.Score._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Score._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Score.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Score.StorageView.prototype = Object.create(null);
game.Score.StorageView.prototype.constructor = game.Score.StorageView;
game.Score._view = game.Score.StorageView;
game.Score.StorageView._isSharedComp = game.Score._isSharedComp = false;
game.Score.StorageView._fromPtr = game.Score._fromPtr;
game.Score.StorageView._toPtr = game.Score._toPtr;
game.Score.StorageView._tempHeapPtr = game.Score._tempHeapPtr;
game.Score.StorageView._size = game.Score._size;
game.Score.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Score.StorageView.prototype, {
});
game.Score._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Score is a POD type, so a JavaScript side copy constructor game.Score._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Score, { cid: { configurable: true, get: function() { delete game.Score.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Score.cid = Module._ut_component_register_cid(/*game.Score*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"game::Score"*/, 0, 0); } } });
Object.defineProperties(game.Score.StorageView, { cid: { configurable: true, get: function() { return game.Score.cid; } } });
game.Shake = function(arg0, arg1, arg2, arg3) {
  this._duration = (+(arg0===undefined ? 0 : arg0));
  this._amount = (+(arg1===undefined ? 0 : arg1));
  this._elapsedTime = (+(arg2===undefined ? 0 : arg2));
  this._initialPosition = new ut.Math.Vector3(); if ((arg3) !== undefined) { this._initialPosition.copy(arg3); };
};
game.Shake.prototype = Object.create(null);
game.Shake.prototype.constructor = game.Shake;
Object.defineProperties(game.Shake.prototype, {
  duration: {
    get: function() { return this._duration; },
    set: function(v) { this._duration = (+(v===undefined ? 0 : v)); },
  },
  amount: {
    get: function() { return this._amount; },
    set: function(v) { this._amount = (+(v===undefined ? 0 : v)); },
  },
  elapsedTime: {
    get: function() { return this._elapsedTime; },
    set: function(v) { this._elapsedTime = (+(v===undefined ? 0 : v)); },
  },
  initialPosition: {
    get: function() { return this._initialPosition; },
    set: function(v) { this._initialPosition.copy(v); },
  },
});
game.Shake._size = 24;
game.Shake._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Shake.prototype);
  v._duration = HEAPF32[(ptr+0)>>2];
  v._amount = HEAPF32[(ptr+4)>>2];
  v._elapsedTime = HEAPF32[(ptr+8)>>2];
  v._initialPosition = ut._utils.vec3FromHeap(null, ptr+12);
  return v;
};
game.Shake._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.duration;
  HEAPF32[(ptr+4)>>2] = v.amount;
  HEAPF32[(ptr+8)>>2] = v.elapsedTime;
  ut._utils.vec3ToHeap(v.initialPosition, ptr+12);
};
game.Shake._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.duration;
  HEAPF32[(ptr+4)>>2] = v.amount;
  HEAPF32[(ptr+8)>>2] = v.elapsedTime;
  ut._utils.vec3ToHeap(v.initialPosition, ptr+12);
};
game.Shake._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) game.Shake._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Shake.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Shake.StorageView.prototype = Object.create(null);
game.Shake.StorageView.prototype.constructor = game.Shake.StorageView;
game.Shake._view = game.Shake.StorageView;
game.Shake.StorageView._isSharedComp = game.Shake._isSharedComp = false;
game.Shake.StorageView._fromPtr = game.Shake._fromPtr;
game.Shake.StorageView._toPtr = game.Shake._toPtr;
game.Shake.StorageView._tempHeapPtr = game.Shake._tempHeapPtr;
game.Shake.StorageView._size = game.Shake._size;
game.Shake.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(game.Shake.StorageView.prototype, {
  duration: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  amount: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  elapsedTime: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  initialPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+12); },
  },
});
game.Shake._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Shake is a POD type, so a JavaScript side copy constructor game.Shake._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Shake, { cid: { configurable: true, get: function() { delete game.Shake.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Shake.cid = Module._ut_component_register_cid(/*game.Shake*/ 24, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Shake"*/, 0, 0); } } });
Object.defineProperties(game.Shake.StorageView, { cid: { configurable: true, get: function() { return game.Shake.cid; } } });
game.Shake.duration = { $ofs:0, $t:"float", $c:game.Shake };
game.Shake.amount = { $ofs:4, $t:"float", $c:game.Shake };
game.Shake.elapsedTime = { $ofs:8, $t:"float", $c:game.Shake };
game.Shake.initialPosition = { $ofs:12, $t:"ut.Math.Vector3", $c:game.Shake };
game.Shake.initialPosition.z = { $ofs:20, $t:"float", $c:game.Shake };
game.Shake.initialPosition.y = { $ofs:16, $t:"float", $c:game.Shake };
game.Shake.initialPosition.x = { $ofs:12, $t:"float", $c:game.Shake };
game.Spawner = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this._isPaused = (arg0 ? true : false);
  this._time = (+(arg1===undefined ? 0 : arg1));
  this._delay = (+(arg2===undefined ? 0 : arg2));
  this._maxNumOfEnemies = (arg3|0);
  this._numOfEnemies = (arg4|0);
  this._newEnemyKillReward = (arg5|0);
  this._newEnemyDamageToPlayer = (arg6|0);
  this._enemySpeed = (arg7|0);
};
game.Spawner.prototype = Object.create(null);
game.Spawner.prototype.constructor = game.Spawner;
Object.defineProperties(game.Spawner.prototype, {
  isPaused: {
    get: function() { return this._isPaused; },
    set: function(v) { this._isPaused = (v ? true : false); },
  },
  time: {
    get: function() { return this._time; },
    set: function(v) { this._time = (+(v===undefined ? 0 : v)); },
  },
  delay: {
    get: function() { return this._delay; },
    set: function(v) { this._delay = (+(v===undefined ? 0 : v)); },
  },
  maxNumOfEnemies: {
    get: function() { return this._maxNumOfEnemies; },
    set: function(v) { this._maxNumOfEnemies = (v|0); },
  },
  numOfEnemies: {
    get: function() { return this._numOfEnemies; },
    set: function(v) { this._numOfEnemies = (v|0); },
  },
  newEnemyKillReward: {
    get: function() { return this._newEnemyKillReward; },
    set: function(v) { this._newEnemyKillReward = (v|0); },
  },
  newEnemyDamageToPlayer: {
    get: function() { return this._newEnemyDamageToPlayer; },
    set: function(v) { this._newEnemyDamageToPlayer = (v|0); },
  },
  enemySpeed: {
    get: function() { return this._enemySpeed; },
    set: function(v) { this._enemySpeed = (v|0); },
  },
});
game.Spawner._size = 32;
game.Spawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spawner.prototype);
  v._isPaused = (HEAP8[ptr+0]?true:false);
  v._time = HEAPF32[(ptr+4)>>2];
  v._delay = HEAPF32[(ptr+8)>>2];
  v._maxNumOfEnemies = HEAP32[(ptr+12)>>2];
  v._numOfEnemies = HEAP32[(ptr+16)>>2];
  v._newEnemyKillReward = HEAP32[(ptr+20)>>2];
  v._newEnemyDamageToPlayer = HEAP32[(ptr+24)>>2];
  v._enemySpeed = HEAP32[(ptr+28)>>2];
  return v;
};
game.Spawner._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isPaused)?1:0;
  HEAPF32[(ptr+4)>>2] = v.time;
  HEAPF32[(ptr+8)>>2] = v.delay;
  HEAP32[(ptr+12)>>2] = v.maxNumOfEnemies;
  HEAP32[(ptr+16)>>2] = v.numOfEnemies;
  HEAP32[(ptr+20)>>2] = v.newEnemyKillReward;
  HEAP32[(ptr+24)>>2] = v.newEnemyDamageToPlayer;
  HEAP32[(ptr+28)>>2] = v.enemySpeed;
};
game.Spawner._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isPaused)?1:0;
  HEAPF32[(ptr+4)>>2] = v.time;
  HEAPF32[(ptr+8)>>2] = v.delay;
  HEAP32[(ptr+12)>>2] = v.maxNumOfEnemies;
  HEAP32[(ptr+16)>>2] = v.numOfEnemies;
  HEAP32[(ptr+20)>>2] = v.newEnemyKillReward;
  HEAP32[(ptr+24)>>2] = v.newEnemyDamageToPlayer;
  HEAP32[(ptr+28)>>2] = v.enemySpeed;
};
game.Spawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(32);
  if (v) game.Spawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spawner.StorageView.prototype = Object.create(null);
game.Spawner.StorageView.prototype.constructor = game.Spawner.StorageView;
game.Spawner._view = game.Spawner.StorageView;
game.Spawner.StorageView._isSharedComp = game.Spawner._isSharedComp = false;
game.Spawner.StorageView._fromPtr = game.Spawner._fromPtr;
game.Spawner.StorageView._toPtr = game.Spawner._toPtr;
game.Spawner.StorageView._tempHeapPtr = game.Spawner._tempHeapPtr;
game.Spawner.StorageView._size = game.Spawner._size;
game.Spawner.StorageView.prototype.$advance = function() {
  this._ptr += 32;
};
Object.defineProperties(game.Spawner.StorageView.prototype, {
  isPaused: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  time: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
  delay: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  maxNumOfEnemies: {
    get: function() { return HEAP32[(this._ptr+12)>>2]; },
    set: function(v) { HEAP32[(this._ptr+12)>>2] = v; },
  },
  numOfEnemies: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
  newEnemyKillReward: {
    get: function() { return HEAP32[(this._ptr+20)>>2]; },
    set: function(v) { HEAP32[(this._ptr+20)>>2] = v; },
  },
  newEnemyDamageToPlayer: {
    get: function() { return HEAP32[(this._ptr+24)>>2]; },
    set: function(v) { HEAP32[(this._ptr+24)>>2] = v; },
  },
  enemySpeed: {
    get: function() { return HEAP32[(this._ptr+28)>>2]; },
    set: function(v) { HEAP32[(this._ptr+28)>>2] = v; },
  },
});
game.Spawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spawner is a POD type, so a JavaScript side copy constructor game.Spawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Spawner, { cid: { configurable: true, get: function() { delete game.Spawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spawner.cid = Module._ut_component_register_cid(/*game.Spawner*/ 32, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Spawner"*/, 0, 0); } } });
Object.defineProperties(game.Spawner.StorageView, { cid: { configurable: true, get: function() { return game.Spawner.cid; } } });
game.Spawner.isPaused = { $ofs:0, $t:"bool", $c:game.Spawner };
game.Spawner.time = { $ofs:4, $t:"float", $c:game.Spawner };
game.Spawner.delay = { $ofs:8, $t:"float", $c:game.Spawner };
game.Spawner.maxNumOfEnemies = { $ofs:12, $t:"int32_t", $c:game.Spawner };
game.Spawner.numOfEnemies = { $ofs:16, $t:"int32_t", $c:game.Spawner };
game.Spawner.newEnemyKillReward = { $ofs:20, $t:"int32_t", $c:game.Spawner };
game.Spawner.newEnemyDamageToPlayer = { $ofs:24, $t:"int32_t", $c:game.Spawner };
game.Spawner.enemySpeed = { $ofs:28, $t:"int32_t", $c:game.Spawner };
game.Spin = function(arg0) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
};
game.Spin.prototype = Object.create(null);
game.Spin.prototype.constructor = game.Spin;
Object.defineProperties(game.Spin.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
});
game.Spin._size = 4;
game.Spin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spin.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  return v;
};
game.Spin._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
};
game.Spin._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
};
game.Spin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Spin._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spin.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spin.StorageView.prototype = Object.create(null);
game.Spin.StorageView.prototype.constructor = game.Spin.StorageView;
game.Spin._view = game.Spin.StorageView;
game.Spin.StorageView._isSharedComp = game.Spin._isSharedComp = false;
game.Spin.StorageView._fromPtr = game.Spin._fromPtr;
game.Spin.StorageView._toPtr = game.Spin._toPtr;
game.Spin.StorageView._tempHeapPtr = game.Spin._tempHeapPtr;
game.Spin.StorageView._size = game.Spin._size;
game.Spin.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Spin.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.Spin._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spin is a POD type, so a JavaScript side copy constructor game.Spin._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Spin, { cid: { configurable: true, get: function() { delete game.Spin.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spin.cid = Module._ut_component_register_cid(/*game.Spin*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Spin"*/, 0, 0); } } });
Object.defineProperties(game.Spin.StorageView, { cid: { configurable: true, get: function() { return game.Spin.cid; } } });
game.Spin.speed = { $ofs:0, $t:"float", $c:game.Spin };
game.StrengthPotion = function(arg0) {
  this._StrengthIncrease = (arg0|0);
};
game.StrengthPotion.prototype = Object.create(null);
game.StrengthPotion.prototype.constructor = game.StrengthPotion;
Object.defineProperties(game.StrengthPotion.prototype, {
  StrengthIncrease: {
    get: function() { return this._StrengthIncrease; },
    set: function(v) { this._StrengthIncrease = (v|0); },
  },
});
game.StrengthPotion._size = 4;
game.StrengthPotion._fromPtr = function(ptr, v) {
  v = v || Object.create(game.StrengthPotion.prototype);
  v._StrengthIncrease = HEAP32[(ptr+0)>>2];
  return v;
};
game.StrengthPotion._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.StrengthIncrease;
};
game.StrengthPotion._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.StrengthIncrease;
};
game.StrengthPotion._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.StrengthPotion._toTempHeapPtr(ptr, v);
  return ptr;
};
game.StrengthPotion.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.StrengthPotion.StorageView.prototype = Object.create(null);
game.StrengthPotion.StorageView.prototype.constructor = game.StrengthPotion.StorageView;
game.StrengthPotion._view = game.StrengthPotion.StorageView;
game.StrengthPotion.StorageView._isSharedComp = game.StrengthPotion._isSharedComp = false;
game.StrengthPotion.StorageView._fromPtr = game.StrengthPotion._fromPtr;
game.StrengthPotion.StorageView._toPtr = game.StrengthPotion._toPtr;
game.StrengthPotion.StorageView._tempHeapPtr = game.StrengthPotion._tempHeapPtr;
game.StrengthPotion.StorageView._size = game.StrengthPotion._size;
game.StrengthPotion.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.StrengthPotion.StorageView.prototype, {
  StrengthIncrease: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.StrengthPotion._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.StrengthPotion is a POD type, so a JavaScript side copy constructor game.StrengthPotion._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.StrengthPotion, { cid: { configurable: true, get: function() { delete game.StrengthPotion.cid; var offsetsPtr = 0, offsetsCount = 0; return game.StrengthPotion.cid = Module._ut_component_register_cid(/*game.StrengthPotion*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::StrengthPotion"*/, 0, 0); } } });
Object.defineProperties(game.StrengthPotion.StorageView, { cid: { configurable: true, get: function() { return game.StrengthPotion.cid; } } });
game.StrengthPotion.StrengthIncrease = { $ofs:0, $t:"int32_t", $c:game.StrengthPotion };
game.Weapon = function(arg0) {
  this._damage = (arg0|0);
};
game.Weapon.prototype = Object.create(null);
game.Weapon.prototype.constructor = game.Weapon;
Object.defineProperties(game.Weapon.prototype, {
  damage: {
    get: function() { return this._damage; },
    set: function(v) { this._damage = (v|0); },
  },
});
game.Weapon._size = 4;
game.Weapon._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Weapon.prototype);
  v._damage = HEAP32[(ptr+0)>>2];
  return v;
};
game.Weapon._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.damage;
};
game.Weapon._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.damage;
};
game.Weapon._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Weapon._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Weapon.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Weapon.StorageView.prototype = Object.create(null);
game.Weapon.StorageView.prototype.constructor = game.Weapon.StorageView;
game.Weapon._view = game.Weapon.StorageView;
game.Weapon.StorageView._isSharedComp = game.Weapon._isSharedComp = false;
game.Weapon.StorageView._fromPtr = game.Weapon._fromPtr;
game.Weapon.StorageView._toPtr = game.Weapon._toPtr;
game.Weapon.StorageView._tempHeapPtr = game.Weapon._tempHeapPtr;
game.Weapon.StorageView._size = game.Weapon._size;
game.Weapon.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Weapon.StorageView.prototype, {
  damage: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.Weapon._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Weapon is a POD type, so a JavaScript side copy constructor game.Weapon._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.Weapon, { cid: { configurable: true, get: function() { delete game.Weapon.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Weapon.cid = Module._ut_component_register_cid(/*game.Weapon*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Weapon"*/, 0, 0); } } });
Object.defineProperties(game.Weapon.StorageView, { cid: { configurable: true, get: function() { return game.Weapon.cid; } } });
game.Weapon.damage = { $ofs:0, $t:"int32_t", $c:game.Weapon };
game.WeaponControl = function(arg0, arg1, arg2, arg3, arg4) {
  this._CurrentWeapon = (arg0 === undefined ? new ut.Entity : arg0);
  this._isInHand = (arg1 ? true : false);
  this._weaponInHandLocalPosition = new ut.Math.Vector3(); if ((arg2) !== undefined) { this._weaponInHandLocalPosition.copy(arg2); };
  this._weaponInHandLocalScale = new ut.Math.Vector3(); if ((arg3) !== undefined) { this._weaponInHandLocalScale.copy(arg3); };
  this._weaponInHandLocalRotation = new ut.Math.Quaternion(); if ((arg4) !== undefined) { this._weaponInHandLocalRotation.copy(arg4); };
};
game.WeaponControl.prototype = Object.create(null);
game.WeaponControl.prototype.constructor = game.WeaponControl;
Object.defineProperties(game.WeaponControl.prototype, {
  CurrentWeapon: {
    get: function() { return this._CurrentWeapon; },
    set: function(v) { this._CurrentWeapon = (v === undefined ? new ut.Entity : v); },
  },
  isInHand: {
    get: function() { return this._isInHand; },
    set: function(v) { this._isInHand = (v ? true : false); },
  },
  weaponInHandLocalPosition: {
    get: function() { return this._weaponInHandLocalPosition; },
    set: function(v) { this._weaponInHandLocalPosition.copy(v); },
  },
  weaponInHandLocalScale: {
    get: function() { return this._weaponInHandLocalScale; },
    set: function(v) { this._weaponInHandLocalScale.copy(v); },
  },
  weaponInHandLocalRotation: {
    get: function() { return this._weaponInHandLocalRotation; },
    set: function(v) { this._weaponInHandLocalRotation.copy(v); },
  },
});
game.WeaponControl._size = 52;
game.WeaponControl._fromPtr = function(ptr, v) {
  v = v || Object.create(game.WeaponControl.prototype);
  v._CurrentWeapon = ut.Entity._fromPtr(ptr+0);
  v._isInHand = (HEAP8[ptr+8]?true:false);
  v._weaponInHandLocalPosition = ut._utils.vec3FromHeap(null, ptr+12);
  v._weaponInHandLocalScale = ut._utils.vec3FromHeap(null, ptr+24);
  v._weaponInHandLocalRotation = ut._utils.quatFromHeap(null, ptr+36);
  return v;
};
game.WeaponControl._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.CurrentWeapon);
  HEAP8[ptr+8] = (v.isInHand)?1:0;
  ut._utils.vec3ToHeap(v.weaponInHandLocalPosition, ptr+12);
  ut._utils.vec3ToHeap(v.weaponInHandLocalScale, ptr+24);
  ut._utils.quatToHeap(v.weaponInHandLocalRotation, ptr+36);
};
game.WeaponControl._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.CurrentWeapon);
  HEAP8[ptr+8] = (v.isInHand)?1:0;
  ut._utils.vec3ToHeap(v.weaponInHandLocalPosition, ptr+12);
  ut._utils.vec3ToHeap(v.weaponInHandLocalScale, ptr+24);
  ut._utils.quatToHeap(v.weaponInHandLocalRotation, ptr+36);
};
game.WeaponControl._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(52);
  if (v) game.WeaponControl._toTempHeapPtr(ptr, v);
  return ptr;
};
game.WeaponControl.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.WeaponControl.StorageView.prototype = Object.create(null);
game.WeaponControl.StorageView.prototype.constructor = game.WeaponControl.StorageView;
game.WeaponControl._view = game.WeaponControl.StorageView;
game.WeaponControl.StorageView._isSharedComp = game.WeaponControl._isSharedComp = false;
game.WeaponControl.StorageView._fromPtr = game.WeaponControl._fromPtr;
game.WeaponControl.StorageView._toPtr = game.WeaponControl._toPtr;
game.WeaponControl.StorageView._tempHeapPtr = game.WeaponControl._tempHeapPtr;
game.WeaponControl.StorageView._size = game.WeaponControl._size;
game.WeaponControl.StorageView.prototype.$advance = function() {
  this._ptr += 52;
};
Object.defineProperties(game.WeaponControl.StorageView.prototype, {
  CurrentWeapon: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  isInHand: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  weaponInHandLocalPosition: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+12); },
  },
  weaponInHandLocalScale: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+24); },
  },
  weaponInHandLocalRotation: {
    get: function() { return ut._utils.quatFromHeap(null, this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.quatToHeap(v, this._ptr+36); },
  },
});
game.WeaponControl._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.WeaponControl is a POD type, so a JavaScript side copy constructor game.WeaponControl._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.WeaponControl, { cid: { configurable: true, get: function() { delete game.WeaponControl.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.WeaponControl.cid = Module._ut_component_register_cid(/*game.WeaponControl*/ 52, 4, 0, offsetsPtr, offsetsCount, 0/*"game::WeaponControl"*/, 0, 0); } } });
Object.defineProperties(game.WeaponControl.StorageView, { cid: { configurable: true, get: function() { return game.WeaponControl.cid; } } });
game.WeaponControl.CurrentWeapon = { $ofs:0, $t:"ut.Entity", $c:game.WeaponControl };
game.WeaponControl.CurrentWeapon.index = { $ofs:0, $t:"int32_t", $c:game.WeaponControl };
game.WeaponControl.CurrentWeapon.version = { $ofs:4, $t:"int32_t", $c:game.WeaponControl };
game.WeaponControl.isInHand = { $ofs:8, $t:"bool", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalPosition = { $ofs:12, $t:"ut.Math.Vector3", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalPosition.z = { $ofs:20, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalPosition.y = { $ofs:16, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalPosition.x = { $ofs:12, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalScale = { $ofs:24, $t:"ut.Math.Vector3", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalScale.z = { $ofs:32, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalScale.y = { $ofs:28, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalScale.x = { $ofs:24, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalRotation = { $ofs:36, $t:"ut.Math.Quaternion", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalRotation.w = { $ofs:48, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalRotation.z = { $ofs:44, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalRotation.y = { $ofs:40, $t:"float", $c:game.WeaponControl };
game.WeaponControl.weaponInHandLocalRotation.x = { $ofs:36, $t:"float", $c:game.WeaponControl };
game.Animation = function(arg0, arg1) {
  this._Animations = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._State = (arg1|0);
};
game.Animation.prototype = Object.create(null);
game.Animation.prototype.constructor = game.Animation;
Object.defineProperties(game.Animation.prototype, {
  Animations: {
    get: function() { return this._Animations; },
    set: function(v) { this._Animations = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
});
game.Animation._size = 16;
game.Animation._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Animation.prototype);
  v._Animations = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); });
  v._State = HEAP16[(ptr+12)>>1];
  return v;
};
game.Animation._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.Animations, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAP16[(ptr+12)>>1] = v.State;
};
game.Animation._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.Animations, ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); });
  HEAP16[(ptr+12)>>1] = v.State;
};
game.Animation._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Animation._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Animation.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Animation.StorageView.prototype = Object.create(null);
game.Animation.StorageView.prototype.constructor = game.Animation.StorageView;
game.Animation._view = game.Animation.StorageView;
game.Animation.StorageView._isSharedComp = game.Animation._isSharedComp = false;
game.Animation.StorageView._fromPtr = game.Animation._fromPtr;
game.Animation.StorageView._toPtr = game.Animation._toPtr;
game.Animation.StorageView._tempHeapPtr = game.Animation._tempHeapPtr;
game.Animation.StorageView._size = game.Animation._size;
game.Animation.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Animation.StorageView.prototype, {
  Animations: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return ut.Entity._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 8, function(p, v) { ut.Entity._toPtr(p, v); }); },
  },
  State: {
    get: function() { return HEAP16[(this._ptr+12)>>1]; },
    set: function(v) { HEAP16[(this._ptr+12)>>1] = v; },
  },
});
game.Animation._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
};
game.Animation._copyFn = function copy(src, dst) {
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 8);
  for(var i = 0; i < 2; ++i) HEAPU8[dst+12+i] = HEAPU8[src+12+i];
};
Object.defineProperties(game.Animation, { cid: { configurable: true, get: function() { delete game.Animation.cid; var offsetsPtr = ut.tempHeapPtrI32([-1]); var offsetsCount = 1; return game.Animation.cid = Module._ut_component_register_cid(/*game.Animation*/ 16, 4, 0, offsetsPtr, offsetsCount, 0/*"game::Animation"*/, ut.DestructorFn._cb.token_for(game.Animation._dtorFn), ut.CopyFn._cb.token_for(game.Animation._copyFn)); } } });
Object.defineProperties(game.Animation.StorageView, { cid: { configurable: true, get: function() { return game.Animation.cid; } } });
game.Animation.Animations = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.Animation };
game.Animation.State = { $ofs:12, $t:"int16_t", $c:game.Animation };
game.PlayOneShot = function(arg0, arg1) {
  this._Length = (+(arg0===undefined ? 0 : arg0));
  this._TimePlayed = (+(arg1===undefined ? 0 : arg1));
};
game.PlayOneShot.prototype = Object.create(null);
game.PlayOneShot.prototype.constructor = game.PlayOneShot;
Object.defineProperties(game.PlayOneShot.prototype, {
  Length: {
    get: function() { return this._Length; },
    set: function(v) { this._Length = (+(v===undefined ? 0 : v)); },
  },
  TimePlayed: {
    get: function() { return this._TimePlayed; },
    set: function(v) { this._TimePlayed = (+(v===undefined ? 0 : v)); },
  },
});
game.PlayOneShot._size = 8;
game.PlayOneShot._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayOneShot.prototype);
  v._Length = HEAPF32[(ptr+0)>>2];
  v._TimePlayed = HEAPF32[(ptr+4)>>2];
  return v;
};
game.PlayOneShot._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Length;
  HEAPF32[(ptr+4)>>2] = v.TimePlayed;
};
game.PlayOneShot._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Length;
  HEAPF32[(ptr+4)>>2] = v.TimePlayed;
};
game.PlayOneShot._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.PlayOneShot._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayOneShot.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayOneShot.StorageView.prototype = Object.create(null);
game.PlayOneShot.StorageView.prototype.constructor = game.PlayOneShot.StorageView;
game.PlayOneShot._view = game.PlayOneShot.StorageView;
game.PlayOneShot.StorageView._isSharedComp = game.PlayOneShot._isSharedComp = false;
game.PlayOneShot.StorageView._fromPtr = game.PlayOneShot._fromPtr;
game.PlayOneShot.StorageView._toPtr = game.PlayOneShot._toPtr;
game.PlayOneShot.StorageView._tempHeapPtr = game.PlayOneShot._tempHeapPtr;
game.PlayOneShot.StorageView._size = game.PlayOneShot._size;
game.PlayOneShot.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.PlayOneShot.StorageView.prototype, {
  Length: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  TimePlayed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.PlayOneShot._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayOneShot is a POD type, so a JavaScript side copy constructor game.PlayOneShot._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.PlayOneShot, { cid: { configurable: true, get: function() { delete game.PlayOneShot.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayOneShot.cid = Module._ut_component_register_cid(/*game.PlayOneShot*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::PlayOneShot"*/, 0, 0); } } });
Object.defineProperties(game.PlayOneShot.StorageView, { cid: { configurable: true, get: function() { return game.PlayOneShot.cid; } } });
game.PlayOneShot.Length = { $ofs:0, $t:"float", $c:game.PlayOneShot };
game.PlayOneShot.TimePlayed = { $ofs:4, $t:"float", $c:game.PlayOneShot };
game.ParalaxElement = function(arg0) {
  this._Speed = (+(arg0===undefined ? 0 : arg0));
};
game.ParalaxElement.prototype = Object.create(null);
game.ParalaxElement.prototype.constructor = game.ParalaxElement;
Object.defineProperties(game.ParalaxElement.prototype, {
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (+(v===undefined ? 0 : v)); },
  },
});
game.ParalaxElement._size = 4;
game.ParalaxElement._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ParalaxElement.prototype);
  v._Speed = HEAPF32[(ptr+0)>>2];
  return v;
};
game.ParalaxElement._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
};
game.ParalaxElement._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Speed;
};
game.ParalaxElement._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.ParalaxElement._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ParalaxElement.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ParalaxElement.StorageView.prototype = Object.create(null);
game.ParalaxElement.StorageView.prototype.constructor = game.ParalaxElement.StorageView;
game.ParalaxElement._view = game.ParalaxElement.StorageView;
game.ParalaxElement.StorageView._isSharedComp = game.ParalaxElement._isSharedComp = false;
game.ParalaxElement.StorageView._fromPtr = game.ParalaxElement._fromPtr;
game.ParalaxElement.StorageView._toPtr = game.ParalaxElement._toPtr;
game.ParalaxElement.StorageView._tempHeapPtr = game.ParalaxElement._tempHeapPtr;
game.ParalaxElement.StorageView._size = game.ParalaxElement._size;
game.ParalaxElement.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.ParalaxElement.StorageView.prototype, {
  Speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.ParalaxElement._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ParalaxElement is a POD type, so a JavaScript side copy constructor game.ParalaxElement._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ParalaxElement, { cid: { configurable: true, get: function() { delete game.ParalaxElement.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ParalaxElement.cid = Module._ut_component_register_cid(/*game.ParalaxElement*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::ParalaxElement"*/, 0, 0); } } });
Object.defineProperties(game.ParalaxElement.StorageView, { cid: { configurable: true, get: function() { return game.ParalaxElement.cid; } } });
game.ParalaxElement.Speed = { $ofs:0, $t:"float", $c:game.ParalaxElement };
game.HealthPotion = function(arg0) {
  this._HealthRestore = (+(arg0===undefined ? 0 : arg0));
};
game.HealthPotion.prototype = Object.create(null);
game.HealthPotion.prototype.constructor = game.HealthPotion;
Object.defineProperties(game.HealthPotion.prototype, {
  HealthRestore: {
    get: function() { return this._HealthRestore; },
    set: function(v) { this._HealthRestore = (+(v===undefined ? 0 : v)); },
  },
});
game.HealthPotion._size = 4;
game.HealthPotion._fromPtr = function(ptr, v) {
  v = v || Object.create(game.HealthPotion.prototype);
  v._HealthRestore = HEAPF32[(ptr+0)>>2];
  return v;
};
game.HealthPotion._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.HealthRestore;
};
game.HealthPotion._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.HealthRestore;
};
game.HealthPotion._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.HealthPotion._toTempHeapPtr(ptr, v);
  return ptr;
};
game.HealthPotion.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.HealthPotion.StorageView.prototype = Object.create(null);
game.HealthPotion.StorageView.prototype.constructor = game.HealthPotion.StorageView;
game.HealthPotion._view = game.HealthPotion.StorageView;
game.HealthPotion.StorageView._isSharedComp = game.HealthPotion._isSharedComp = false;
game.HealthPotion.StorageView._fromPtr = game.HealthPotion._fromPtr;
game.HealthPotion.StorageView._toPtr = game.HealthPotion._toPtr;
game.HealthPotion.StorageView._tempHeapPtr = game.HealthPotion._tempHeapPtr;
game.HealthPotion.StorageView._size = game.HealthPotion._size;
game.HealthPotion.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.HealthPotion.StorageView.prototype, {
  HealthRestore: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.HealthPotion._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.HealthPotion is a POD type, so a JavaScript side copy constructor game.HealthPotion._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.HealthPotion, { cid: { configurable: true, get: function() { delete game.HealthPotion.cid; var offsetsPtr = 0, offsetsCount = 0; return game.HealthPotion.cid = Module._ut_component_register_cid(/*game.HealthPotion*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::HealthPotion"*/, 0, 0); } } });
Object.defineProperties(game.HealthPotion.StorageView, { cid: { configurable: true, get: function() { return game.HealthPotion.cid; } } });
game.HealthPotion.HealthRestore = { $ofs:0, $t:"float", $c:game.HealthPotion };
game.ScoreGem = function(arg0) {
  this._scoreGain = (arg0|0);
};
game.ScoreGem.prototype = Object.create(null);
game.ScoreGem.prototype.constructor = game.ScoreGem;
Object.defineProperties(game.ScoreGem.prototype, {
  scoreGain: {
    get: function() { return this._scoreGain; },
    set: function(v) { this._scoreGain = (v|0); },
  },
});
game.ScoreGem._size = 2;
game.ScoreGem._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScoreGem.prototype);
  v._scoreGain = HEAP16[(ptr+0)>>1];
  return v;
};
game.ScoreGem._toPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.scoreGain;
};
game.ScoreGem._toTempHeapPtr = function(ptr, v) {
  HEAP16[(ptr+0)>>1] = v.scoreGain;
};
game.ScoreGem._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(2);
  if (v) game.ScoreGem._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScoreGem.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ScoreGem.StorageView.prototype = Object.create(null);
game.ScoreGem.StorageView.prototype.constructor = game.ScoreGem.StorageView;
game.ScoreGem._view = game.ScoreGem.StorageView;
game.ScoreGem.StorageView._isSharedComp = game.ScoreGem._isSharedComp = false;
game.ScoreGem.StorageView._fromPtr = game.ScoreGem._fromPtr;
game.ScoreGem.StorageView._toPtr = game.ScoreGem._toPtr;
game.ScoreGem.StorageView._tempHeapPtr = game.ScoreGem._tempHeapPtr;
game.ScoreGem.StorageView._size = game.ScoreGem._size;
game.ScoreGem.StorageView.prototype.$advance = function() {
  this._ptr += 2;
};
Object.defineProperties(game.ScoreGem.StorageView.prototype, {
  scoreGain: {
    get: function() { return HEAP16[(this._ptr+0)>>1]; },
    set: function(v) { HEAP16[(this._ptr+0)>>1] = v; },
  },
});
game.ScoreGem._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ScoreGem is a POD type, so a JavaScript side copy constructor game.ScoreGem._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.ScoreGem, { cid: { configurable: true, get: function() { delete game.ScoreGem.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ScoreGem.cid = Module._ut_component_register_cid(/*game.ScoreGem*/ 2, 2, 0, offsetsPtr, offsetsCount, 0/*"game::ScoreGem"*/, 0, 0); } } });
Object.defineProperties(game.ScoreGem.StorageView, { cid: { configurable: true, get: function() { return game.ScoreGem.cid; } } });
game.ScoreGem.scoreGain = { $ofs:0, $t:"int16_t", $c:game.ScoreGem };
game.GameOver = function(arg0) {
  this._TryAgainButton = (arg0 === undefined ? new ut.Entity : arg0);
};
game.GameOver.prototype = Object.create(null);
game.GameOver.prototype.constructor = game.GameOver;
Object.defineProperties(game.GameOver.prototype, {
  TryAgainButton: {
    get: function() { return this._TryAgainButton; },
    set: function(v) { this._TryAgainButton = (v === undefined ? new ut.Entity : v); },
  },
});
game.GameOver._size = 8;
game.GameOver._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameOver.prototype);
  v._TryAgainButton = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.GameOver._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.TryAgainButton);
};
game.GameOver._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.TryAgainButton);
};
game.GameOver._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.GameOver._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameOver.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameOver.StorageView.prototype = Object.create(null);
game.GameOver.StorageView.prototype.constructor = game.GameOver.StorageView;
game.GameOver._view = game.GameOver.StorageView;
game.GameOver.StorageView._isSharedComp = game.GameOver._isSharedComp = false;
game.GameOver.StorageView._fromPtr = game.GameOver._fromPtr;
game.GameOver.StorageView._toPtr = game.GameOver._toPtr;
game.GameOver.StorageView._tempHeapPtr = game.GameOver._tempHeapPtr;
game.GameOver.StorageView._size = game.GameOver._size;
game.GameOver.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.GameOver.StorageView.prototype, {
  TryAgainButton: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.GameOver._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameOver is a POD type, so a JavaScript side copy constructor game.GameOver._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.GameOver, { cid: { configurable: true, get: function() { delete game.GameOver.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.GameOver.cid = Module._ut_component_register_cid(/*game.GameOver*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::GameOver"*/, 0, 0); } } });
Object.defineProperties(game.GameOver.StorageView, { cid: { configurable: true, get: function() { return game.GameOver.cid; } } });
game.GameOver.TryAgainButton = { $ofs:0, $t:"ut.Entity", $c:game.GameOver };
game.GameOver.TryAgainButton.index = { $ofs:0, $t:"int32_t", $c:game.GameOver };
game.GameOver.TryAgainButton.version = { $ofs:4, $t:"int32_t", $c:game.GameOver };
game.MainMenu = function(arg0) {
  this._PlayButton = (arg0 === undefined ? new ut.Entity : arg0);
};
game.MainMenu.prototype = Object.create(null);
game.MainMenu.prototype.constructor = game.MainMenu;
Object.defineProperties(game.MainMenu.prototype, {
  PlayButton: {
    get: function() { return this._PlayButton; },
    set: function(v) { this._PlayButton = (v === undefined ? new ut.Entity : v); },
  },
});
game.MainMenu._size = 8;
game.MainMenu._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MainMenu.prototype);
  v._PlayButton = ut.Entity._fromPtr(ptr+0);
  return v;
};
game.MainMenu._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.PlayButton);
};
game.MainMenu._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.PlayButton);
};
game.MainMenu._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.MainMenu._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MainMenu.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MainMenu.StorageView.prototype = Object.create(null);
game.MainMenu.StorageView.prototype.constructor = game.MainMenu.StorageView;
game.MainMenu._view = game.MainMenu.StorageView;
game.MainMenu.StorageView._isSharedComp = game.MainMenu._isSharedComp = false;
game.MainMenu.StorageView._fromPtr = game.MainMenu._fromPtr;
game.MainMenu.StorageView._toPtr = game.MainMenu._toPtr;
game.MainMenu.StorageView._tempHeapPtr = game.MainMenu._tempHeapPtr;
game.MainMenu.StorageView._size = game.MainMenu._size;
game.MainMenu.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.MainMenu.StorageView.prototype, {
  PlayButton: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
});
game.MainMenu._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MainMenu is a POD type, so a JavaScript side copy constructor game.MainMenu._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.MainMenu, { cid: { configurable: true, get: function() { delete game.MainMenu.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.MainMenu.cid = Module._ut_component_register_cid(/*game.MainMenu*/ 8, 4, 0, offsetsPtr, offsetsCount, 0/*"game::MainMenu"*/, 0, 0); } } });
Object.defineProperties(game.MainMenu.StorageView, { cid: { configurable: true, get: function() { return game.MainMenu.cid; } } });
game.MainMenu.PlayButton = { $ofs:0, $t:"ut.Entity", $c:game.MainMenu };
game.MainMenu.PlayButton.index = { $ofs:0, $t:"int32_t", $c:game.MainMenu };
game.MainMenu.PlayButton.version = { $ofs:4, $t:"int32_t", $c:game.MainMenu };
game.DestroyAfterDelay = function(arg0) {
  this._delay = (+(arg0===undefined ? 0 : arg0));
};
game.DestroyAfterDelay.prototype = Object.create(null);
game.DestroyAfterDelay.prototype.constructor = game.DestroyAfterDelay;
Object.defineProperties(game.DestroyAfterDelay.prototype, {
  delay: {
    get: function() { return this._delay; },
    set: function(v) { this._delay = (+(v===undefined ? 0 : v)); },
  },
});
game.DestroyAfterDelay._size = 4;
game.DestroyAfterDelay._fromPtr = function(ptr, v) {
  v = v || Object.create(game.DestroyAfterDelay.prototype);
  v._delay = HEAPF32[(ptr+0)>>2];
  return v;
};
game.DestroyAfterDelay._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.delay;
};
game.DestroyAfterDelay._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.delay;
};
game.DestroyAfterDelay._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.DestroyAfterDelay._toTempHeapPtr(ptr, v);
  return ptr;
};
game.DestroyAfterDelay.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.DestroyAfterDelay.StorageView.prototype = Object.create(null);
game.DestroyAfterDelay.StorageView.prototype.constructor = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay._view = game.DestroyAfterDelay.StorageView;
game.DestroyAfterDelay.StorageView._isSharedComp = game.DestroyAfterDelay._isSharedComp = false;
game.DestroyAfterDelay.StorageView._fromPtr = game.DestroyAfterDelay._fromPtr;
game.DestroyAfterDelay.StorageView._toPtr = game.DestroyAfterDelay._toPtr;
game.DestroyAfterDelay.StorageView._tempHeapPtr = game.DestroyAfterDelay._tempHeapPtr;
game.DestroyAfterDelay.StorageView._size = game.DestroyAfterDelay._size;
game.DestroyAfterDelay.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.DestroyAfterDelay.StorageView.prototype, {
  delay: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.DestroyAfterDelay._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.DestroyAfterDelay is a POD type, so a JavaScript side copy constructor game.DestroyAfterDelay._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.DestroyAfterDelay, { cid: { configurable: true, get: function() { delete game.DestroyAfterDelay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyAfterDelay.cid = Module._ut_component_register_cid(/*game.DestroyAfterDelay*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"game::DestroyAfterDelay"*/, 0, 0); } } });
Object.defineProperties(game.DestroyAfterDelay.StorageView, { cid: { configurable: true, get: function() { return game.DestroyAfterDelay.cid; } } });
game.DestroyAfterDelay.delay = { $ofs:0, $t:"float", $c:game.DestroyAfterDelay };
game.GameContext = function(arg0, arg1, arg2) {
  this._score = (/*64BIT*/arg0|0);
  this._dropRate = (+(arg1===undefined ? 0 : arg1));
  this._GameState = (arg2|0);
};
game.GameContext.prototype = Object.create(null);
game.GameContext.prototype.constructor = game.GameContext;
Object.defineProperties(game.GameContext.prototype, {
  score: {
    get: function() { return this._score; },
    set: function(v) { this._score = (/*64BIT*/v|0); },
  },
  dropRate: {
    get: function() { return this._dropRate; },
    set: function(v) { this._dropRate = (+(v===undefined ? 0 : v)); },
  },
  GameState: {
    get: function() { return this._GameState; },
    set: function(v) { this._GameState = (v|0); },
  },
});
game.GameContext._size = 16;
game.GameContext._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameContext.prototype);
  v._score = (/*64BIT*/HEAP32[(ptr+0)>>2]);
  v._dropRate = HEAPF32[(ptr+8)>>2];
  v._GameState = HEAP32[(ptr+12)>>2];
  return v;
};
game.GameContext._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.score;
  HEAPF32[(ptr+8)>>2] = v.dropRate;
  HEAP32[(ptr+12)>>2] = v.GameState;
};
game.GameContext._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.score;
  HEAPF32[(ptr+8)>>2] = v.dropRate;
  HEAP32[(ptr+12)>>2] = v.GameState;
};
game.GameContext._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.GameContext._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameContext.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameContext.StorageView.prototype = Object.create(null);
game.GameContext.StorageView.prototype.constructor = game.GameContext.StorageView;
game.GameContext._view = game.GameContext.StorageView;
game.GameContext.StorageView._isSharedComp = game.GameContext._isSharedComp = false;
game.GameContext.StorageView._fromPtr = game.GameContext._fromPtr;
game.GameContext.StorageView._toPtr = game.GameContext._toPtr;
game.GameContext.StorageView._tempHeapPtr = game.GameContext._tempHeapPtr;
game.GameContext.StorageView._size = game.GameContext._size;
game.GameContext.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.GameContext.StorageView.prototype, {
  score: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+0)>>2]); },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = /*64BIT*/v; },
  },
  dropRate: {
    get: function() { return HEAPF32[(this._ptr+8)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+8)>>2] = v; },
  },
  GameState: {
    get: function() { return HEAP32[(this._ptr+12)>>2]; },
    set: function(v) { HEAP32[(this._ptr+12)>>2] = v; },
  },
});
game.GameContext._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameContext is a POD type, so a JavaScript side copy constructor game.GameContext._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.GameContext, { cid: { configurable: true, get: function() { delete game.GameContext.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameContext.cid = Module._ut_component_register_cid(/*game.GameContext*/ 16, 8, 0, offsetsPtr, offsetsCount, 0/*"game::GameContext"*/, 0, 0); } } });
Object.defineProperties(game.GameContext.StorageView, { cid: { configurable: true, get: function() { return game.GameContext.cid; } } });
game.GameContext.score = { $ofs:0, $t:"System.Int64", $c:game.GameContext };
game.GameContext.dropRate = { $ofs:8, $t:"float", $c:game.GameContext };
game.GameContext.GameState = { $ofs:12, $t:"game.GameStateType", $c:game.GameContext };
game.SoundConfiguration = function(arg0, arg1, arg2) {
  this._IsSoundOn = (arg0 ? true : false);
  this._IsMusicOn = (arg1 ? true : false);
  this._CurrentMusic = (arg2 === undefined ? '' : arg2);
};
game.SoundConfiguration.prototype = Object.create(null);
game.SoundConfiguration.prototype.constructor = game.SoundConfiguration;
Object.defineProperties(game.SoundConfiguration.prototype, {
  IsSoundOn: {
    get: function() { return this._IsSoundOn; },
    set: function(v) { this._IsSoundOn = (v ? true : false); },
  },
  IsMusicOn: {
    get: function() { return this._IsMusicOn; },
    set: function(v) { this._IsMusicOn = (v ? true : false); },
  },
  CurrentMusic: {
    get: function() { return this._CurrentMusic; },
    set: function(v) { this._CurrentMusic = (v === undefined ? '' : v); },
  },
});
game.SoundConfiguration._size = 12;
game.SoundConfiguration._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SoundConfiguration.prototype);
  v._IsSoundOn = (HEAP8[ptr+0]?true:false);
  v._IsMusicOn = (HEAP8[ptr+1]?true:false);
  v._CurrentMusic = (Module._ut_nativestring_data(ptr+4) ? UTF8ToString(Module._ut_nativestring_data(ptr+4)) : "");
  return v;
};
game.SoundConfiguration._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsSoundOn)?1:0;
  HEAP8[ptr+1] = (v.IsMusicOn)?1:0;
  ut.newHeapNativeString(ptr+4, v.CurrentMusic);
};
game.SoundConfiguration._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.IsSoundOn)?1:0;
  HEAP8[ptr+1] = (v.IsMusicOn)?1:0;
  ut.toExistingScratchNativeString(ptr+4, v.CurrentMusic);
};
game.SoundConfiguration._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.SoundConfiguration._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SoundConfiguration.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SoundConfiguration.StorageView.prototype = Object.create(null);
game.SoundConfiguration.StorageView.prototype.constructor = game.SoundConfiguration.StorageView;
game.SoundConfiguration._view = game.SoundConfiguration.StorageView;
game.SoundConfiguration.StorageView._isSharedComp = game.SoundConfiguration._isSharedComp = false;
game.SoundConfiguration.StorageView._fromPtr = game.SoundConfiguration._fromPtr;
game.SoundConfiguration.StorageView._toPtr = game.SoundConfiguration._toPtr;
game.SoundConfiguration.StorageView._tempHeapPtr = game.SoundConfiguration._tempHeapPtr;
game.SoundConfiguration.StorageView._size = game.SoundConfiguration._size;
game.SoundConfiguration.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.SoundConfiguration.StorageView.prototype, {
  IsSoundOn: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  IsMusicOn: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  CurrentMusic: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+4) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+4)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+4, v); },
  },
});
game.SoundConfiguration._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 4);
};
game.SoundConfiguration._copyFn = function copy(src, dst) {
  for(var i = 0; i < 1; ++i) HEAPU8[dst+0+i] = HEAPU8[src+0+i];
  for(var i = 0; i < 1; ++i) HEAPU8[dst+1+i] = HEAPU8[src+1+i];
  Module._ut_nativestring_copy_construct(dst + 4, src + 4);
};
Object.defineProperties(game.SoundConfiguration, { cid: { configurable: true, get: function() { delete game.SoundConfiguration.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SoundConfiguration.cid = Module._ut_component_register_cid(/*game.SoundConfiguration*/ 12, 4, 0, offsetsPtr, offsetsCount, 0/*"game::SoundConfiguration"*/, ut.DestructorFn._cb.token_for(game.SoundConfiguration._dtorFn), ut.CopyFn._cb.token_for(game.SoundConfiguration._copyFn)); } } });
Object.defineProperties(game.SoundConfiguration.StorageView, { cid: { configurable: true, get: function() { return game.SoundConfiguration.cid; } } });
game.SoundConfiguration.IsSoundOn = { $ofs:0, $t:"bool", $c:game.SoundConfiguration };
game.SoundConfiguration.IsMusicOn = { $ofs:1, $t:"bool", $c:game.SoundConfiguration };
game.SoundConfiguration.CurrentMusic = { $ofs:4, $t:"System.String", $c:game.SoundConfiguration };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Default*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Default"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.TransparentFX*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::TransparentFX"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.IgnoreRaycast*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::IgnoreRaycast"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Water*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Water"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.UI*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::UI"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.Grid = function() {
};
ut.Core2D.layers.Grid.prototype = Object.create(null);
ut.Core2D.layers.Grid.prototype.constructor = ut.Core2D.layers.Grid;
Object.defineProperties(ut.Core2D.layers.Grid.prototype, {
});
ut.Core2D.layers.Grid._size = 1;
ut.Core2D.layers.Grid._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Grid.prototype);
  return v;
};
ut.Core2D.layers.Grid._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Grid._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Grid.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Grid.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Grid.StorageView.prototype.constructor = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid._view = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid.StorageView._isSharedComp = ut.Core2D.layers.Grid._isSharedComp = false;
ut.Core2D.layers.Grid.StorageView._fromPtr = ut.Core2D.layers.Grid._fromPtr;
ut.Core2D.layers.Grid.StorageView._toPtr = ut.Core2D.layers.Grid._toPtr;
ut.Core2D.layers.Grid.StorageView._tempHeapPtr = ut.Core2D.layers.Grid._tempHeapPtr;
ut.Core2D.layers.Grid.StorageView._size = ut.Core2D.layers.Grid._size;
ut.Core2D.layers.Grid.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Grid.StorageView.prototype, {
});
ut.Core2D.layers.Grid._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Grid is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Grid._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Grid*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Grid"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Grid.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Grid.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Cutscene*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Cutscene"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.Core2D.layers.Player = function() {
};
ut.Core2D.layers.Player.prototype = Object.create(null);
ut.Core2D.layers.Player.prototype.constructor = ut.Core2D.layers.Player;
Object.defineProperties(ut.Core2D.layers.Player.prototype, {
});
ut.Core2D.layers.Player._size = 1;
ut.Core2D.layers.Player._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Player.prototype);
  return v;
};
ut.Core2D.layers.Player._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Player._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Player._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Player._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Player.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Player.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Player.StorageView.prototype.constructor = ut.Core2D.layers.Player.StorageView;
ut.Core2D.layers.Player._view = ut.Core2D.layers.Player.StorageView;
ut.Core2D.layers.Player.StorageView._isSharedComp = ut.Core2D.layers.Player._isSharedComp = false;
ut.Core2D.layers.Player.StorageView._fromPtr = ut.Core2D.layers.Player._fromPtr;
ut.Core2D.layers.Player.StorageView._toPtr = ut.Core2D.layers.Player._toPtr;
ut.Core2D.layers.Player.StorageView._tempHeapPtr = ut.Core2D.layers.Player._tempHeapPtr;
ut.Core2D.layers.Player.StorageView._size = ut.Core2D.layers.Player._size;
ut.Core2D.layers.Player.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Player.StorageView.prototype, {
});
ut.Core2D.layers.Player._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Player is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Player._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Player, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Player.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Player.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Player*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Player"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Player.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Player.cid; } } });
ut.Core2D.layers.Pickable = function() {
};
ut.Core2D.layers.Pickable.prototype = Object.create(null);
ut.Core2D.layers.Pickable.prototype.constructor = ut.Core2D.layers.Pickable;
Object.defineProperties(ut.Core2D.layers.Pickable.prototype, {
});
ut.Core2D.layers.Pickable._size = 1;
ut.Core2D.layers.Pickable._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Pickable.prototype);
  return v;
};
ut.Core2D.layers.Pickable._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Pickable._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Pickable._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Pickable._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Pickable.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Pickable.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Pickable.StorageView.prototype.constructor = ut.Core2D.layers.Pickable.StorageView;
ut.Core2D.layers.Pickable._view = ut.Core2D.layers.Pickable.StorageView;
ut.Core2D.layers.Pickable.StorageView._isSharedComp = ut.Core2D.layers.Pickable._isSharedComp = false;
ut.Core2D.layers.Pickable.StorageView._fromPtr = ut.Core2D.layers.Pickable._fromPtr;
ut.Core2D.layers.Pickable.StorageView._toPtr = ut.Core2D.layers.Pickable._toPtr;
ut.Core2D.layers.Pickable.StorageView._tempHeapPtr = ut.Core2D.layers.Pickable._tempHeapPtr;
ut.Core2D.layers.Pickable.StorageView._size = ut.Core2D.layers.Pickable._size;
ut.Core2D.layers.Pickable.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Pickable.StorageView.prototype, {
});
ut.Core2D.layers.Pickable._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Pickable is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Pickable._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Pickable, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Pickable.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Pickable.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Pickable*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Pickable"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Pickable.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Pickable.cid; } } });
ut.Core2D.layers.Enemy = function() {
};
ut.Core2D.layers.Enemy.prototype = Object.create(null);
ut.Core2D.layers.Enemy.prototype.constructor = ut.Core2D.layers.Enemy;
Object.defineProperties(ut.Core2D.layers.Enemy.prototype, {
});
ut.Core2D.layers.Enemy._size = 1;
ut.Core2D.layers.Enemy._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Enemy.prototype);
  return v;
};
ut.Core2D.layers.Enemy._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Enemy._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Enemy._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Enemy._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Enemy.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Enemy.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Enemy.StorageView.prototype.constructor = ut.Core2D.layers.Enemy.StorageView;
ut.Core2D.layers.Enemy._view = ut.Core2D.layers.Enemy.StorageView;
ut.Core2D.layers.Enemy.StorageView._isSharedComp = ut.Core2D.layers.Enemy._isSharedComp = false;
ut.Core2D.layers.Enemy.StorageView._fromPtr = ut.Core2D.layers.Enemy._fromPtr;
ut.Core2D.layers.Enemy.StorageView._toPtr = ut.Core2D.layers.Enemy._toPtr;
ut.Core2D.layers.Enemy.StorageView._tempHeapPtr = ut.Core2D.layers.Enemy._tempHeapPtr;
ut.Core2D.layers.Enemy.StorageView._size = ut.Core2D.layers.Enemy._size;
ut.Core2D.layers.Enemy.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Enemy.StorageView.prototype, {
});
ut.Core2D.layers.Enemy._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Enemy is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Enemy._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Enemy, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Enemy.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Enemy.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Enemy*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Enemy"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Enemy.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Enemy.cid; } } });
ut.Core2D.layers.Enviro = function() {
};
ut.Core2D.layers.Enviro.prototype = Object.create(null);
ut.Core2D.layers.Enviro.prototype.constructor = ut.Core2D.layers.Enviro;
Object.defineProperties(ut.Core2D.layers.Enviro.prototype, {
});
ut.Core2D.layers.Enviro._size = 1;
ut.Core2D.layers.Enviro._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Enviro.prototype);
  return v;
};
ut.Core2D.layers.Enviro._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Enviro._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Enviro._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Enviro._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Enviro.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Enviro.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Enviro.StorageView.prototype.constructor = ut.Core2D.layers.Enviro.StorageView;
ut.Core2D.layers.Enviro._view = ut.Core2D.layers.Enviro.StorageView;
ut.Core2D.layers.Enviro.StorageView._isSharedComp = ut.Core2D.layers.Enviro._isSharedComp = false;
ut.Core2D.layers.Enviro.StorageView._fromPtr = ut.Core2D.layers.Enviro._fromPtr;
ut.Core2D.layers.Enviro.StorageView._toPtr = ut.Core2D.layers.Enviro._toPtr;
ut.Core2D.layers.Enviro.StorageView._tempHeapPtr = ut.Core2D.layers.Enviro._tempHeapPtr;
ut.Core2D.layers.Enviro.StorageView._size = ut.Core2D.layers.Enviro._size;
ut.Core2D.layers.Enviro.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Enviro.StorageView.prototype, {
});
ut.Core2D.layers.Enviro._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Enviro is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Enviro._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.Core2D.layers.Enviro, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Enviro.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Enviro.cid = Module._ut_component_register_cid(/*ut.Core2D.layers.Enviro*/ 1, 0, 0, offsetsPtr, offsetsCount, 0/*"ut::Core2D::layers::Enviro"*/, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Enviro.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Enviro.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAnimationClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAnimationClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceAudioClip*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceAudioClip"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSprite*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSprite"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceSpriteAtlas*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceSpriteAtlas"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTexture2D*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTexture2D"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTileBase*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTileBase"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.AssetReferenceTMP_FontAsset*/ 24, 8, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::AssetReferenceTMP_FontAsset"*/, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.CameraCullingMask*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::CameraCullingMask"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid(/*ut.EditorExtensions.EntityLayer*/ 4, 4, 0, offsetsPtr, offsetsCount, 0/*"ut::EditorExtensions::EntityLayer"*/, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.EnemyBehavior_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.EnemyBehavior_State.prototype = Object.create(null);
game.EnemyBehavior_State.prototype.constructor = game.EnemyBehavior_State;
Object.defineProperties(game.EnemyBehavior_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.EnemyBehavior_State._size = 4;
game.EnemyBehavior_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.EnemyBehavior_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.EnemyBehavior_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.EnemyBehavior_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.EnemyBehavior_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.EnemyBehavior_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.EnemyBehavior_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.EnemyBehavior_State.StorageView.prototype = Object.create(null);
game.EnemyBehavior_State.StorageView.prototype.constructor = game.EnemyBehavior_State.StorageView;
game.EnemyBehavior_State._view = game.EnemyBehavior_State.StorageView;
game.EnemyBehavior_State.StorageView._isSharedComp = game.EnemyBehavior_State._isSharedComp = false;
game.EnemyBehavior_State.StorageView._fromPtr = game.EnemyBehavior_State._fromPtr;
game.EnemyBehavior_State.StorageView._toPtr = game.EnemyBehavior_State._toPtr;
game.EnemyBehavior_State.StorageView._tempHeapPtr = game.EnemyBehavior_State._tempHeapPtr;
game.EnemyBehavior_State.StorageView._size = game.EnemyBehavior_State._size;
game.EnemyBehavior_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.EnemyBehavior_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.EnemyBehavior_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.EnemyBehavior_State is a POD type, so a JavaScript side copy constructor game.EnemyBehavior_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
Object.defineProperties(game.EnemyBehavior_State, { cid: { configurable: true, get: function() { delete game.EnemyBehavior_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyBehavior_State.cid = Module._ut_component_register_cid(/*game.EnemyBehavior_State*/ 4, 1, 0, offsetsPtr, offsetsCount, 0/*"game::EnemyBehavior_State"*/, 0, 0); } } });
Object.defineProperties(game.EnemyBehavior_State.StorageView, { cid: { configurable: true, get: function() { return game.EnemyBehavior_State.cid; } } });
game.EnemyBehavior_State.initialized = { $ofs:0, $t:"bool", $c:game.EnemyBehavior_State };
game.EnemyBehavior_State.enabled = { $ofs:1, $t:"bool", $c:game.EnemyBehavior_State };
game.EnemyBehavior_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.EnemyBehavior_State };
game.EnemyBehavior_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.EnemyBehavior_State };
game.AimSystemJS = ut.System.define({
  name: "game.AimSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart"]
});
game.AnimationSystemJS = ut.System.define({
  name: "game.AnimationSystemJS"
});
game.AxeCollisionSystemJS = ut.System.define({
  name: "game.AxeCollisionSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart"]
});
game.CameraSystemJS = ut.System.define({
  name: "game.CameraSystemJS"
});
game.CollisionSystemJS = ut.System.define({
  name: "game.CollisionSystemJS"
});
game.DamageVignetteSystemJS = ut.System.define({
  name: "game.DamageVignetteSystemJS"
});
game.HitSystemJS = ut.System.define({
  name: "game.HitSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.AxeCollisionSystemJS"]
});
game.HealthSystemJS = ut.System.define({
  name: "game.HealthSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart","game.HitSystemJS"]
});
game.DropItemSystemJS = ut.System.define({
  name: "game.DropItemSystemJS"
});
game.StrengthPotionSystemJS = ut.System.define({
  name: "game.StrengthPotionSystemJS"
});
game.DeadSystemJS = ut.System.define({
  name: "game.DeadSystemJS"
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd","game.HealthSystemJS","game.CollisionSystemJS","game.DropItemSystemJS","game.StrengthPotionSystemJS"]
});
game.DestroySystemJS = ut.System.define({
  name: "game.DestroySystemJS"
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.FlipSystemJS = ut.System.define({
  name: "game.FlipSystemJS"
});
game.HealthBarSystemJS = ut.System.define({
  name: "game.HealthBarSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["game.HealthSystemJS"]
});
game.HealthPotionSystemJS = ut.System.define({
  name: "game.HealthPotionSystemJS"
 ,updatesBefore: ["game.DeadSystemJS"]
});
game.InputSystemJS = ut.System.define({
  name: "game.InputSystemJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});
game.MovementSystemJS = ut.System.define({
  name: "game.MovementSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart"]
});
game.ParalaxSystemJS = ut.System.define({
  name: "game.ParalaxSystemJS"
});
game.PickableHideSystemJS = ut.System.define({
  name: "game.PickableHideSystemJS"
});
game.PickableSystemJS = ut.System.define({
  name: "game.PickableSystemJS"
});
game.PlayerEnemyCollisionSystemJS = ut.System.define({
  name: "game.PlayerEnemyCollisionSystemJS"
});
game.PlayerViewFlipSystemJS = ut.System.define({
  name: "game.PlayerViewFlipSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart"]
});
game.WeaponControlSystemJS = ut.System.define({
  name: "game.WeaponControlSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart","game.AimSystemJS"]
});
game.RecallSystemJS = ut.System.define({
  name: "game.RecallSystemJS"
 ,updatesAfter: ["game.WeaponControlSystemJS"]
});
game.ScoreGemSystemJS = ut.System.define({
  name: "game.ScoreGemSystemJS"
});
game.ScoreSystemJS = ut.System.define({
  name: "game.ScoreSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.ShakeSystemJS = ut.System.define({
  name: "game.ShakeSystemJS"
});
game.SpawnSystemJS = ut.System.define({
  name: "game.SpawnSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.SpinningSystemJS = ut.System.define({
  name: "game.SpinningSystemJS"
 ,updatesBefore: ["game.AxeCollisionSystemJS","UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
ut.TimeJS = ut.System.define({
  name: "ut.TimeJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeStart"]
});
game.GameStateSystemJS = ut.System.define({
  name: "game.GameStateSystemJS"
});
game.DestroyAfterDelaySystemJS = ut.System.define({
  name: "game.DestroyAfterDelaySystemJS"
});
game.EnemyBehavior_OnEntityEnableJS = ut.System.define({
  name: "game.EnemyBehavior_OnEntityEnableJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});
game.EnemyBehavior_OnEntityUpdateJS = ut.System.define({
  name: "game.EnemyBehavior_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});



