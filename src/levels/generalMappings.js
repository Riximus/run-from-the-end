import k from "../kaboomContext.js";

export function generateMappings(tileType) {
    return {
        '=': () => [
            k.sprite(`${tileType}-ground`),
            k.area(),
            k.body({ isStatic: true }),
            k.offscreen(), // this is needed for performance reasons
        ]
    }
}
