import k from "../kaboomContext";

const load = {
    sprites: {
        player: ()  => {
            // TODO: Load a spriteatlas or player sprite instead of individual sprites?
            k.loadSprite("player-1-stand", "sprites/player/p1/p1_stand.png")
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
