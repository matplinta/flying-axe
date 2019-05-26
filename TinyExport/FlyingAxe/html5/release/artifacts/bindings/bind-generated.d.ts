declare namespace game {
enum EnemyType {
  Land = 0,
  Air = 1,
}
}
declare namespace game {
enum GameStateType {
  Init = 0,
  Menu = 1,
  GamePlay = 2,
  GameOver = 3,
}
}
declare namespace entities.game.AirEnemy {

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
declare namespace entities.game.Bootstrap {

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
declare namespace entities.game.GameOver {

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
declare namespace entities.game.GamePlay {

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
declare namespace entities.game.HealthPotion {

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
declare namespace entities.game.LandEnemy {

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
declare namespace entities.game.Menu {

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
declare namespace entities.game.PlayerGroup {

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
declare namespace entities.game.ScoreGem {

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
declare namespace entities.game.StrengthPotion {

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

class DamageVignette extends ut.Component {
  constructor(Duration?: number, ElapsedTime?: number);
  Duration: number;
  ElapsedTime: number;
  static readonly Duration: ComponentFieldDesc;
  static readonly ElapsedTime: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DamageVignette): DamageVignette;
  static _toPtr(p: number, v: DamageVignette): void;
  static _tempHeapPtr(v: DamageVignette): number;
  static _dtorFn(v: DamageVignette): void;
}

}
declare namespace game {

class Dead extends ut.Component {
  constructor(elapsedTime?: number, dyingTime?: number);
  elapsedTime: number;
  dyingTime: number;
  static readonly elapsedTime: ComponentFieldDesc;
  static readonly dyingTime: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Dead): Dead;
  static _toPtr(p: number, v: Dead): void;
  static _tempHeapPtr(v: Dead): number;
  static _dtorFn(v: Dead): void;
}

}
declare namespace game {

class Destroy extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Destroy): Destroy;
  static _toPtr(p: number, v: Destroy): void;
  static _tempHeapPtr(v: Destroy): number;
  static _dtorFn(v: Destroy): void;
}

}
declare namespace game {

class DropItemOnKill extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: DropItemOnKill): DropItemOnKill;
  static _toPtr(p: number, v: DropItemOnKill): void;
  static _tempHeapPtr(v: DropItemOnKill): number;
  static _dtorFn(v: DropItemOnKill): void;
}

}
declare namespace game {

class EnemyAttack extends ut.Component {
  constructor(delayBetweenAttacks?: number, lastAttackTime?: number);
  delayBetweenAttacks: number;
  lastAttackTime: number;
  static readonly delayBetweenAttacks: ComponentFieldDesc;
  static readonly lastAttackTime: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EnemyAttack): EnemyAttack;
  static _toPtr(p: number, v: EnemyAttack): void;
  static _tempHeapPtr(v: EnemyAttack): number;
  static _dtorFn(v: EnemyAttack): void;
}

}
declare namespace game {

class EnemyTag extends ut.Component {
  constructor(killReward?: number, fly?: boolean, damageToPlayer?: number);
  killReward: number;
  fly: boolean;
  damageToPlayer: number;
  static readonly killReward: ComponentFieldDesc;
  static readonly fly: ComponentFieldDesc;
  static readonly damageToPlayer: ComponentFieldDesc;
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

class FlipScale extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: FlipScale): FlipScale;
  static _toPtr(p: number, v: FlipScale): void;
  static _tempHeapPtr(v: FlipScale): number;
  static _dtorFn(v: FlipScale): void;
}

}
declare namespace game {

class GameState extends ut.Component {
  constructor(CurrentState?: GameStateType);
  CurrentState: GameStateType;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameState): GameState;
  static _toPtr(p: number, v: GameState): void;
  static _tempHeapPtr(v: GameState): number;
  static _dtorFn(v: GameState): void;
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

class HealthVisualization extends ut.Component {
  constructor(Bar?: Entity);
  Bar: Entity;
  static readonly Bar: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: HealthVisualization): HealthVisualization;
  static _toPtr(p: number, v: HealthVisualization): void;
  static _tempHeapPtr(v: HealthVisualization): number;
  static _dtorFn(v: HealthVisualization): void;
}

}
declare namespace game {

class Hit extends ut.Component {
  constructor(Damage?: number, allowImpulse?: boolean, Impulse?: Vector2, ImpulseForce?: number);
  Damage: number;
  allowImpulse: boolean;
  Impulse: Vector2;
  ImpulseForce: number;
  static readonly Damage: ComponentFieldDesc;
  static readonly allowImpulse: ComponentFieldDesc;
  static readonly Impulse: Vector2ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Hit): Hit;
  static _toPtr(p: number, v: Hit): void;
  static _tempHeapPtr(v: Hit): number;
  static _dtorFn(v: Hit): void;
}

}
declare namespace game {

class Input extends ut.Component {
  constructor(axis?: Vector2, aimDir?: Vector3, weaponInteraction?: boolean);
  axis: Vector2;
  aimDir: Vector3;
  weaponInteraction: boolean;
  static readonly axis: Vector2ComponentFieldDesc;
  static readonly aimDir: Vector3ComponentFieldDesc;
  static readonly weaponInteraction: ComponentFieldDesc;
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

class Movement extends ut.Component {
  constructor(speed?: number, direction?: Vector2, jumpForce?: number, jump?: boolean, onGround?: boolean, shouldJump?: boolean);
  speed: number;
  direction: Vector2;
  jumpForce: number;
  jump: boolean;
  onGround: boolean;
  shouldJump: boolean;
  static readonly speed: ComponentFieldDesc;
  static readonly direction: Vector2ComponentFieldDesc;
  static readonly jumpForce: ComponentFieldDesc;
  static readonly jump: ComponentFieldDesc;
  static readonly onGround: ComponentFieldDesc;
  static readonly shouldJump: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Movement): Movement;
  static _toPtr(p: number, v: Movement): void;
  static _tempHeapPtr(v: Movement): number;
  static _dtorFn(v: Movement): void;
}

}
declare namespace game {

class Pickable extends ut.Component {
  constructor(Picker?: Entity, initTime?: number, delay?: number);
  Picker: Entity;
  initTime: number;
  delay: number;
  static readonly Picker: EntityComponentFieldDesc;
  static readonly initTime: ComponentFieldDesc;
  static readonly delay: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Pickable): Pickable;
  static _toPtr(p: number, v: Pickable): void;
  static _tempHeapPtr(v: Pickable): number;
  static _dtorFn(v: Pickable): void;
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

class PlayerViewTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerViewTag): PlayerViewTag;
  static _toPtr(p: number, v: PlayerViewTag): void;
  static _tempHeapPtr(v: PlayerViewTag): number;
  static _dtorFn(v: PlayerViewTag): void;
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

class Score extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Score): Score;
  static _toPtr(p: number, v: Score): void;
  static _tempHeapPtr(v: Score): number;
  static _dtorFn(v: Score): void;
}

}
declare namespace game {

class Shake extends ut.Component {
  constructor(duration?: number, amount?: number, elapsedTime?: number, initialPosition?: Vector3);
  duration: number;
  amount: number;
  elapsedTime: number;
  initialPosition: Vector3;
  static readonly duration: ComponentFieldDesc;
  static readonly amount: ComponentFieldDesc;
  static readonly elapsedTime: ComponentFieldDesc;
  static readonly initialPosition: Vector3ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Shake): Shake;
  static _toPtr(p: number, v: Shake): void;
  static _tempHeapPtr(v: Shake): number;
  static _dtorFn(v: Shake): void;
}

}
declare namespace game {

class Spawner extends ut.Component {
  constructor(isPaused?: boolean, time?: number, delay?: number, maxNumOfEnemies?: number, numOfEnemies?: number, newEnemyKillReward?: number, newEnemyDamageToPlayer?: number, enemySpeed?: number);
  isPaused: boolean;
  time: number;
  delay: number;
  maxNumOfEnemies: number;
  numOfEnemies: number;
  newEnemyKillReward: number;
  newEnemyDamageToPlayer: number;
  enemySpeed: number;
  static readonly isPaused: ComponentFieldDesc;
  static readonly time: ComponentFieldDesc;
  static readonly delay: ComponentFieldDesc;
  static readonly maxNumOfEnemies: ComponentFieldDesc;
  static readonly numOfEnemies: ComponentFieldDesc;
  static readonly newEnemyKillReward: ComponentFieldDesc;
  static readonly newEnemyDamageToPlayer: ComponentFieldDesc;
  static readonly enemySpeed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Spawner): Spawner;
  static _toPtr(p: number, v: Spawner): void;
  static _tempHeapPtr(v: Spawner): number;
  static _dtorFn(v: Spawner): void;
}

}
declare namespace game {

class Spin extends ut.Component {
  constructor(speed?: number);
  speed: number;
  static readonly speed: ComponentFieldDesc;
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

class StrengthPotion extends ut.Component {
  constructor(StrengthIncrease?: number);
  StrengthIncrease: number;
  static readonly StrengthIncrease: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: StrengthPotion): StrengthPotion;
  static _toPtr(p: number, v: StrengthPotion): void;
  static _tempHeapPtr(v: StrengthPotion): number;
  static _dtorFn(v: StrengthPotion): void;
}

}
declare namespace game {

class Weapon extends ut.Component {
  constructor(damage?: number);
  damage: number;
  static readonly damage: ComponentFieldDesc;
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

class Animation extends ut.Component {
  constructor(Animations?: Entity[], State?: number);
  Animations: Entity[];
  State: number;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Animation): Animation;
  static _toPtr(p: number, v: Animation): void;
  static _tempHeapPtr(v: Animation): number;
  static _dtorFn(v: Animation): void;
}

}
declare namespace game {

class PlayOneShot extends ut.Component {
  constructor(Length?: number, TimePlayed?: number);
  Length: number;
  TimePlayed: number;
  static readonly Length: ComponentFieldDesc;
  static readonly TimePlayed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayOneShot): PlayOneShot;
  static _toPtr(p: number, v: PlayOneShot): void;
  static _tempHeapPtr(v: PlayOneShot): number;
  static _dtorFn(v: PlayOneShot): void;
}

}
declare namespace game {

class ParalaxElement extends ut.Component {
  constructor(Speed?: number);
  Speed: number;
  static readonly Speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ParalaxElement): ParalaxElement;
  static _toPtr(p: number, v: ParalaxElement): void;
  static _tempHeapPtr(v: ParalaxElement): number;
  static _dtorFn(v: ParalaxElement): void;
}

}
declare namespace game {

class HealthPotion extends ut.Component {
  constructor(HealthRestore?: number);
  HealthRestore: number;
  static readonly HealthRestore: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: HealthPotion): HealthPotion;
  static _toPtr(p: number, v: HealthPotion): void;
  static _tempHeapPtr(v: HealthPotion): number;
  static _dtorFn(v: HealthPotion): void;
}

}
declare namespace game {

class ScoreGem extends ut.Component {
  constructor(scoreGain?: number);
  scoreGain: number;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: ScoreGem): ScoreGem;
  static _toPtr(p: number, v: ScoreGem): void;
  static _tempHeapPtr(v: ScoreGem): number;
  static _dtorFn(v: ScoreGem): void;
}

}
declare namespace game {

class GameOver extends ut.Component {
  constructor(TryAgainButton?: Entity);
  TryAgainButton: Entity;
  static readonly TryAgainButton: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameOver): GameOver;
  static _toPtr(p: number, v: GameOver): void;
  static _tempHeapPtr(v: GameOver): number;
  static _dtorFn(v: GameOver): void;
}

}
declare namespace game {

class MainMenu extends ut.Component {
  constructor(PlayButton?: Entity);
  PlayButton: Entity;
  static readonly PlayButton: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MainMenu): MainMenu;
  static _toPtr(p: number, v: MainMenu): void;
  static _tempHeapPtr(v: MainMenu): number;
  static _dtorFn(v: MainMenu): void;
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
  constructor(score?: number, dropRate?: number, GameState?: GameStateType);
  score: number;
  dropRate: number;
  GameState: GameStateType;
  
  static readonly dropRate: ComponentFieldDesc;
  
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
declare namespace game {

class SoundConfiguration extends ut.Component {
  constructor(IsSoundOn?: boolean, IsMusicOn?: boolean, CurrentMusic?: string);
  IsSoundOn: boolean;
  IsMusicOn: boolean;
  CurrentMusic: string;
  static readonly IsSoundOn: ComponentFieldDesc;
  static readonly IsMusicOn: ComponentFieldDesc;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: SoundConfiguration): SoundConfiguration;
  static _toPtr(p: number, v: SoundConfiguration): void;
  static _tempHeapPtr(v: SoundConfiguration): number;
  static _dtorFn(v: SoundConfiguration): void;
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

class Player extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Player): Player;
  static _toPtr(p: number, v: Player): void;
  static _tempHeapPtr(v: Player): number;
  static _dtorFn(v: Player): void;
}

}
declare namespace ut.Core2D.layers {

class Pickable extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Pickable): Pickable;
  static _toPtr(p: number, v: Pickable): void;
  static _tempHeapPtr(v: Pickable): number;
  static _dtorFn(v: Pickable): void;
}

}
declare namespace ut.Core2D.layers {

class Enemy extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Enemy): Enemy;
  static _toPtr(p: number, v: Enemy): void;
  static _tempHeapPtr(v: Enemy): number;
  static _dtorFn(v: Enemy): void;
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
var AnimationSystemJS: ut.SystemJS;
}
declare namespace game {
var AxeCollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var CameraSystemJS: ut.SystemJS;
}
declare namespace game {
var CollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var DamageVignetteSystemJS: ut.SystemJS;
}
declare namespace game {
var HitSystemJS: ut.SystemJS;
}
declare namespace game {
var HealthSystemJS: ut.SystemJS;
}
declare namespace game {
var DropItemSystemJS: ut.SystemJS;
}
declare namespace game {
var StrengthPotionSystemJS: ut.SystemJS;
}
declare namespace game {
var DeadSystemJS: ut.SystemJS;
}
declare namespace game {
var DestroySystemJS: ut.SystemJS;
}
declare namespace game {
var FlipSystemJS: ut.SystemJS;
}
declare namespace game {
var HealthBarSystemJS: ut.SystemJS;
}
declare namespace game {
var HealthPotionSystemJS: ut.SystemJS;
}
declare namespace game {
var InputSystemJS: ut.SystemJS;
}
declare namespace game {
var MovementSystemJS: ut.SystemJS;
}
declare namespace game {
var ParalaxSystemJS: ut.SystemJS;
}
declare namespace game {
var PickableHideSystemJS: ut.SystemJS;
}
declare namespace game {
var PickableSystemJS: ut.SystemJS;
}
declare namespace game {
var PlayerEnemyCollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var PlayerViewFlipSystemJS: ut.SystemJS;
}
declare namespace game {
var WeaponControlSystemJS: ut.SystemJS;
}
declare namespace game {
var RecallSystemJS: ut.SystemJS;
}
declare namespace game {
var ScoreGemSystemJS: ut.SystemJS;
}
declare namespace game {
var ScoreSystemJS: ut.SystemJS;
}
declare namespace game {
var ShakeSystemJS: ut.SystemJS;
}
declare namespace game {
var SpawnSystemJS: ut.SystemJS;
}
declare namespace game {
var SpinningSystemJS: ut.SystemJS;
}
declare namespace ut {
var TimeJS: ut.SystemJS;
}
declare namespace game {
var GameStateSystemJS: ut.SystemJS;
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

