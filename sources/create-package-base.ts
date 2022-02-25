import { execSync } from "child_process";
import { mkdirSync } from "fs";

/**
 * Development dependencies grouped by dependencies roles.
 */
const dependenciesData = {
    base: "typescript",
    prettier: "prettier",
    eslint: "eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser",
    jest: "jest @types/jest ts-jest",
    utils: "del-cli"
};

/**
 * Creates package folder, initializes npm package and installs
 * required dependencies.
 */
export const createPackageBase = (packageName: string) => {
    mkdirSync(`./${packageName}`);
    const devDependenciesList = Object.values(dependenciesData).join(" ");
    execSync(
        `cd ./${packageName} && npm init -y && npm i -D ${devDependenciesList}`
    );
};
