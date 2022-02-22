#!/usr/bin/env node
import "dotenv/config";
import { configureManifest } from "./configure-manifest";
import { createBaseSources } from "./create-base-sources";
import { createPackageBase } from "./create-package-base";
import { createRootFiles } from "./create-root-files";
import { loggedPackageAction } from "./logged-package-action";

const main = () => {
    const packageCreationActions = [
        loggedPackageAction(createPackageBase, "LOG_CREATING_PACKAGE_BASE"),
        loggedPackageAction(createBaseSources, "LOG_CREATING_BASE_SOURCES"),
        loggedPackageAction(configureManifest, "LOG_CONFIGURING_MANIFEST"),
        loggedPackageAction(createRootFiles, "LOG_ADDING_ROOT_FILES")
    ];
    const [, , packageName] = process.argv;
    packageCreationActions.forEach((action) => action(packageName));
};

main();
