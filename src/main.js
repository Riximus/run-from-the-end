import k from "./kaboomContext";
import load from "./utils/loader";
import startMenu from "./scenes/startMenu";
import gameScene from "./scenes/gameScene";
import gameOverScreen from "./scenes/gameOverScreen";
import gameWinScreen from "./scenes/gameWinScreen";

load.ui()
load.sprites.player()
load.sprites.enemies.wave()
load.levelSprites.testGround()
load.fonts.itim()

k.setGravity(1200)

const scenes = {
    startMenu,
    gameOverScreen,
    gameWinScreen,
    gameScene,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("gameWinScreen");
