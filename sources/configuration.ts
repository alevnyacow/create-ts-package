import { join } from "path";
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

/**
 * Returns list of development dependencies based on environment data.
 */
export const devDependencies = () => {
    const buildKey = (type: string) => `DEV_DEPENDENCIES_${type}`;
    const dependencyTypes = process.env.DEV_DEPENDENCIES_TYPES!;
    const dependencyKeys = dependencyTypes.split(" ").map(buildKey)!;
    const dependencies = dependencyKeys.map((key) => process.env[key]!);
    return dependencies.join(" ");
};

/**
 * Returns list of package npm scripts based on environment data.
 */
export const scripts = () => {
    const buildKey = (type: string) => `SCRIPT_${type}`;
    const scriptTypes = process.env.SCRIPT_TYPES!;
    const scriptTypesArray = scriptTypes.split(" ");
    return scriptTypesArray.reduce((accumulator, type) => {
        return {
            ...accumulator,
            [type]: process.env[buildKey(type)]!
        };
    }, {} as Record<string, string>);
};

/**
 * Returns root files data based on "root-level-files" directory content.
 */
export const rootFilesContent = readDirectoryFiles(
    join(__dirname, "root-level-files")
);
