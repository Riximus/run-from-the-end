import k from "./kaboomContext";
import rixiTestScene from "./scenes/rixiTestScene";
import load from "./utils/loader";

load.sprites.player()
load.levelSprites.testGround()

k.setGravity(1200)

const scenes = {
    rixiTestScene,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("rixiTestScene")
