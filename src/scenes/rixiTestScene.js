export default function rixiTestScene(k) {
    k.add([
        k.pos(0, k.height),
        k.rect(k.width, 32),
    ]);

    const player1 = k.add([
        k.sprite("player-1-stand"),
        k.pos(100,100),
        k.area(),
        k.body(),
    ]);
}
