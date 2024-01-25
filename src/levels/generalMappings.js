import k from "../kaboomContext.js";

/**
 * Generates mappings for a level theme.
 * @param {string} levelTheme - The level theme.
 * @returns {Object} - The mappings for the tile type.
 */
export function generateMappings(levelTheme) {
    const levelMappings = {
        "plain": {
            "-": 16,
            "=": 8,
            "_": 0,
            "0": 1,
            ":": 56,
            ".": 48,
            ";": 40,
        },
        "iceAge": {
            "-": 67,
            "=": 59,
            "_": 51,
            "0": 52,
            ":": 107,
            ".": 99,
            ";": 91,
        },
        "desert": {
            "-": 84,
            "=": 76,
            "_": 68,
            "0": 69,
            ":": 124,
            ".": 116,
            ";": 108,
        },
        "aftermath": {
            "-": 50,
            "=": 42,
            "_": 34,
            "0": 35,
            ":": 90,
            ".": 82,
            ";": 74,
        },
        "plague": {
            "-": 101,
            "=": 93,
            "_": 85,
            "0": 86,
            ":": 14,
            ".": 6,
            ";": 125,
        },
    }

    let mappings = {};
    for (const key in levelMappings[levelTheme]) {
        mappings[key] = () => [
            k.sprite('grounds', {
                frame: levelMappings[levelTheme][key],
            }),
            k.scale(0.6),
            k.area(),
            k.body({ isStatic: true }),
            k.offscreen(), // this is needed for performance reasons
            "ground"
        ]
    }

    //Add End Flag
    mappings["F"] = () => [
        k.sprite('flag'),
        k.scale(0.6),
        k.area(),
        k.body({ isStatic: true }),
        k.offscreen(), // this is needed for performance reasons
        "flag"
    ]

    //Add Drop Zone
    mappings["x"] = () => [
        k.rect(75, 75),
        k.color(0, 0, 0),
        k.opacity(1),
        k.area(),
        k.offscreen(), // this is needed for performance reasons
        "dropZone"
    ]

    return mappings;
}
