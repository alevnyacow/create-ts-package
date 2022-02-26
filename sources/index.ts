#!/usr/bin/env node
import { configureManifest } from "./configure-manifest";
import { createBaseSources } from "./create-base-sources";
import { createPackageBase } from "./create-package-base";
import { createRootFiles } from "./create-root-files";
import { getPackageName } from "./get-package-name";
import { loggedPackageAction } from "./logged-package-action";

/**
 * Main package script, creating package with a given name.
 */
const main = () => {
    const packageCreatingActions = [
        loggedPackageAction(createPackageBase, "Creating package base..."),
        loggedPackageAction(createBaseSources, "Creating base source files..."),
        loggedPackageAction(configureManifest, "Configuring manifest..."),
        loggedPackageAction(createRootFiles, "Adding configuration files...")
    ];
    try {
        const packageName = getPackageName();
        packageCreatingActions.forEach((action) => action(packageName));
    } catch (error) {
        if (error instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(`Error has happened! ${error.message}`);
        }
    }
};

main();
