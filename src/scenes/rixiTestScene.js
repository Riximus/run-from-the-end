import Player from "../characters/Player";

export default function rixiTestScene(k) {
    k.add([
        k.pos(0, k.height),
        k.rect(k.width, 32),
    ]);

    const player = new Player(
        100,
        100,
        250,
        500,
        1,
        false
    );
}
