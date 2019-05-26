using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.UILayout;
using UTiny.HitBox2D;
using UTiny.Physics2D;
using UTiny.Particles;
using UTiny.Interpolation;
using UTiny.Text;
using UTiny.UIControls;
using UTiny.Audio;
using UTiny.Tilemap2D;
using UTiny.Tweens;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace AirEnemy
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOver
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GamePlay
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace HealthPotion
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace HitParticle
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace LandEnemy
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Menu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PlayerGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace ScoreGem
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace StrengthPotion
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct AimSpeed : IComponentData
    {
        public float value;
    }
    public struct Boundaries : IComponentData
    {
        public float minX;
        public float maxX;
        public float minY;
        public float maxY;
    }
    public struct ChangeOverTime : IComponentData
    {
        public float changePerSecond;
    }
    public struct DamageVignette : IComponentData
    {
        public float Duration;
        public float ElapsedTime;
    }
    public struct Dead : IComponentData
    {
        public float elapsedTime;
        public float dyingTime;
    }
    public struct Destroy : IComponentData
    {
    }
    public struct DropItemOnKill : IComponentData
    {
    }
    public struct EnemyAttack : IComponentData
    {
        public float delayBetweenAttacks;
        public float lastAttackTime;
    }
    public struct EnemyTag : IComponentData
    {
        public int killReward;
        public bool fly;
        public float damageToPlayer;
    }
    public struct FlipScale : IComponentData
    {
    }
    public struct GameState : IComponentData
    {
        public game.GameStateType CurrentState;
    }
    public struct GroundTag : IComponentData
    {
    }
    public struct Health : IComponentData
    {
        public float current;
        public float max;
    }
    public struct HealthVisualization : IComponentData
    {
        public Entity Bar;
    }
    public struct Hit : IComponentData
    {
        public float Damage;
        public bool allowImpulse;
        public Vector2 Impulse;
        public short ImpulseForce;
    }
    public struct Input : IComponentData
    {
        public Vector2 axis;
        public Vector3 aimDir;
        public bool weaponInteraction;
    }
    public struct Movement : IComponentData
    {
        public float speed;
        public Vector2 direction;
        public float jumpForce;
        public bool jump;
        public bool onGround;
        public bool shouldJump;
    }
    public struct Pickable : IComponentData
    {
        public Entity Picker;
        public float initTime;
        public float delay;
    }
    public struct PlayerTag : IComponentData
    {
    }
    public struct PlayerViewTag : IComponentData
    {
    }
    public struct Recall : IComponentData
    {
        public Entity Caller;
        public float speed;
    }
    public struct Score : IComponentData
    {
    }
    public struct Shake : IComponentData
    {
        public float duration;
        public float amount;
        public float elapsedTime;
        public Vector3 initialPosition;
    }
    public struct Spawner : IComponentData
    {
        public bool isPaused;
        public float time;
        public float delay;
        public int maxNumOfEnemies;
        public int numOfEnemies;
        public int newEnemyKillReward;
        public int newEnemyDamageToPlayer;
        public int enemySpeed;
    }
    public struct Spin : IComponentData
    {
        public float speed;
    }
    public struct StrengthPotion : IComponentData
    {
        public int StrengthIncrease;
    }
    public struct Weapon : IComponentData
    {
        public int damage;
    }
    public struct WeaponControl : IComponentData
    {
        public Entity CurrentWeapon;
        public bool isInHand;
        public Vector3 weaponInHandLocalPosition;
        public Vector3 weaponInHandLocalScale;
        public Quaternion weaponInHandLocalRotation;
    }
    public struct Animation : IComponentData
    {
        public DynamicArray<Entity> Animations;
        public short State;
    }
    public struct PlayOneShot : IComponentData
    {
        public float Length;
        public float TimePlayed;
    }
    public struct ParalaxElement : IComponentData
    {
        public float Speed;
    }
    public struct HealthPotion : IComponentData
    {
        public float HealthRestore;
    }
    public struct ScoreGem : IComponentData
    {
        public short scoreGain;
    }
    public struct GameOver : IComponentData
    {
        public Entity TryAgainButton;
    }
    public struct MainMenu : IComponentData
    {
        public Entity PlayButton;
    }
    public struct DestroyAfterDelay : IComponentData
    {
        public float delay;
    }
    public enum EnemyType
    {
        Land = 0
        , Air = 1
    }
    public enum GameStateType
    {
        Init = 0
        , Menu = 1
        , GamePlay = 2
        , GameOver = 3
    }
    [Configuration]
    public struct GameContext : IComponentData
    {
        public long score;
        public float dropRate;
        public game.GameStateType GameState;
    }
    [Configuration]
    public struct SoundConfiguration : IComponentData
    {
        public bool IsSoundOn;
        public bool IsMusicOn;
        public string CurrentMusic;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct Grid : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
        public struct Player : IComponentData
        {
        }
        public struct Pickable : IComponentData
        {
        }
        public struct Enemy : IComponentData
        {
        }
        public struct Enviro : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.UILayout
{
}

namespace ut.HitBox2D
{
}

namespace ut.Physics2D
{
}

namespace ut.Particles
{
}

namespace ut.Interpolation
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UIControls
{
}

namespace ut.Audio
{
}

namespace ut.Tilemap2D
{
}

namespace ut.Tweens
{
}
namespace game
{
    public struct EnemyBehavior_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class AimSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class AnimationSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class AxeCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CameraSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DamageVignetteSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.AxeCollisionSystemJS))]
    public class HitSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.HitSystemJS))]
    public class HealthSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DropItemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class StrengthPotionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(game.HealthSystemJS))]
    [UpdateAfter(typeof(game.CollisionSystemJS))]
    [UpdateAfter(typeof(game.DropItemSystemJS))]
    [UpdateAfter(typeof(game.StrengthPotionSystemJS))]
    public class DeadSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class DestroySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class FlipSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(game.HealthSystemJS))]
    public class HealthBarSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.DeadSystemJS))]
    public class HealthPotionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class InputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class MovementSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ParalaxSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PickableHideSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PickableSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PlayerEnemyCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class PlayerViewFlipSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    [UpdateAfter(typeof(game.AimSystemJS))]
    public class WeaponControlSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(game.WeaponControlSystemJS))]
    public class RecallSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ScoreGemSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class ScoreSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ShakeSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class SpawnSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(game.AxeCollisionSystemJS))]
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class SpinningSystemJS : IComponentSystem
    {
    }
}
namespace ut
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeStart))]
    public class TimeJS : IComponentSystem
    {
    }
}
namespace game
{
    public class GameStateSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DestroyAfterDelaySystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class EnemyBehavior_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class EnemyBehavior_OnEntityUpdateJS : IComponentSystem
    {
    }
}
