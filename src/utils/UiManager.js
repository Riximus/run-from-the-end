import k from "../kaboomContext.js"

export default class UiManager {
    displayMainMenu() {
        k.add([
            k.sprite("bg-plain"),
            k.fixed(),
            k.scale(k.width(), k.height()),
        ])
        k.add([
            k.sprite("logo"),
            k.area(),
            k.anchor("center"),
            k.pos(k.center().x, k.height() / 4),
            k.scale(4)
        ])

        this.displayBlinkingUiMessage(
            "Press [ Enter ] to Start",
            k.vec2(k.center().x, k.height() / 2)
        )

        // TODO: can be the first level or from a local storage save
        k.onKeyPress("enter", () => {
            k.go("gameScene")
        })

        //Skip the menu for development
        //k.go("gameScene")
    }

    displayBlinkingUiMessage(content, position){
        const message = k.add([
            k.text(content, {
                size: 36,
                font: "itim",
            }),
            k.color(0,0,0),
            k.area(),
            k.anchor("center"),
            k.pos(position),
            k.opacity(),
            k.state("flash-up", ["flash-up", "flash-down"]),
        ])

        message.onStateEnter("flash-up", async () => {
            await k.tween(
                message.opacity,
                0,
                0.5,
                (opacity) => message.opacity = opacity,
                k.easings.linear
            )
            message.enterState("flash-down")
        })
        message.onStateEnter("flash-down", async () => {
            await k.tween(
                message.opacity,
                1,
                0.5,
                (opacity) => message.opacity = opacity,
                k.easings.linear
            )
            message.enterState("flash-up")
        })
    }
}

