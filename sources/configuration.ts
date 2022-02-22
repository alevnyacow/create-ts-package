/* eslint-disable camelcase */
import { join } from "path";
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

const configData: Record<string, string> = {
    DEV_DEPENDENCIES_TYPES: "BASE PRETTIER ESLINT JEST UTILS",
    DEV_DEPENDENCIES_BASE: "typescript",
    DEV_DEPENDENCIES_PRETTIER: "prettier",
    DEV_DEPENDENCIES_ESLINT:
        "eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser",
    DEV_DEPENDENCIES_JEST: "jest @types/jest ts-jest",
    DEV_DEPENDENCIES_UTILS: "del-cli",
    SCRIPT_TYPES: "test clean_transpiled format lint check build execute",
    SCRIPT_test: "jest",
    SCRIPT_clean_transpiled: "del-cli --force ./transpiled",
    SCRIPT_format: "prettier --config .prettierrc --write sources/**",
    SCRIPT_lint: "eslint sources/**/*.ts --ext .ts",
    SCRIPT_check: "npm run lint && npm run test",
    SCRIPT_build: "npm run clean_transpiled && tsc",
    SCRIPT_execute: "npm run build && node transpiled/index.js"
};

/**
 * Returns list of development dependencies based on environment data.
 */
export const devDependencies = () => {
    const buildKey = (type: string) => `DEV_DEPENDENCIES_${type}`;
    const dependencyTypes = configData.DEV_DEPENDENCIES_TYPES;
    const dependencyKeys = dependencyTypes.split(" ").map(buildKey);
    const dependencies = dependencyKeys.map((key) => configData[key]);
    return dependencies.join(" ");
};

/**
 * Returns list of package npm scripts based on environment data.
 */
export const scripts = () => {
    const buildKey = (type: string) => `SCRIPT_${type}`;
    const scriptTypes = configData.SCRIPT_TYPES;
    const scriptTypesArray = scriptTypes.split(" ");
    return scriptTypesArray.reduce((accumulator, type) => {
        return {
            ...accumulator,
            [type]: configData[buildKey(type)]
        };
    }, {} as Record<string, string>);
};

/**
 * Returns root files data based on "root-level-files" directory content.
 */
export const rootFilesContent = readDirectoryFiles(
    join(__dirname, "root-level-files")
);
