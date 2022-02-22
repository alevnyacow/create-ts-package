import { devDependencies } from "./configuration";
import { execSync } from "child_process";
import { mkdirSync } from "fs";

/**
 * Creates package folder, initializes npm package and installs
 * required dependencies.
 */
export const createPackageBase = (packageName: string) => {
    mkdirSync(`./${packageName}`);
    const devDependenciesList = devDependencies();
    execSync(
        `cd ./${packageName} && npm init -y && npm i -D ${devDependenciesList}`
    );
};
