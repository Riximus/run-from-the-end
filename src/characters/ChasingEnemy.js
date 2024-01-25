import k from "../kaboomContext";

export default class Enemy {

    /**
     * Creates a new Enemy instance.
     * @param {Object} config - The configuration object for the enemy.
     * @param {number} config.posX - The enemy's initial X position.
     * @param {number} config.posY - The enemy's initial Y position.
     * @param {number} config.speed - The enemy's speed.
     * @param {number} currentLevelScene - The current level's scene object.
     */
    constructor(
        {
            posX,
            posY,
            speed,
        },
        currentLevelScene
    )
    {
        // Init parameters for enemy object creation
        this.initialPosX = posX;
        this.initialPosY = posY;
        this.speed = speed;
        this.currentLevelScene = currentLevelScene;

        // Init methods for enemy object
        this.makeEnemy();
        this.setEnemyMovement();
    }

    makeEnemy() {
        this.gameObject = k.add([
            k.sprite("enemy_wave"),
            k.pos(this.initialPosX, this.initialPosY),
            k.area({shape: new k.Rect(k.vec2(0, 0), k.width(), k.height()*2)}),
            k.anchor("center"),

            // Tags
            "enemy",
        ]);
        this.gameObject.width = k.width();
        this.gameObject.height = k.height()*1.5;
    }

    setEnemyMovement() {
        k.onUpdate(() => {
            this.gameObject.move(this.speed, 0); // Moving towards the left (towards the player)
        });
    }

    handleCollisionWithPlayer() {
        k.onCollide("enemy", "player", (e, p) => {
            console.log("Enemy has collided with the player!");
            // k.go("gameOverScene");
        });
    }

}
