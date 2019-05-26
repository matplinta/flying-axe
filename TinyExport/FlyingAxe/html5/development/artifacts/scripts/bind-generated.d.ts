
declare namespace ut {

  /** Base class for user-defined Systems.*/
  abstract class ComponentSystem {

    /** Scheduler executing this system.*/
    readonly scheduler: ut.Scheduler;

    /** World on which this system operates on.*/
    readonly world: ut.World;

    /** Override this method to define your system update function.*/
    abstract OnUpdate():void;
  }

  type Schedulable = typeof ComponentBehaviour | typeof ComponentSystem | System | SystemJS;
  
  /** Decorator. This system will be executed after the given systems.*/
  function executeAfter(...args: Schedulable[]) : any;

  /** Decorator. This system will be executed before the given systems.*/
  function executeBefore(...args: Schedulable[]) : any;

  /** Decorator. These components are required by this system.*/
  function requiredComponents(...args: typeof Component[]) : any;

  /** Decorator. These components are optionally affected by this system.*/
  function optionalComponents(...args: typeof Component[]) : any;

  /** Classes based on EntityFilter can be used to iterate on entities.
   * 
   * This class is parsed by the Editor according to this convention:
   * - Add ut.Component fields to a filter to require them when iterating.
   * - Add the optional modifier '?' to ut.Component fields to require them if they exist.
   * - Add the 'readonly' modifier to ut.Component fields to tell the runtime this data is not modified.
   *
  */
  abstract class EntityFilter {
    /** Populates this filter from the given entity.*/
    Read(world: ut.World, entity: ut.Entity): void;
    /** Writes the contents of this filter to the given entity.*/
    Write(world: ut.World, entity: ut.Entity): void;
    /** Resets all fields to undefined.*/
    Reset(): void;
    /** Invokes the given callback for each entity matching this filter.*/
    ForEach(world: ut.World, callback: (entity: ut.Entity) => void): void;
  }

  /** Decorator. Declare that this system or behaviour may use the given EntityFilter during processing.*/
  function usingFilters(...filters: typeof EntityFilter[]) : any;

  /** Base class to define multiple systems following a familiar component lifecycle.
   * 
   * You must add an EntityFilter field to access per-entity data.
   * 
   * You must also define at least one of the following methods to get callbacks per entity matching the filter:
   * - OnEntityEnable. Called only once, the first frame this entity is matched by this behaviour.
   * - OnEntityUpdate. Called every frame on matching entities.
   * - OnEntityDisable. Called only once, the first frame this entity is marked as disabled by this behaviour.
  */
  abstract class ComponentBehaviour {
    /** Single instance for this class.*/
    static readonly Instance: ComponentBehaviour;

    readonly scheduler: ut.Scheduler;
    readonly world: ut.World;
    readonly entity: ut.Entity;

    /** Returns true if this behaviour is currently enabled on this entity.
     * Note that this method will return false if OnEnable was not called at least once.*/
    IsEnabled(world: ut.World, entity: ut.Entity): boolean;
    /** Enables this behaviour on the given entity.*/
    Enable(world: ut.World, entity: ut.Entity): void;
    /** Disables this behaviour on the given entity.*/
    Disable(world: ut.World, entity: ut.Entity): void;
  }
}
declare var UT_ASSETS: Object;
declare namespace game{
    class GameContext extends ut.Component {
        constructor();
        score: number;
        dropRate: number;
        GameState: GameStateType;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GameContext): GameContext;
        static _toPtr(p: number, v: GameContext): void;
        static _tempHeapPtr(v: GameContext): number;
        static _dtorFn(v: GameContext): void;
    }
    class SoundConfiguration extends ut.Component {
        constructor();
        IsSoundOn: boolean;
        IsMusicOn: boolean;
        CurrentMusic: string;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SoundConfiguration): SoundConfiguration;
        static _toPtr(p: number, v: SoundConfiguration): void;
        static _tempHeapPtr(v: SoundConfiguration): number;
        static _dtorFn(v: SoundConfiguration): void;
    }
    class AimSpeed extends ut.Component {
        constructor();
        value: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AimSpeed): AimSpeed;
        static _toPtr(p: number, v: AimSpeed): void;
        static _tempHeapPtr(v: AimSpeed): number;
        static _dtorFn(v: AimSpeed): void;
    }
    class Boundaries extends ut.Component {
        constructor();
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Boundaries): Boundaries;
        static _toPtr(p: number, v: Boundaries): void;
        static _tempHeapPtr(v: Boundaries): number;
        static _dtorFn(v: Boundaries): void;
    }
    class ChangeOverTime extends ut.Component {
        constructor();
        changePerSecond: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ChangeOverTime): ChangeOverTime;
        static _toPtr(p: number, v: ChangeOverTime): void;
        static _tempHeapPtr(v: ChangeOverTime): number;
        static _dtorFn(v: ChangeOverTime): void;
    }
    class DamageVignette extends ut.Component {
        constructor();
        Duration: number;
        ElapsedTime: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DamageVignette): DamageVignette;
        static _toPtr(p: number, v: DamageVignette): void;
        static _tempHeapPtr(v: DamageVignette): number;
        static _dtorFn(v: DamageVignette): void;
    }
    class Dead extends ut.Component {
        constructor();
        elapsedTime: number;
        dyingTime: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Dead): Dead;
        static _toPtr(p: number, v: Dead): void;
        static _tempHeapPtr(v: Dead): number;
        static _dtorFn(v: Dead): void;
    }
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
    class EnemyAttack extends ut.Component {
        constructor();
        delayBetweenAttacks: number;
        lastAttackTime: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: EnemyAttack): EnemyAttack;
        static _toPtr(p: number, v: EnemyAttack): void;
        static _tempHeapPtr(v: EnemyAttack): number;
        static _dtorFn(v: EnemyAttack): void;
    }
    class EnemyTag extends ut.Component {
        constructor();
        killReward: number;
        fly: boolean;
        damageToPlayer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: EnemyTag): EnemyTag;
        static _toPtr(p: number, v: EnemyTag): void;
        static _tempHeapPtr(v: EnemyTag): number;
        static _dtorFn(v: EnemyTag): void;
    }
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
    class GameState extends ut.Component {
        constructor();
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
    class Health extends ut.Component {
        constructor();
        current: number;
        max: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Health): Health;
        static _toPtr(p: number, v: Health): void;
        static _tempHeapPtr(v: Health): number;
        static _dtorFn(v: Health): void;
    }
    class HealthVisualization extends ut.Component {
        constructor();
        Bar: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: HealthVisualization): HealthVisualization;
        static _toPtr(p: number, v: HealthVisualization): void;
        static _tempHeapPtr(v: HealthVisualization): number;
        static _dtorFn(v: HealthVisualization): void;
    }
    class Hit extends ut.Component {
        constructor();
        Damage: number;
        allowImpulse: boolean;
        Impulse: ut.Math.Vector2;
        ImpulseForce: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Hit): Hit;
        static _toPtr(p: number, v: Hit): void;
        static _tempHeapPtr(v: Hit): number;
        static _dtorFn(v: Hit): void;
    }
    class Input extends ut.Component {
        constructor();
        axis: ut.Math.Vector2;
        aimDir: ut.Math.Vector3;
        weaponInteraction: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Input): Input;
        static _toPtr(p: number, v: Input): void;
        static _tempHeapPtr(v: Input): number;
        static _dtorFn(v: Input): void;
    }
    class Movement extends ut.Component {
        constructor();
        speed: number;
        direction: ut.Math.Vector2;
        jumpForce: number;
        jump: boolean;
        onGround: boolean;
        shouldJump: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Movement): Movement;
        static _toPtr(p: number, v: Movement): void;
        static _tempHeapPtr(v: Movement): number;
        static _dtorFn(v: Movement): void;
    }
    class Pickable extends ut.Component {
        constructor();
        Picker: ut.Entity;
        initTime: number;
        delay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Pickable): Pickable;
        static _toPtr(p: number, v: Pickable): void;
        static _tempHeapPtr(v: Pickable): number;
        static _dtorFn(v: Pickable): void;
    }
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
    class Recall extends ut.Component {
        constructor();
        Caller: ut.Entity;
        speed: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Recall): Recall;
        static _toPtr(p: number, v: Recall): void;
        static _tempHeapPtr(v: Recall): number;
        static _dtorFn(v: Recall): void;
    }
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
    class Shake extends ut.Component {
        constructor();
        duration: number;
        amount: number;
        elapsedTime: number;
        initialPosition: ut.Math.Vector3;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Shake): Shake;
        static _toPtr(p: number, v: Shake): void;
        static _tempHeapPtr(v: Shake): number;
        static _dtorFn(v: Shake): void;
    }
    class Spawner extends ut.Component {
        constructor();
        isPaused: boolean;
        time: number;
        delay: number;
        maxNumOfEnemies: number;
        numOfEnemies: number;
        newEnemyKillReward: number;
        newEnemyDamageToPlayer: number;
        enemySpeed: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Spawner): Spawner;
        static _toPtr(p: number, v: Spawner): void;
        static _tempHeapPtr(v: Spawner): number;
        static _dtorFn(v: Spawner): void;
    }
    class Spin extends ut.Component {
        constructor();
        speed: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Spin): Spin;
        static _toPtr(p: number, v: Spin): void;
        static _tempHeapPtr(v: Spin): number;
        static _dtorFn(v: Spin): void;
    }
    class StrengthPotion extends ut.Component {
        constructor();
        StrengthIncrease: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: StrengthPotion): StrengthPotion;
        static _toPtr(p: number, v: StrengthPotion): void;
        static _tempHeapPtr(v: StrengthPotion): number;
        static _dtorFn(v: StrengthPotion): void;
    }
    class Weapon extends ut.Component {
        constructor();
        damage: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: Weapon): Weapon;
        static _toPtr(p: number, v: Weapon): void;
        static _tempHeapPtr(v: Weapon): number;
        static _dtorFn(v: Weapon): void;
    }
    class WeaponControl extends ut.Component {
        constructor();
        CurrentWeapon: ut.Entity;
        isInHand: boolean;
        weaponInHandLocalPosition: ut.Math.Vector3;
        weaponInHandLocalScale: ut.Math.Vector3;
        weaponInHandLocalRotation: ut.Math.Quaternion;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: WeaponControl): WeaponControl;
        static _toPtr(p: number, v: WeaponControl): void;
        static _tempHeapPtr(v: WeaponControl): number;
        static _dtorFn(v: WeaponControl): void;
    }
    class Animation extends ut.Component {
        constructor();
        Animations: ut.Entity[];
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
    class PlayOneShot extends ut.Component {
        constructor();
        Length: number;
        TimePlayed: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: PlayOneShot): PlayOneShot;
        static _toPtr(p: number, v: PlayOneShot): void;
        static _tempHeapPtr(v: PlayOneShot): number;
        static _dtorFn(v: PlayOneShot): void;
    }
    class ParalaxElement extends ut.Component {
        constructor();
        Speed: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: ParalaxElement): ParalaxElement;
        static _toPtr(p: number, v: ParalaxElement): void;
        static _tempHeapPtr(v: ParalaxElement): number;
        static _dtorFn(v: ParalaxElement): void;
    }
    class HealthPotion extends ut.Component {
        constructor();
        HealthRestore: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: HealthPotion): HealthPotion;
        static _toPtr(p: number, v: HealthPotion): void;
        static _tempHeapPtr(v: HealthPotion): number;
        static _dtorFn(v: HealthPotion): void;
    }
    class ScoreGem extends ut.Component {
        constructor();
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
    class GameOver extends ut.Component {
        constructor();
        TryAgainButton: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: GameOver): GameOver;
        static _toPtr(p: number, v: GameOver): void;
        static _tempHeapPtr(v: GameOver): number;
        static _dtorFn(v: GameOver): void;
    }
    class MainMenu extends ut.Component {
        constructor();
        PlayButton: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: MainMenu): MainMenu;
        static _toPtr(p: number, v: MainMenu): void;
        static _tempHeapPtr(v: MainMenu): number;
        static _dtorFn(v: MainMenu): void;
    }
    class DestroyAfterDelay extends ut.Component {
        constructor();
        delay: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: DestroyAfterDelay): DestroyAfterDelay;
        static _toPtr(p: number, v: DestroyAfterDelay): void;
        static _tempHeapPtr(v: DestroyAfterDelay): number;
        static _dtorFn(v: DestroyAfterDelay): void;
    }
    enum EnemyType {
        Land = 0,
        Air = 1,
    }
    enum GameStateType {
        Init = 0,
        Menu = 1,
        GamePlay = 2,
        GameOver = 3,
    }
}
declare namespace ut{
}
declare namespace ut.EditorExtensions{
    class AssetReferenceAnimationClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
        static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
        static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
        static _dtorFn(v: AssetReferenceAnimationClip): void;
    }
    class AssetReferenceAudioClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
        static _toPtr(p: number, v: AssetReferenceAudioClip): void;
        static _tempHeapPtr(v: AssetReferenceAudioClip): number;
        static _dtorFn(v: AssetReferenceAudioClip): void;
    }
    class AssetReferenceSprite extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
        static _toPtr(p: number, v: AssetReferenceSprite): void;
        static _tempHeapPtr(v: AssetReferenceSprite): number;
        static _dtorFn(v: AssetReferenceSprite): void;
    }
    class AssetReferenceSpriteAtlas extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
        static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
        static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
        static _dtorFn(v: AssetReferenceSpriteAtlas): void;
    }
    class AssetReferenceTexture2D extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
        static _toPtr(p: number, v: AssetReferenceTexture2D): void;
        static _tempHeapPtr(v: AssetReferenceTexture2D): number;
        static _dtorFn(v: AssetReferenceTexture2D): void;
    }
    class AssetReferenceTileBase extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
        static _toPtr(p: number, v: AssetReferenceTileBase): void;
        static _tempHeapPtr(v: AssetReferenceTileBase): number;
        static _dtorFn(v: AssetReferenceTileBase): void;
    }
    class AssetReferenceTMP_FontAsset extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
        static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
        static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
        static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
    }
    class CameraCullingMask extends ut.Component {
        constructor();
        mask: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
        static _toPtr(p: number, v: CameraCullingMask): void;
        static _tempHeapPtr(v: CameraCullingMask): number;
        static _dtorFn(v: CameraCullingMask): void;
    }
    class EntityLayer extends ut.Component {
        constructor();
        layer: number;
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
declare namespace ut{
    class EntityGroupData extends Object{
        Component: ut.ComponentClass<any>;
        load(world: ut.World): ut.Entity[];
        name: string;
    }
    interface EntityGroups{
        [module: string]: any;
        game: {
            [data: string]: EntityGroupData;
            AirEnemy: EntityGroupData;
            Bootstrap: EntityGroupData;
            GameOver: EntityGroupData;
            GamePlay: EntityGroupData;
            HealthPotion: EntityGroupData;
            HitParticle: EntityGroupData;
            LandEnemy: EntityGroupData;
            Menu: EntityGroupData;
            PlayerGroup: EntityGroupData;
            ScoreGem: EntityGroupData;
            StrengthPotion: EntityGroupData;
        }
    }
}
declare let entities: ut.EntityGroups;
declare namespace ut.Core2D.layers{
    class Default extends ut.Component {
        static _wrap(w: number, e: number): Default;
        static readonly cid: number;
    }
    class TransparentFX extends ut.Component {
        static _wrap(w: number, e: number): TransparentFX;
        static readonly cid: number;
    }
    class IgnoreRaycast extends ut.Component {
        static _wrap(w: number, e: number): IgnoreRaycast;
        static readonly cid: number;
    }
    class Water extends ut.Component {
        static _wrap(w: number, e: number): Water;
        static readonly cid: number;
    }
    class UI extends ut.Component {
        static _wrap(w: number, e: number): UI;
        static readonly cid: number;
    }
    class Grid extends ut.Component {
        static _wrap(w: number, e: number): Grid;
        static readonly cid: number;
    }
    class Cutscene extends ut.Component {
        static _wrap(w: number, e: number): Cutscene;
        static readonly cid: number;
    }
    class Player extends ut.Component {
        static _wrap(w: number, e: number): Player;
        static readonly cid: number;
    }
    class Pickable extends ut.Component {
        static _wrap(w: number, e: number): Pickable;
        static readonly cid: number;
    }
    class Enemy extends ut.Component {
        static _wrap(w: number, e: number): Enemy;
        static readonly cid: number;
    }
    class Enviro extends ut.Component {
        static _wrap(w: number, e: number): Enviro;
        static readonly cid: number;
    }
}
