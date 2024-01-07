import Player from "../characters/Player";
import Level from "../utils/Level";
import {level1Layout, level1Mappings} from "../levels/level1/rixiTestLayout";
import {attachCamera} from "../utils/camera";
import {basePlayerConfig} from "../levels/config";

export default function rixiTestScene(k) {

    /*const grassGround = k.add([
        k.rect(1280, 50),
        k.pos(0, 670),
        k.color(0, 0, 0),
        k.area(),
        k.body({ isStatic: true }),

        // Tags
        "ground",
    ]);
*/
    /*
    const map =
        [
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "                     ",
            "====================="
        ]


    const levelConfig = {
        tileHeight: 20,
        tileWidth: 20,
        tiles: {
            '=': () => [
                k.sprite("grass-ground"),
                k.area(),
            ]
        }
    }

    const testLevel = k.addLevel(map, levelConfig);
    */

    const level1 = new Level();

    level1.drawBackground("bg");
    level1.drawMapLayout(level1Layout, level1Mappings)

    const player = new Player(
        basePlayerConfig,
        1,
        false
    );

    attachCamera(player.gameObject)

    console.log(player);
}
