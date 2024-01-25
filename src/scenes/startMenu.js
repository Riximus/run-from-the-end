import UiManager from "../utils/UiManager";

export default function startMenu(k) {
    const uiManager = new UiManager();
    uiManager.displayMainMenu();

    let music
    k.onClick(() => {
        if (!music) {
            music = k.play("reggae", {
                loop: true,
                volume: 0.5,
            })
        }
    });

    k.onSceneLeave(() => {
        if (music) music.stop();
    })
}
