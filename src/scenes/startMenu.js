import UiManager from "../utils/UiManager";

export default function startMenu(k) {
    const uiManager = new UiManager();
    uiManager.displayMainMenu();
    const music = k.play("reggae", {
        loop: true,
        volume: 0.5,
    })

    k.onSceneLeave(() => {
        music.stop();
    })
}
