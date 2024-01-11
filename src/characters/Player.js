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
            k.sprite("p1_movement", {anim: "walk"}),
            k.pos(this.initialPosX, this.initialPosY),
            k.area({shape: new k.Rect(k.vec2(22, 20), 45, 80)}),
            k.body(),

            // Tags
            "player",
        ]);

        console.log(this.gameObject)
    }

    setPlayerControls() {
        const moveLeft = () => {
            if(this.gameObject.curAnim() !== "walk") {
                this.gameObject.play("walk");
            }
            this.gameObject.move(-this.speed / 2, 0);
            this.gameObject.flipX = true;
        };

        const moveRight = () => {
            if(this.gameObject.curAnim() !== "walk") {
                this.gameObject.play("walk");
            }
            this.gameObject.move(this.speed + this.speed / 2, 0);
            this.gameObject.flipX = false;
        };

        const jump = () => {
            if (this.gameObject.isGrounded()) {
                this.gameObject.jump(this.jumpForce);
                this.gameObject.play("jump");
            }
        };

        const duck = () => {
            this.gameObject.play("duck");
            this.gameObject.area.shape.height = 55;
        };

        // Left movement
        k.onKeyDown("left", moveLeft);
        k.onKeyDown("a", moveLeft);

        // Right movement
        k.onKeyDown("right", moveRight);
        k.onKeyDown("d", moveRight);

        // Jumping
        k.onKeyDown("up", jump);
        k.onKeyDown("w", jump);
        k.onKeyDown("space", jump);

        // Ducking
        k.onKeyDown("down", duck);
        k.onKeyDown("s", duck);

        k.onKeyRelease(() => {
            if (k.isKeyReleased("down") || k.isKeyReleased("s")) {
                this.gameObject.area.shape.height = 80;
                // Play the appropriate animation when the player stands up
                if (this.gameObject.isGrounded()) {
                    this.gameObject.play("walk");
                }
            }
        });
    }

    infiniteMovement() {
        k.onUpdate(() => {
            this.gameObject.move(this.speed, 0)

            // Check if the player is not ducking and is grounded before playing walk animation
            if (this.gameObject.curAnim() !== "walk" && this.gameObject.isGrounded() && this.gameObject.area.shape.height === 80) {
                this.gameObject.play("walk");
            }
        })
    }
}
