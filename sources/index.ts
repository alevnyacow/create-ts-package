#!/usr/bin/env node
/* eslint-disable no-console */

import { execSync } from "child_process";
import { mkdirSync, writeFileSync, readFile } from "fs";

import { devDependencies } from "./dev-dependencies-list";
import { scripts } from "./package-scripts";
import { rootFilesContent } from "./root-level-files";

const [, , packageName] = process.argv;

/**
 * Creates package folder, initializes npm package and installs
 * required dependencies.
 */
function createPackageBase() {
    mkdirSync(`./${packageName}`);
    const devDependenciesList = devDependencies.join(" ");
    execSync(
        `cd ./${packageName} && npm init -y && npm i -D ${devDependenciesList}`
    );
}

/**
 * Modifies package manifest with scripts described in "package-scripts" module
 * and sets main and types sections.
 */
function configureManifest() {
    readFile(`./${packageName}/package.json`, (err, buffer) => {
        if (err) {
            throw err;
        }

        const packageManifest = JSON.parse(buffer.toString());
        packageManifest["scripts"] = scripts;
        packageManifest["main"] = "transpiled/index.js";
        packageManifest["types"] = "transpiled/index.d.ts";

        writeFileSync(
            `./${packageName}/package.json`,
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            JSON.stringify(packageManifest, null, 2)
        );
    });
}

/**
 * Copies files described in "root-level-files" module in package root folder.
 */
function copyRootFiles() {
    Object.keys(rootFilesContent).forEach((fileName) => {
        writeFileSync(
            `./${packageName}/${fileName}`,
            rootFilesContent[fileName]
        );
    });
}

/**
 * Creates index.ts and dummy.file.ts files with
 * required folders.
 */
function createAdditionalFiles() {
    mkdirSync(`./${packageName}/sources`);
    writeFileSync(
        `./${packageName}/sources/index.ts`,
        "const answerForEverything = 42;\n\nexport { answerForEverything };"
    );
    mkdirSync(`./${packageName}/tests`);
    writeFileSync(
        `./${packageName}/tests/dummy.test.ts`,
        'test("dummy_test", () => {\n\texpect(1).toBe(1);\n});'
    );
}

function main() {
    console.log("Creating package base...");
    createPackageBase();
    console.log("Scaffolding sources...");
    createAdditionalFiles();
    console.log("Configuring package manifest...");
    configureManifest();
    console.log("Adding configuration files...");
    copyRootFiles();
    console.log("Finished.");
}

main();
