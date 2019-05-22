/// <reference path="HealthSystem.ts"/>
namespace game {

    @ut.executeAfter(ut.Shared.UserCodeEnd)
    export class DeadSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.EnemyTag, game.Dead], (enemy, dead) => {
                if (dead.elapsedTime == 0) {
                    ScoreSystem.AddScore(this.world, enemy.killReward);
                }
            });

            this.world.forEach([game.PlayerTag, game.Dead], (player, dead) => {
                if (dead.elapsedTime == 0) {
                    GameStateLoadingService.setGameState(this.world, game.GameStateType.GameOver);
                }
            });

            this.world.forEach([ut.Entity, game.Dead], (entity, dead) => {
                if (this.world.exists(entity)) {

                    if (dead.elapsedTime == 0) {

                        if (entity.index == ut.NONE.index) {
                            console.log("I returned");
                            return;
                        }
                        let weapon = ut.Core2D.TransformService.find(this.world, entity, "Axe");
                        if (this.world.exists(weapon) && weapon.index != ut.NONE.index && this.world.hasComponent(weapon, game.Weapon)) {
                            WeaponService.DropWeapon(this.world, weapon);
                        }

                        if (this.world.hasComponent(entity, game.Animation)) {
                            AnimationSystem.PlayOneShot(this.world, entity, .86, 1);
                        }

                        if (this.world.hasComponent(entity, game.EnemyTag)) {
                            let spawnerEntity = this.world.getEntityByName("Spawner");
                            if (spawnerEntity) {
                                let spawnerConfig = this.world.getComponentData(spawnerEntity, game.Spawner);
                                spawnerConfig.numOfEnemies -= 1;
                                this.world.setComponentData(spawnerEntity, spawnerConfig);
                                console.log("Dead: numOfEnemies:", spawnerConfig.numOfEnemies);
                            }
                        }
                    }

                    if (dead.elapsedTime >= dead.dyingTime) {
                        ut.Core2D.TransformService.destroyTree(this.world, entity);
                    }
                    dead.elapsedTime += this.scheduler.deltaTime();

                }
            });
        }
    }
}