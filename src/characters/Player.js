import k from "../kaboomContext";

export default class Player {

    /**
     * Creates a new Player instance.
     * @param {Object} config - The configuration object for the player.
     * @param {number} config.posX - The player's initial X position.
     * @param {number} config.posY - The player's initial Y position.
     * @param {number} config.speed - The player's speed.
     * @param {number} config.jumpForce - The player's jump force.
     * @param {number} currentLevelScene - The current level's scene object.
     * @param {boolean} isInLastLevel - Flag to indicate if the player is in the last level.
     */
    constructor(
        {
            posX,
            posY,
            speed,
            jumpForce,
        },
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
        this.infiniteMovement()

        // Init parameters for player object movement and animation control
        // TODO: do something with these parameters
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

        console.log(this.gameObject)
    }

    setPlayerControls() {
        // TODO: add animations
        // TODO: speed for braking and acceleration can be changed
        k.onKeyDown("left", () => {
            this.gameObject.move(-this.speed/2, 0);
            this.gameObject.flipX = true;
        })

        k.onKeyDown("a", () => {
            this.gameObject.move(-this.speed/2, 0);
            this.gameObject.flipX = true;
        })

        k.onKeyDown("right", () => {
            this.gameObject.move((this.speed+this.speed/2), 0);
            this.gameObject.flipX = false;
        })

        k.onKeyDown("d", () => {
            this.gameObject.move((this.speed+this.speed/2), 0);
            this.gameObject.flipX = false;
        })

        k.onKeyDown("up", () => {
            console.log(this.gameObject.isGrounded)
            if (this.gameObject.isGrounded()) {
                this.gameObject.jump(this.jumpForce);
            }
        })

        k.onKeyDown("space", () => {
            if (this.gameObject.isGrounded()) {
                this.gameObject.jump(this.jumpForce);
            }
        })

        k.onKeyDown("w", () => {
            if (this.gameObject.isGrounded()) {
                this.gameObject.jump(this.jumpForce);
            }
        })
    }

    infiniteMovement() {
        k.onUpdate(() => {
            this.gameObject.move(this.speed, 0)
        })
    }
}
