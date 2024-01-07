import k from "../kaboomContext";

export default class Level {

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 32,
            tileHeight: 32,
            tiles: mappings,
        }

        k.addLevel(levelLayout, layerSettings)

        /*this.layers = []

        for (const layerLayout of levelLayout) {
            this.layers.push(k.addLevel(layerLayout, layerSettings))
        }

        for (const layer of this.layers) {
            layer.use(scale(4))
        }*/
    }

    drawBackground(backgroundSpriteName) {
        k.add([
            k.sprite(backgroundSpriteName),
            k.fixed(),
            k.scale(k.width(), k.height()),
        ])
    }
}
