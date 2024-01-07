import k from "./kaboomContext";
import rixiTestScene from "./scenes/rixiTestScene";
import load from "./loader";

load.sprites()

const scenes = {
    rixiTestScene,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("rixiTestScene")
