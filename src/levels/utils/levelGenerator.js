import sections from '../data/sections.json';
import { generateMappings } from "../generalMappings";

/**
 * Generates levels TODO
 * @param {string} levelTheme - The Theme for the Level
 * @param {string} levelLength - The Length for the Level (1 Section = 1 Length, 1 Section = 32 Tiles)
 * @param {string} levelDifficulty - The Difficulty (0 - 1) for the Level
 * @returns {Object} - Object with Level Layout and Level Mappings
 */
export function buildLevel(levelTheme, levelLength, levelDifficulty) {
    console.log("buildLevel -> Theme: " + levelTheme + ", Length: " + levelLength + ", Difficulty: " + levelDifficulty)
    // Levels contains fixed a height of 11
    let level = {
        levelLayout: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
        levelMappings: null,
    }

    //Get all sections and filter by levelTheme
    const selectedSections = sections.filter(sections => {
        return sections.forLevelTheme.includes(levelTheme) && sections.difficulty <= levelDifficulty;
    }); 

    if (selectedSections.length === 0) {
        console.error("Error - levelGenerator.js: No sections found for asked LevelTheme and LevelDifficulty");
        return;
    }

    //Build level randomly based of the selectedSections
    for (let lenghtPos = 0; lenghtPos < levelLength; lenghtPos++) {
        let randomIndex = Math.floor(Math.random() * selectedSections.length);
        for (let heightPos = 0; heightPos < level.levelLayout.length; heightPos++) {
            level.levelLayout[heightPos] += selectedSections[randomIndex].map[heightPos];
        };
    }

    //Add end of level
    const endOfLevel = ["  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "  ", "F ", "=_"];
    for (let heightPos = 0; heightPos < endOfLevel.length; heightPos++) {
        level.levelLayout[heightPos] += endOfLevel[heightPos];
    }

    //Get Level Mappings
    const mappings = generateMappings(levelTheme);
    level.levelMappings = mappings;

    if (!level.levelMappings) {
        console.error("Error - levelGenerator.js: No mappings found for asked LevelTheme");
        return;
    }

    return level;
}