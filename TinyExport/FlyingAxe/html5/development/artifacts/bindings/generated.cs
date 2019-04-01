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

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Gameplay
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
    public struct EnemyTag : IComponentData
    {
    }
    public struct GroundTag : IComponentData
    {
    }
    public struct Health : IComponentData
    {
        public int current;
        public int max;
    }
    public struct Input : IComponentData
    {
        public float movementDir;
        public Vector3 aimDir;
        public bool weaponInteraction;
        public float heightLevel;
    }
    public struct MovementSpeed : IComponentData
    {
        public float value;
    }
    public struct PlayerTag : IComponentData
    {
    }
    public struct Recall : IComponentData
    {
        public Entity Caller;
        public float speed;
    }
    public struct Spin : IComponentData
    {
        public float speed;
        public Vector3 direction;
    }
    public struct Weapon : IComponentData
    {
    }
    public struct WeaponControl : IComponentData
    {
        public Entity CurrentWeapon;
        public bool isInHand;
        public Vector3 weaponInHandLocalPosition;
        public Vector3 weaponInHandLocalScale;
        public Quaternion weaponInHandLocalRotation;
    }
    public struct DestroyAfterDelay : IComponentData
    {
        public float delay;
    }
    [Configuration]
    public struct GameContext : IComponentData
    {
        public long score;
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
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class AxeCollisionSystemJS : IComponentSystem
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
    public class RecallSystemJS : IComponentSystem
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
