declare namespace entities.game.Gameplay {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.HitParticle {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class AimSpeed extends ut.Component {
  constructor(value?: number);
  value: number;
  static readonly value: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AimSpeed): AimSpeed;
  static _toPtr(p: number, v: AimSpeed): void;
  static _tempHeapPtr(v: AimSpeed): number;
  static _dtorFn(v: AimSpeed): void;
}

}
declare namespace game {

class Boundaries extends ut.Component {
  constructor(minX?: number, maxX?: number, minY?: number, maxY?: number);
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  static readonly minX: ComponentFieldDesc;
  static readonly maxX: ComponentFieldDesc;
  static readonly minY: ComponentFieldDesc;
  static readonly maxY: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Boundaries): Boundaries;
  static _toPtr(p: number, v: Boundaries): void;
  static _tempHeapPtr(v: Boundaries): number;
  static _dtorFn(v: Boundaries): void;
}

}
declare namespace game {

class ChangeOverTime extends ut.Component {
  constructor(changePerSecond?: number);
  changePerSecond: number;
  static readonly changePerSecond: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ChangeOverTime): ChangeOverTime;
  static _toPtr(p: number, v: ChangeOverTime): void;
  static _tempHeapPtr(v: ChangeOverTime): number;
  static _dtorFn(v: ChangeOverTime): void;
}

}
declare namespace game {

class EnemyTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EnemyTag): EnemyTag;
  static _toPtr(p: number, v: EnemyTag): void;
  static _tempHeapPtr(v: EnemyTag): number;
  static _dtorFn(v: EnemyTag): void;
}

}
declare namespace game {

class GroundTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GroundTag): GroundTag;
  static _toPtr(p: number, v: GroundTag): void;
  static _tempHeapPtr(v: GroundTag): number;
  static _dtorFn(v: GroundTag): void;
}

}
declare namespace game {

class Health extends ut.Component {
  constructor(current?: number, max?: number);
  current: number;
  max: number;
  static readonly current: ComponentFieldDesc;
  static readonly max: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Health): Health;
  static _toPtr(p: number, v: Health): void;
  static _tempHeapPtr(v: Health): number;
  static _dtorFn(v: Health): void;
}

}
declare namespace game {

class Input extends ut.Component {
  constructor(movementDir?: number, aimDir?: Vector3, weaponInteraction?: boolean, heightLevel?: number);
  movementDir: number;
  aimDir: Vector3;
  weaponInteraction: boolean;
  heightLevel: number;
  static readonly movementDir: ComponentFieldDesc;
  static readonly aimDir: Vector3ComponentFieldDesc;
  static readonly weaponInteraction: ComponentFieldDesc;
  static readonly heightLevel: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Input): Input;
  static _toPtr(p: number, v: Input): void;
  static _tempHeapPtr(v: Input): number;
  static _dtorFn(v: Input): void;
}

}
declare namespace game {

class MovementSpeed extends ut.Component {
  constructor(value?: number);
  value: number;
  static readonly value: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MovementSpeed): MovementSpeed;
  static _toPtr(p: number, v: MovementSpeed): void;
  static _tempHeapPtr(v: MovementSpeed): number;
  static _dtorFn(v: MovementSpeed): void;
}

}
declare namespace game {

class PlayerTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerTag): PlayerTag;
  static _toPtr(p: number, v: PlayerTag): void;
  static _tempHeapPtr(v: PlayerTag): number;
  static _dtorFn(v: PlayerTag): void;
}

}
declare namespace game {

class Recall extends ut.Component {
  constructor(Caller?: Entity, speed?: number);
  Caller: Entity;
  speed: number;
  static readonly Caller: EntityComponentFieldDesc;
  static readonly speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Recall): Recall;
  static _toPtr(p: number, v: Recall): void;
  static _tempHeapPtr(v: Recall): number;
  static _dtorFn(v: Recall): void;
}

}
declare namespace game {

class Spin extends ut.Component {
  constructor(speed?: number, direction?: Vector3);
  speed: number;
  direction: Vector3;
  static readonly speed: ComponentFieldDesc;
  static readonly direction: Vector3ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Spin): Spin;
  static _toPtr(p: number, v: Spin): void;
  static _tempHeapPtr(v: Spin): number;
  static _dtorFn(v: Spin): void;
}

}
declare namespace game {

class Weapon extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Weapon): Weapon;
  static _toPtr(p: number, v: Weapon): void;
  static _tempHeapPtr(v: Weapon): number;
  static _dtorFn(v: Weapon): void;
}

}
declare namespace game {

class WeaponControl extends ut.Component {
  constructor(CurrentWeapon?: Entity, isInHand?: boolean, weaponInHandLocalPosition?: Vector3, weaponInHandLocalScale?: Vector3, weaponInHandLocalRotation?: Quaternion);
  CurrentWeapon: Entity;
  isInHand: boolean;
  weaponInHandLocalPosition: Vector3;
  weaponInHandLocalScale: Vector3;
  weaponInHandLocalRotation: Quaternion;
  static readonly CurrentWeapon: EntityComponentFieldDesc;
  static readonly isInHand: ComponentFieldDesc;
  static readonly weaponInHandLocalPosition: Vector3ComponentFieldDesc;
  static readonly weaponInHandLocalScale: Vector3ComponentFieldDesc;
  static readonly weaponInHandLocalRotation: QuaternionComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: WeaponControl): WeaponControl;
  static _toPtr(p: number, v: WeaponControl): void;
  static _tempHeapPtr(v: WeaponControl): number;
  static _dtorFn(v: WeaponControl): void;
}

}
declare namespace game {

class DestroyAfterDelay extends ut.Component {
  constructor(delay?: number);
  delay: number;
  static readonly delay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DestroyAfterDelay): DestroyAfterDelay;
  static _toPtr(p: number, v: DestroyAfterDelay): void;
  static _tempHeapPtr(v: DestroyAfterDelay): number;
  static _dtorFn(v: DestroyAfterDelay): void;
}

}
declare namespace game {

class GameContext extends ut.Component {
  constructor(score?: number);
  score: number;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameContext): GameContext;
  static _toPtr(p: number, v: GameContext): void;
  static _tempHeapPtr(v: GameContext): number;
  static _dtorFn(v: GameContext): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.Core2D.layers {

class Grid extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Grid): Grid;
  static _toPtr(p: number, v: Grid): void;
  static _tempHeapPtr(v: Grid): number;
  static _dtorFn(v: Grid): void;
}

}
declare namespace ut.Core2D.layers {

class Cutscene extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cutscene): Cutscene;
  static _toPtr(p: number, v: Cutscene): void;
  static _tempHeapPtr(v: Cutscene): number;
  static _dtorFn(v: Cutscene): void;
}

}
declare namespace ut.Core2D.layers {

class Enviro extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Enviro): Enviro;
  static _toPtr(p: number, v: Enviro): void;
  static _tempHeapPtr(v: Enviro): number;
  static _dtorFn(v: Enviro): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {

class EnemyBehavior_State extends ut.Component {
  constructor(initialized?: boolean, enabled?: boolean, onEnableCalled?: boolean, onDisableCalled?: boolean);
  initialized: boolean;
  enabled: boolean;
  onEnableCalled: boolean;
  onDisableCalled: boolean;
  static readonly initialized: ComponentFieldDesc;
  static readonly enabled: ComponentFieldDesc;
  static readonly onEnableCalled: ComponentFieldDesc;
  static readonly onDisableCalled: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EnemyBehavior_State): EnemyBehavior_State;
  static _toPtr(p: number, v: EnemyBehavior_State): void;
  static _tempHeapPtr(v: EnemyBehavior_State): number;
  static _dtorFn(v: EnemyBehavior_State): void;
}

}
declare namespace game {
var AimSystemJS: ut.SystemJS;
}
declare namespace game {
var AxeCollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var InputSystemJS: ut.SystemJS;
}
declare namespace game {
var MovementSystemJS: ut.SystemJS;
}
declare namespace game {
var RecallSystemJS: ut.SystemJS;
}
declare namespace game {
var SpinningSystemJS: ut.SystemJS;
}
declare namespace ut {
var TimeJS: ut.SystemJS;
}
declare namespace game {
var WeaponControlSystemJS: ut.SystemJS;
}
declare namespace game {
var DestroyAfterDelaySystemJS: ut.SystemJS;
}
declare namespace game {
var EnemyBehavior_OnEntityEnableJS: ut.SystemJS;
}
declare namespace game {
var EnemyBehavior_OnEntityUpdateJS: ut.SystemJS;
}


declare namespace Module {

}

