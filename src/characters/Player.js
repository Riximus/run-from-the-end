import k from "../kaboomContext";

export default class Player {
    constructor(
        posX,
        posY,
        speed,
        jumpForce,
        currentLevelScene,
        isInLastLevel
    )
    {
        this.initialPosX = posX;
        this.initialPosY = posY;
        this.speed = speed;
        this.jumpForce = jumpForce;
        this.currentLevelScene = currentLevelScene;
        this.isInLastLevel = isInLastLevel;

        this.makePlayer()
        this.previousPosY = this.gameObject.pos.y;
        this.previousPosX = this.gameObject.pos.x;
    }

    makePlayer() {
        this.gameObject = k.add([
            k.sprite("player-1-stand"),
            k.pos(this.initialPosX, this.initialPosY),
            k.area(),
            k.body(),

            // Tags
            "player",
        ]);
    }
}
