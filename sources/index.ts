#!/usr/bin/env node

import { execSync } from "child_process";
import { mkdirSync, writeFileSync, readFile } from "fs";

import { devDependencies } from "../resources/dev-dependencies-list";
import { scripts } from "../resources/package-scripts";
import { rootFilesContent } from "../resources/root-level-files";

const [, , name] = process.argv;

function createPackage() {
    const devDependenciesList = devDependencies.join(" ");

    mkdirSync(`./${name}`);
    execSync(`cd ./${name} && npm init -y && npm i -D ${devDependenciesList}`);
}

function addScripts() {
    readFile(`./${name}/package.json`, (err, buffer) => {
        if (err) {
            throw err;
        }

        const packageManifest = JSON.parse(buffer.toString());
        packageManifest["scripts"] = scripts;
        writeFileSync(
            `./${name}/package.json`,
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            JSON.stringify(packageManifest, null, 2)
        );
    });
}

function copyRootFiles() {
    Object.keys(rootFilesContent).forEach((fileName) => {
        writeFileSync(`./${name}/${fileName}`, rootFilesContent[fileName]);
    });
}

function main() {
    createPackage();
    addScripts();
    copyRootFiles();
}

main();

export { main };
