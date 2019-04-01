/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Gameplay = entities.game.Gameplay || {};
entities.game.Gameplay.Component = function() {
};
entities.game.Gameplay.Component.prototype = Object.create(null);
entities.game.Gameplay.Component.prototype.constructor = entities.game.Gameplay.Component;
Object.defineProperties(entities.game.Gameplay.Component.prototype, {
});
entities.game.Gameplay.Component._size = 1;
entities.game.Gameplay.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Gameplay.Component.prototype);
  return v;
};
entities.game.Gameplay.Component._toPtr = function(ptr, v) {
};
entities.game.Gameplay.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Gameplay.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Gameplay.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Gameplay.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Gameplay.Component.StorageView.prototype = Object.create(null);
entities.game.Gameplay.Component.StorageView.prototype.constructor = entities.game.Gameplay.Component.StorageView;
entities.game.Gameplay.Component._view = entities.game.Gameplay.Component.StorageView;
entities.game.Gameplay.Component.StorageView._isSharedComp = entities.game.Gameplay.Component._isSharedComp = false;
entities.game.Gameplay.Component.StorageView._fromPtr = entities.game.Gameplay.Component._fromPtr;
entities.game.Gameplay.Component.StorageView._toPtr = entities.game.Gameplay.Component._toPtr;
entities.game.Gameplay.Component.StorageView._tempHeapPtr = entities.game.Gameplay.Component._tempHeapPtr;
entities.game.Gameplay.Component.StorageView._size = entities.game.Gameplay.Component._size;
entities.game.Gameplay.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Gameplay.Component.StorageView.prototype, {
});
entities.game.Gameplay.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Gameplay.Component is a POD type, so a JavaScript side copy constructor entities.game.Gameplay.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Gameplay.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Gameplay.Component', 1, []);
})();
Object.defineProperties(entities.game.Gameplay.Component, { cid: { configurable: true, get: function() { delete entities.game.Gameplay.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Gameplay.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Gameplay.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Gameplay.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Gameplay.Component.cid; } } });
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
entities.game.HitParticle.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.HitParticle.Component', 1, []);
})();
Object.defineProperties(entities.game.HitParticle.Component, { cid: { configurable: true, get: function() { delete entities.game.HitParticle.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.HitParticle.Component.cid = Module._ut_component_register_cid_with_type(entities.game.HitParticle.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.HitParticle.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.HitParticle.Component.cid; } } });
var game = game || {};
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
game.AimSpeed._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.AimSpeed', 4, [
    {name: 'value', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.AimSpeed, { cid: { configurable: true, get: function() { delete game.AimSpeed.cid; var offsetsPtr = 0, offsetsCount = 0; return game.AimSpeed.cid = Module._ut_component_register_cid_with_type(game.AimSpeed._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.Boundaries._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Boundaries', 16, [
    {name: 'minX', offset: 0, type: ut.meta.getType('float')},
    {name: 'maxX', offset: 4, type: ut.meta.getType('float')},
    {name: 'minY', offset: 8, type: ut.meta.getType('float')},
    {name: 'maxY', offset: 12, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Boundaries, { cid: { configurable: true, get: function() { delete game.Boundaries.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Boundaries.cid = Module._ut_component_register_cid_with_type(game.Boundaries._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.ChangeOverTime._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ChangeOverTime', 4, [
    {name: 'changePerSecond', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.ChangeOverTime, { cid: { configurable: true, get: function() { delete game.ChangeOverTime.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ChangeOverTime.cid = Module._ut_component_register_cid_with_type(game.ChangeOverTime._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ChangeOverTime.StorageView, { cid: { configurable: true, get: function() { return game.ChangeOverTime.cid; } } });
game.ChangeOverTime.changePerSecond = { $ofs:0, $t:"float", $c:game.ChangeOverTime };
game.EnemyTag = function() {
};
game.EnemyTag.prototype = Object.create(null);
game.EnemyTag.prototype.constructor = game.EnemyTag;
Object.defineProperties(game.EnemyTag.prototype, {
});
game.EnemyTag._size = 1;
game.EnemyTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.EnemyTag.prototype);
  return v;
};
game.EnemyTag._toPtr = function(ptr, v) {
};
game.EnemyTag._toTempHeapPtr = function(ptr, v) {
};
game.EnemyTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
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
  this._ptr += 1;
};
Object.defineProperties(game.EnemyTag.StorageView.prototype, {
});
game.EnemyTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.EnemyTag is a POD type, so a JavaScript side copy constructor game.EnemyTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.EnemyTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.EnemyTag', 1, []);
})();
Object.defineProperties(game.EnemyTag, { cid: { configurable: true, get: function() { delete game.EnemyTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyTag.cid = Module._ut_component_register_cid_with_type(game.EnemyTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.EnemyTag.StorageView, { cid: { configurable: true, get: function() { return game.EnemyTag.cid; } } });
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
game.GroundTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GroundTag', 1, []);
})();
Object.defineProperties(game.GroundTag, { cid: { configurable: true, get: function() { delete game.GroundTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GroundTag.cid = Module._ut_component_register_cid_with_type(game.GroundTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GroundTag.StorageView, { cid: { configurable: true, get: function() { return game.GroundTag.cid; } } });
game.Health = function(arg0, arg1) {
  this._current = (arg0|0);
  this._max = (arg1|0);
};
game.Health.prototype = Object.create(null);
game.Health.prototype.constructor = game.Health;
Object.defineProperties(game.Health.prototype, {
  current: {
    get: function() { return this._current; },
    set: function(v) { this._current = (v|0); },
  },
  max: {
    get: function() { return this._max; },
    set: function(v) { this._max = (v|0); },
  },
});
game.Health._size = 8;
game.Health._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Health.prototype);
  v._current = HEAP32[(ptr+0)>>2];
  v._max = HEAP32[(ptr+4)>>2];
  return v;
};
game.Health._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.current;
  HEAP32[(ptr+4)>>2] = v.max;
};
game.Health._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.current;
  HEAP32[(ptr+4)>>2] = v.max;
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
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  max: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
});
game.Health._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Health is a POD type, so a JavaScript side copy constructor game.Health._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Health._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Health', 8, [
    {name: 'current', offset: 0, type: ut.meta.getType('int32')},
    {name: 'max', offset: 4, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Health, { cid: { configurable: true, get: function() { delete game.Health.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Health.cid = Module._ut_component_register_cid_with_type(game.Health._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Health.StorageView, { cid: { configurable: true, get: function() { return game.Health.cid; } } });
game.Health.current = { $ofs:0, $t:"int32_t", $c:game.Health };
game.Health.max = { $ofs:4, $t:"int32_t", $c:game.Health };
game.Input = function(arg0, arg1, arg2, arg3) {
  this._movementDir = (+(arg0===undefined ? 0 : arg0));
  this._aimDir = new ut.Math.Vector3(); if ((arg1) !== undefined) { this._aimDir.copy(arg1); };
  this._weaponInteraction = (arg2 ? true : false);
  this._heightLevel = (+(arg3===undefined ? 0 : arg3));
};
game.Input.prototype = Object.create(null);
game.Input.prototype.constructor = game.Input;
Object.defineProperties(game.Input.prototype, {
  movementDir: {
    get: function() { return this._movementDir; },
    set: function(v) { this._movementDir = (+(v===undefined ? 0 : v)); },
  },
  aimDir: {
    get: function() { return this._aimDir; },
    set: function(v) { this._aimDir.copy(v); },
  },
  weaponInteraction: {
    get: function() { return this._weaponInteraction; },
    set: function(v) { this._weaponInteraction = (v ? true : false); },
  },
  heightLevel: {
    get: function() { return this._heightLevel; },
    set: function(v) { this._heightLevel = (+(v===undefined ? 0 : v)); },
  },
});
game.Input._size = 24;
game.Input._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Input.prototype);
  v._movementDir = HEAPF32[(ptr+0)>>2];
  v._aimDir = ut._utils.vec3FromHeap(null, ptr+4);
  v._weaponInteraction = (HEAP8[ptr+16]?true:false);
  v._heightLevel = HEAPF32[(ptr+20)>>2];
  return v;
};
game.Input._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.movementDir;
  ut._utils.vec3ToHeap(v.aimDir, ptr+4);
  HEAP8[ptr+16] = (v.weaponInteraction)?1:0;
  HEAPF32[(ptr+20)>>2] = v.heightLevel;
};
game.Input._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.movementDir;
  ut._utils.vec3ToHeap(v.aimDir, ptr+4);
  HEAP8[ptr+16] = (v.weaponInteraction)?1:0;
  HEAPF32[(ptr+20)>>2] = v.heightLevel;
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
  movementDir: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  aimDir: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+4); },
  },
  weaponInteraction: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  heightLevel: {
    get: function() { return HEAPF32[(this._ptr+20)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+20)>>2] = v; },
  },
});
game.Input._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Input is a POD type, so a JavaScript side copy constructor game.Input._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Input._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Input', 24, [
    {name: 'movementDir', offset: 0, type: ut.meta.getType('float')},
    {name: 'aimDir', offset: 4, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'weaponInteraction', offset: 16, type: ut.meta.getType('bool')},
    {name: 'heightLevel', offset: 20, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Input, { cid: { configurable: true, get: function() { delete game.Input.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Input.cid = Module._ut_component_register_cid_with_type(game.Input._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Input.StorageView, { cid: { configurable: true, get: function() { return game.Input.cid; } } });
game.Input.movementDir = { $ofs:0, $t:"float", $c:game.Input };
game.Input.aimDir = { $ofs:4, $t:"ut.Math.Vector3", $c:game.Input };
game.Input.aimDir.z = { $ofs:12, $t:"float", $c:game.Input };
game.Input.aimDir.y = { $ofs:8, $t:"float", $c:game.Input };
game.Input.aimDir.x = { $ofs:4, $t:"float", $c:game.Input };
game.Input.weaponInteraction = { $ofs:16, $t:"bool", $c:game.Input };
game.Input.heightLevel = { $ofs:20, $t:"float", $c:game.Input };
game.MovementSpeed = function(arg0) {
  this._value = (+(arg0===undefined ? 0 : arg0));
};
game.MovementSpeed.prototype = Object.create(null);
game.MovementSpeed.prototype.constructor = game.MovementSpeed;
Object.defineProperties(game.MovementSpeed.prototype, {
  value: {
    get: function() { return this._value; },
    set: function(v) { this._value = (+(v===undefined ? 0 : v)); },
  },
});
game.MovementSpeed._size = 4;
game.MovementSpeed._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MovementSpeed.prototype);
  v._value = HEAPF32[(ptr+0)>>2];
  return v;
};
game.MovementSpeed._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.value;
};
game.MovementSpeed._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.value;
};
game.MovementSpeed._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.MovementSpeed._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MovementSpeed.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MovementSpeed.StorageView.prototype = Object.create(null);
game.MovementSpeed.StorageView.prototype.constructor = game.MovementSpeed.StorageView;
game.MovementSpeed._view = game.MovementSpeed.StorageView;
game.MovementSpeed.StorageView._isSharedComp = game.MovementSpeed._isSharedComp = false;
game.MovementSpeed.StorageView._fromPtr = game.MovementSpeed._fromPtr;
game.MovementSpeed.StorageView._toPtr = game.MovementSpeed._toPtr;
game.MovementSpeed.StorageView._tempHeapPtr = game.MovementSpeed._tempHeapPtr;
game.MovementSpeed.StorageView._size = game.MovementSpeed._size;
game.MovementSpeed.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.MovementSpeed.StorageView.prototype, {
  value: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
});
game.MovementSpeed._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MovementSpeed is a POD type, so a JavaScript side copy constructor game.MovementSpeed._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MovementSpeed._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MovementSpeed', 4, [
    {name: 'value', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.MovementSpeed, { cid: { configurable: true, get: function() { delete game.MovementSpeed.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MovementSpeed.cid = Module._ut_component_register_cid_with_type(game.MovementSpeed._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MovementSpeed.StorageView, { cid: { configurable: true, get: function() { return game.MovementSpeed.cid; } } });
game.MovementSpeed.value = { $ofs:0, $t:"float", $c:game.MovementSpeed };
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
game.PlayerTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PlayerTag', 1, []);
})();
Object.defineProperties(game.PlayerTag, { cid: { configurable: true, get: function() { delete game.PlayerTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayerTag.cid = Module._ut_component_register_cid_with_type(game.PlayerTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PlayerTag.StorageView, { cid: { configurable: true, get: function() { return game.PlayerTag.cid; } } });
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
game.Recall._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Recall', 12, [
    {name: 'Caller', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'speed', offset: 8, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Recall, { cid: { configurable: true, get: function() { delete game.Recall.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.Recall.cid = Module._ut_component_register_cid_with_type(game.Recall._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Recall.StorageView, { cid: { configurable: true, get: function() { return game.Recall.cid; } } });
game.Recall.Caller = { $ofs:0, $t:"ut.Entity", $c:game.Recall };
game.Recall.Caller.index = { $ofs:0, $t:"int32_t", $c:game.Recall };
game.Recall.Caller.version = { $ofs:4, $t:"int32_t", $c:game.Recall };
game.Recall.speed = { $ofs:8, $t:"float", $c:game.Recall };
game.Spin = function(arg0, arg1) {
  this._speed = (+(arg0===undefined ? 0 : arg0));
  this._direction = new ut.Math.Vector3(); if ((arg1) !== undefined) { this._direction.copy(arg1); };
};
game.Spin.prototype = Object.create(null);
game.Spin.prototype.constructor = game.Spin;
Object.defineProperties(game.Spin.prototype, {
  speed: {
    get: function() { return this._speed; },
    set: function(v) { this._speed = (+(v===undefined ? 0 : v)); },
  },
  direction: {
    get: function() { return this._direction; },
    set: function(v) { this._direction.copy(v); },
  },
});
game.Spin._size = 16;
game.Spin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spin.prototype);
  v._speed = HEAPF32[(ptr+0)>>2];
  v._direction = ut._utils.vec3FromHeap(null, ptr+4);
  return v;
};
game.Spin._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  ut._utils.vec3ToHeap(v.direction, ptr+4);
};
game.Spin._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.speed;
  ut._utils.vec3ToHeap(v.direction, ptr+4);
};
game.Spin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
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
  this._ptr += 16;
};
Object.defineProperties(game.Spin.StorageView.prototype, {
  speed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  direction: {
    get: function() { return ut._utils.vec3FromHeap(null, this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec3ToHeap(v, this._ptr+4); },
  },
});
game.Spin._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spin is a POD type, so a JavaScript side copy constructor game.Spin._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Spin._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Spin', 16, [
    {name: 'speed', offset: 0, type: ut.meta.getType('float')},
    {name: 'direction', offset: 4, type: ut.meta.getType('ut.Math.Vector3')}
  ]);
})();
Object.defineProperties(game.Spin, { cid: { configurable: true, get: function() { delete game.Spin.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spin.cid = Module._ut_component_register_cid_with_type(game.Spin._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Spin.StorageView, { cid: { configurable: true, get: function() { return game.Spin.cid; } } });
game.Spin.speed = { $ofs:0, $t:"float", $c:game.Spin };
game.Spin.direction = { $ofs:4, $t:"ut.Math.Vector3", $c:game.Spin };
game.Spin.direction.z = { $ofs:12, $t:"float", $c:game.Spin };
game.Spin.direction.y = { $ofs:8, $t:"float", $c:game.Spin };
game.Spin.direction.x = { $ofs:4, $t:"float", $c:game.Spin };
game.Weapon = function() {
};
game.Weapon.prototype = Object.create(null);
game.Weapon.prototype.constructor = game.Weapon;
Object.defineProperties(game.Weapon.prototype, {
});
game.Weapon._size = 1;
game.Weapon._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Weapon.prototype);
  return v;
};
game.Weapon._toPtr = function(ptr, v) {
};
game.Weapon._toTempHeapPtr = function(ptr, v) {
};
game.Weapon._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
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
  this._ptr += 1;
};
Object.defineProperties(game.Weapon.StorageView.prototype, {
});
game.Weapon._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Weapon is a POD type, so a JavaScript side copy constructor game.Weapon._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Weapon._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Weapon', 1, []);
})();
Object.defineProperties(game.Weapon, { cid: { configurable: true, get: function() { delete game.Weapon.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Weapon.cid = Module._ut_component_register_cid_with_type(game.Weapon._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Weapon.StorageView, { cid: { configurable: true, get: function() { return game.Weapon.cid; } } });
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
game.WeaponControl._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.WeaponControl', 52, [
    {name: 'CurrentWeapon', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'isInHand', offset: 8, type: ut.meta.getType('bool')},
    {name: 'weaponInHandLocalPosition', offset: 12, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'weaponInHandLocalScale', offset: 24, type: ut.meta.getType('ut.Math.Vector3')},
    {name: 'weaponInHandLocalRotation', offset: 36, type: ut.meta.getType('ut.Math.Quaternion')}
  ]);
})();
Object.defineProperties(game.WeaponControl, { cid: { configurable: true, get: function() { delete game.WeaponControl.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.WeaponControl.cid = Module._ut_component_register_cid_with_type(game.WeaponControl._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.DestroyAfterDelay._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.DestroyAfterDelay', 4, [
    {name: 'delay', offset: 0, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.DestroyAfterDelay, { cid: { configurable: true, get: function() { delete game.DestroyAfterDelay.cid; var offsetsPtr = 0, offsetsCount = 0; return game.DestroyAfterDelay.cid = Module._ut_component_register_cid_with_type(game.DestroyAfterDelay._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.DestroyAfterDelay.StorageView, { cid: { configurable: true, get: function() { return game.DestroyAfterDelay.cid; } } });
game.DestroyAfterDelay.delay = { $ofs:0, $t:"float", $c:game.DestroyAfterDelay };
game.GameContext = function(arg0) {
  this._score = (/*64BIT*/arg0|0);
};
game.GameContext.prototype = Object.create(null);
game.GameContext.prototype.constructor = game.GameContext;
Object.defineProperties(game.GameContext.prototype, {
  score: {
    get: function() { return this._score; },
    set: function(v) { this._score = (/*64BIT*/v|0); },
  },
});
game.GameContext._size = 8;
game.GameContext._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameContext.prototype);
  v._score = (/*64BIT*/HEAP32[(ptr+0)>>2]);
  return v;
};
game.GameContext._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.score;
};
game.GameContext._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = /*64BIT*/v.score;
};
game.GameContext._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
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
  this._ptr += 8;
};
Object.defineProperties(game.GameContext.StorageView.prototype, {
  score: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+0)>>2]); },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = /*64BIT*/v; },
  },
});
game.GameContext._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameContext is a POD type, so a JavaScript side copy constructor game.GameContext._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameContext._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameContext', 8, [
    {name: 'score', offset: 0, type: ut.meta.getType('int64')}
  ]);
})();
Object.defineProperties(game.GameContext, { cid: { configurable: true, get: function() { delete game.GameContext.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameContext.cid = Module._ut_component_register_cid_with_type(game.GameContext._typeDesc, 8, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameContext.StorageView, { cid: { configurable: true, get: function() { return game.GameContext.cid; } } });
game.GameContext.score = { $ofs:0, $t:"System.Int64", $c:game.GameContext };
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
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.Grid._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Grid', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Grid._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
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
ut.Core2D.layers.Enviro._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Enviro', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Enviro, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Enviro.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Enviro.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Enviro._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
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
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
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
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.EnemyBehavior_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.EnemyBehavior_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.EnemyBehavior_State, { cid: { configurable: true, get: function() { delete game.EnemyBehavior_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.EnemyBehavior_State.cid = Module._ut_component_register_cid_with_type(game.EnemyBehavior_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
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
game.AxeCollisionSystemJS = ut.System.define({
  name: "game.AxeCollisionSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
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
game.RecallSystemJS = ut.System.define({
  name: "game.RecallSystemJS"
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
game.WeaponControlSystemJS = ut.System.define({
  name: "game.WeaponControlSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart","game.AimSystemJS"]
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



