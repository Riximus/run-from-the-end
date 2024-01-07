import k from "./kaboomContext";

const load = {
    sprites: () => {
        // TODO: Load a spriteatlas or player sprite instead of individual sprites?
        k.loadSprite("player-1-stand", "sprites/player/p1/p1_stand.png")
    }
}

export default load;
