import k from "./kaboomContext";
import rixiTestScene from "./scenes/rixiTestScene";
import load from "./utils/loader";
import startMenu from "./scenes/startMenu";

load.ui()
load.sprites.player()
load.sprites.enemies.wave()
load.levelSprites.testGround()
load.fonts.itim()

k.setGravity(1200)

const scenes = {
    startMenu,
    rixiTestScene,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("startMenu");
