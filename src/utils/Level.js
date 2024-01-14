import k from "../kaboomContext";

export default class Level {

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 128,
            tileHeight: 128,
            tiles: mappings,
        }

        k.addLevel(levelLayout, layerSettings)

        // TODO: add this if we plan to use multiple layers
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
