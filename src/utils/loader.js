import k from "../kaboomContext";

const load = {
    sprites: {
        player: ()  => {
            // TODO: Load a spriteatlas or player sprite instead of individual sprites?
            k.loadSprite("player-1-stand", "sprites/player/p1/p1_stand.png")
            for (const [animName, animFile] of Object.entries(p1Animations)) {
                k.loadSprite(animName, `sprites/player/p1/${animFile}`);
            }
        }
    },
    levelSprites: {
        testGround: () => {
            k.loadSprite("grass-ground", "sprites/levels/grass-ground.png")
            k.loadSprite("bg", "sprites/levels/bg.png")
        }
    }
}

export default load;

// Animations ---------------------------------------------------------------
// Player 1
const p1Animations = {
    "p1_stand": "p1_stand.png",
    "p1_duck": "p1_duck.png",
    "p1_front": "p1_front.png",
    "p1_hurt": "p1_hurt.png",
    "p1_jump": "p1_jump.png",
    "p1_walk01": "p1_walk/p1_walk01.png",
    "p1_walk02": "p1_walk/p1_walk02.png",
    "p1_walk03": "p1_walk/p1_walk03.png",
    "p1_walk04": "p1_walk/p1_walk04.png",
    "p1_walk05": "p1_walk/p1_walk05.png",
    "p1_walk06": "p1_walk/p1_walk06.png",
    "p1_walk07": "p1_walk/p1_walk07.png",
    "p1_walk08": "p1_walk/p1_walk08.png",
    "p1_walk09": "p1_walk/p1_walk09.png",
    "p1_walk10": "p1_walk/p1_walk10.png",
    "p1_walk11": "p1_walk/p1_walk11.png",
};
