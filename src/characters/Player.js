import k from "../kaboomContext";

export class Player {
    constructor(
        position,
        speed,
        jumpForce,
        currentLevelScene,
        isInLastLevel
    )
    {
        this.position = position;
        this.speed = speed;
        this.jumpForce = jumpForce;
        this.currentLevelScene = currentLevelScene;
        this.isInLastLevel = isInLastLevel;
    }

    makePlayer(position) {
        this.gameObject = k.add([
            k.sprite("player-1-stand"),
            k.pos(position),
            k.area(),
            k.body(),
        ]);
    }
}
