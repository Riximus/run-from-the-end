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
        // Init parameters for player object creation
        this.initialPosX = posX;
        this.initialPosY = posY;
        this.speed = speed;
        this.jumpForce = jumpForce;
        this.currentLevelScene = currentLevelScene;
        this.isInLastLevel = isInLastLevel;

        // Init methods for player object
        this.makePlayer()
        this.setPlayerControls()
        this.infinteMovement()

        // Init parameters for player object movement and animation control
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

    setPlayerControls() {
        // TODO: add animations
        k.onKeyDown("left", () => {
            this.gameObject.move(-this.speed, 0);
            this.gameObject.flipX = true;
        })

        k.onKeyDown("right", () => {
            this.gameObject.move(this.speed, 0);
            this.gameObject.flipX = false;
        })

        k.onKeyDown("space", () => {
            if (this.gameObject.isGrounded) {
                this.gameObject.jump(this.jumpForce);
            }
        })

        k.onKeyDown("up", () => {
            console.log(this.gameObject.isGrounded)
            if (this.gameObject.isGrounded) {
                this.gameObject.jump(this.jumpForce);
                console.log("jump");
            }
            else {
                this.gameObject.move(0, -this.speed);
                console.log("climb");
            }
        })
    }

    infinteMovement() {
        k.onUpdate(() => {
            this.gameObject.move(this.speed, 0)
        })
    }
}
