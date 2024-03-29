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
        ])

        this.displayBlinkingUiMessage(
            "Press [ Enter ] to Start",
            k.vec2(k.center().x, k.height() / 1.7)
        )

        this.displayControls(1.5, k.vec2(30, k.height() - 170))

        this.displayText(
            "Made by:\nburnt0rice\nRiximus",
            k.vec2(k.width()-30*3.5, k.height()-170/2)
        )

        // TODO: can be the first level or from a local storage save
        k.onKeyPress("enter", () => {
            k.go("gameScene")
        })

        //Skip the menu for development
        //k.go("gameScene")
    }

    displayGameOverScreen() {
        k.add([
            k.sprite("bg-plain"),
            k.fixed(),
            k.scale(k.width(), k.height()),
        ])

        this.displayBlinkingUiMessage(
            "Game Over. [R]etry?",
            k.vec2(k.center().x, k.height() / 2)
        )

        this.displayText(
            "[H]ome Screen",
            k.vec2(k.center().x, k.height() / 1.7)
        )

        this.displayText(
            "Made by:\nburnt0rice\nRiximus",
            k.vec2(k.width()-30*3.5, k.height()-170/2)
        )

        k.onKeyPress("r", () => {
            k.go("gameScene")
        })

        k.onKeyPress("h", () => {
            k.go("startMenu")
        })
    }

    displayGameWinScreen() {
        k.add([
            k.sprite("bg-plain"),
            k.fixed(),
            k.scale(k.width(), k.height()),
        ])

        this.displayBlinkingUiMessage(
            "You did it (^U^)\nPress [R] to play another level.",
            k.vec2(k.center().x, k.height() / 2)
        )

        this.displayText(
            "[H]ome Screen",
            k.vec2(k.center().x, k.height() / 1.7)
        )

        this.displayText(
            "Made by:\nburnt0rice\nRiximus",
            k.vec2(k.width()-30*3.5, k.height()-170/2)
        )

        k.onKeyPress("r", () => {
            k.go("gameScene")
        })

        k.onKeyPress("h", () => {
            k.go("startMenu")
        })
    }

    displayText(content, position) {
        const credits = k.add([
            k.text(content, {
                size: 28,
                font: "itim",
                align: "center",
            }),
            k.color(0,0,0),
            k.anchor("center"),
            k.pos(position)
        ])

    }

    displayBlinkingUiMessage(content, position){
        const message = k.add([
            k.text(content, {
                size: 36,
                font: "itim",
                align: "center",
            }),
            k.color(0,0,0),
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

    displayControls(size, position) {
        const controls = k.add([
            k.sprite("controls"),
            k.area(),
            k.pos(position),
            k.scale(size),
        ])
    }
}

