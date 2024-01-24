import k from "./kaboomContext";
import load from "./utils/loader";
import startMenu from "./scenes/startMenu";
import gameScene from "./scenes/gameScene";

load.ui()
load.sprites.player()
load.levelSprites.testGround()
load.fonts.itim()

k.setGravity(1200)

const scenes = {
    startMenu,
    gameScene,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("startMenu");
