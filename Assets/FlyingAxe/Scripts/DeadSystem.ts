/// <reference path="HealthSystem.ts"/>
/// <reference path="CollisionSystem.ts"/>
/// <reference path="DropItemSystem.ts"/>
/// <reference path="StrengthPotionSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeEnd)
    @ut.executeAfter(game.HealthSystem)
    @ut.executeAfter(game.CollisionSystem)
    @ut.executeAfter(game.DropItemSystem)
    @ut.executeAfter(game.StrengthPotionSystem)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.EnemyTag, game.Dead], (enemy, dead) => {
                if (dead.elapsedTime == 0) {
                    ScoreSystem.AddScore(this.world, enemy.killReward);
                    
                    let spawnerEntity = this.world.getEntityByName("Spawner");
                    if (spawnerEntity.index != ut.NONE.index) {
                        let spawnerConfig = this.world.getComponentData(spawnerEntity, game.Spawner);
                        spawnerConfig.numOfEnemies -= 1;
                        this.world.setComponentData(spawnerEntity, spawnerConfig);
                        console.log("Dead: numOfEnemies:", spawnerConfig.numOfEnemies);
                    }
                }
            });

            this.world.forEach([game.PlayerTag, game.Dead], (player, dead) => {
                if (dead.elapsedTime == 0) {
                    GameStateLoadingService.setGameState(this.world, game.GameStateType.GameOver);
                }
            });

            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                    console.log("DEBUGGING: ", this.world.getEntityName(entity), " idx: ", entity.index);
                    
                    if (dead.elapsedTime == 0) {
                        console.log("1");
                        let weapon = ut.Core2D.TransformService.find(this.world, entity, "Axe");
                        if (this.world.exists(weapon) && weapon.index != ut.NONE.index && this.world.hasComponent(weapon, game.Weapon)) {
                            console.log("detached axe from enemy");
                            WeaponService.DropWeapon(this.world, weapon);
                        }
                        console.log("3");
                        if (this.world.hasComponent(entity, game.Animation)) {
                            console.log("4");
                            AnimationSystem.PlayOneShot(this.world, entity, .86, 1);
                        }
                    }
                    
                    console.log("5");
                    if (dead.elapsedTime < dead.dyingTime) {
                        console.log("6");
                        dead.elapsedTime += this.scheduler.deltaTime();

                    } else {
                        // console.log("destroying tree of entity", this.world.getEntityName(entity), " idx: ", entity.index);
                        // ut.Core2D.TransformService.destroyTree(this.world, entity, true);
                        this.world.setOrAddComponentData(entity, new game.Destroy());

                    }
            });
        }
    }
}