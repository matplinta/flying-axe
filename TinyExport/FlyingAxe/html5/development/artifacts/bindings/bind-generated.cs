using Unity.Collections.LowLevel.Unsafe;
namespace game
{
    public enum EnemyType
    {
        Land = 0,
        Air = 1,
    }
}
namespace game
{
    public enum GameStateType
    {
        Init = 0,
        Menu = 1,
        GamePlay = 2,
        GameOver = 3,
    }
}
namespace entities.game.AirEnemy
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Bootstrap
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameOver
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GamePlay
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.HealthPotion
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.HitParticle
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.LandEnemy
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Menu
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.PlayerGroup
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ScoreGem
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.StrengthPotion
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AimSpeed : UTiny.IComponentData
    {


        public float value;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Boundaries : UTiny.IComponentData
    {


        public float minX;
        public float maxX;
        public float minY;
        public float maxY;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ChangeOverTime : UTiny.IComponentData
    {


        public float changePerSecond;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DamageVignette : UTiny.IComponentData
    {


        public float Duration;
        public float ElapsedTime;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Dead : UTiny.IComponentData
    {


        public float elapsedTime;
        public float dyingTime;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Destroy : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DropItemOnKill : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EnemyAttack : UTiny.IComponentData
    {


        public float delayBetweenAttacks;
        public float lastAttackTime;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EnemyTag : UTiny.IComponentData
    {


        public int killReward;
        public bool fly;
        public float damageToPlayer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct FlipScale : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameState : UTiny.IComponentData
    {


        public game.GameStateType CurrentState;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GroundTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Health : UTiny.IComponentData
    {


        public float current;
        public float max;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct HealthVisualization : UTiny.IComponentData
    {


        public UTiny.Entity Bar;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Hit : UTiny.IComponentData
    {


        public float Damage;
        public bool allowImpulse;
        public Unity.Mathematics.float2 Impulse;
        public short ImpulseForce;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Input : UTiny.IComponentData
    {


        public Unity.Mathematics.float2 axis;
        public Unity.Mathematics.float3 aimDir;
        public bool weaponInteraction;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Movement : UTiny.IComponentData
    {


        public float speed;
        public Unity.Mathematics.float2 direction;
        public float jumpForce;
        public bool jump;
        public bool onGround;
        public bool shouldJump;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Pickable : UTiny.IComponentData
    {


        public UTiny.Entity Picker;
        public float initTime;
        public float delay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayerTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayerViewTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Recall : UTiny.IComponentData
    {


        public UTiny.Entity Caller;
        public float speed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Score : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Shake : UTiny.IComponentData
    {


        public float duration;
        public float amount;
        public float elapsedTime;
        public Unity.Mathematics.float3 initialPosition;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Spawner : UTiny.IComponentData
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
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Spin : UTiny.IComponentData
    {


        public float speed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct StrengthPotion : UTiny.IComponentData
    {


        public int StrengthIncrease;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Weapon : UTiny.IComponentData
    {


        public int damage;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct WeaponControl : UTiny.IComponentData
    {


        public UTiny.Entity CurrentWeapon;
        public bool isInHand;
        public Unity.Mathematics.float3 weaponInHandLocalPosition;
        public Unity.Mathematics.float3 weaponInHandLocalScale;
        public Unity.Mathematics.Quaternion weaponInHandLocalRotation;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Animation : UTiny.IComponentData
    {


        public UTiny.Entity[] Animations;
        public short State;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayOneShot : UTiny.IComponentData
    {


        public float Length;
        public float TimePlayed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ParalaxElement : UTiny.IComponentData
    {


        public float Speed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct HealthPotion : UTiny.IComponentData
    {


        public float HealthRestore;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScoreGem : UTiny.IComponentData
    {


        public short scoreGain;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameOver : UTiny.IComponentData
    {


        public UTiny.Entity TryAgainButton;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct MainMenu : UTiny.IComponentData
    {


        public UTiny.Entity PlayButton;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct DestroyAfterDelay : UTiny.IComponentData
    {


        public float delay;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameContext : UTiny.IComponentData
    {


        public long score;
        public float dropRate;
        public game.GameStateType GameState;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SoundConfiguration : UTiny.IComponentData
    {


        public bool IsSoundOn;
        public bool IsMusicOn;
        public string CurrentMusic;



    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Default : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TransparentFX : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct IgnoreRaycast : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Water : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct UI : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Grid : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Cutscene : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Player : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Pickable : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Enemy : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Enviro : UTiny.IComponentData
    {





    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAnimationClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAudioClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSprite : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSpriteAtlas : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTexture2D : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTileBase : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTMP_FontAsset : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraCullingMask : UTiny.IComponentData
    {


        public int mask;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EntityLayer : UTiny.IComponentData
    {


        public int layer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EnemyBehavior_State : UTiny.IComponentData
    {


        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;



    }
}



