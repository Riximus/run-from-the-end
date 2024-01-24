import k from "../kaboomContext";

const load = {
    ui: () => {
        //k.loadSprite("colored-forest", "sprites/ui/colored_forest.png")
        k.loadSprite("logo", "sprites/ui/hud_p1.png")
    },
    fonts: {
        itim: () => {
            k.loadFont("itim", "fonts/Itim-Regular.ttf")
        }
    },
    sprites: {
        player: ()  => {
            // TODO: Load a spriteatlas or player sprite instead of individual sprites?
            //k.loadSprite("player-1-stand", "sprites/player/p1/p1_stand.png")
            for (const [animName, animFile] of Object.entries(p1Sprites)) {
                k.loadSprite(animName, `sprites/player/p1/${animFile}`);
            }
            k.loadSprite("p1_movement", "sprites/player/p1/p1_walk_spritesheet.png", {
                sliceX: 13,  // Number of frames horizontally
                anims: {
                    walk: {
                        from: 0,
                        to: 10,
                        speed: 20,
                        loop: true,
                    },
                    "jump": 11,
                    "duck": 12,
                },
            });
        }
    },
    levelSprites: {
        testGround: () => {
            k.loadSprite("bg-plain", "sprites/levels/bg-plain.png")
            k.loadSprite("bg-iceAge", "sprites/levels/bg-iceAge.png")
            k.loadSprite("bg-desert", "sprites/levels/bg-desert.png")
            k.loadSprite("bg-aftermath", "sprites/levels/bg-aftermath.png")
            k.loadSprite("bg-plague", "sprites/levels/bg-plague.png")

            k.loadSprite("flag", "sprites/levels/flag.png")
            k.loadSprite("grounds", "sprites/levels/spritesheet_ground.png", {
                sliceX: 8,
                sliceY: 16,
            });
        }
    }
}

export default load;

// Animations ---------------------------------------------------------------
// Player 1
const p1Sprites = {
    "p1_stand": "p1_stand.png",
    "p1_front": "p1_front.png",
    "p1_hurt": "p1_hurt.png",
};
