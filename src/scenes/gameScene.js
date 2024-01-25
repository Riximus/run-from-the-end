import Player from "../characters/Player";
import Enemy from "../characters/ChasingEnemy";
import Level from "../utils/Level";
import {attachCamera} from "../utils/camera";
import {basePlayerConfig} from "../levels/config";
import {baseEnemyConfig} from "../levels/config";

import { buildLevel } from "../levels/utils/levelGenerator";

export default function createScene(k) {
    const level = new Level();

    /* Level themes ('plain' is for testing) */
    const themes = ["iceAge", "desert", "aftermath", "plague"];

    /* Create level random */
    const theme = themes[Math.floor(Math.random()*themes.length)];
    const length = Math.floor(Math.random() * (5 - 2 + 1) + 2); // Random length between 2 and 5
    const difficulty = Math.floor(Math.random() * 10) + 1;

    const levelContent = buildLevel(theme, length, difficulty/10);

    level.drawBackground("bg-" + theme);
    level.drawMapLayout(levelContent.levelLayout, levelContent.levelMappings);

    const music = k.play("bg-music", {
        loop: true,
        volume: 0.3,
    });

    const player = new Player(
        basePlayerConfig,
        1,
        false
    );

    const enemy = new Enemy(baseEnemyConfig, 1);

    enemy.handleCollisionWithPlayer();

    attachCamera(player.gameObject);

    k.onSceneLeave(() => {
        music.stop();
        k.burp();
    })
}
