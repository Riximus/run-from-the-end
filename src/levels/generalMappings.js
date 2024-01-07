import k from "../kaboomContext.js";

/**
 * Generates mappings for a tile type.
 * @param {string} tileType - The tile type.
 * @returns {Object} - The mappings for the tile type.
 */
export function generateMappings(tileType) {
    return {
        '=': () => [
            k.sprite(`${tileType}-ground`),
            k.area(),
            k.body({ isStatic: true }),
            k.offscreen(), // this is needed for performance reasons
            "ground"
        ]
    }
}
