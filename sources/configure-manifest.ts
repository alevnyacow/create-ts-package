import { writeFileSync, readFileSync } from "fs";
import { scripts } from "./configuration";

/**
 * Modifies package manifest with scripts described in configuration
 * and sets main and types sections for the package.
 */
export const configureManifest = (packageName: string) => {
    const packageScripts = scripts();
    const packageManifestContent = readFileSync(
        `./${packageName}/package.json`
    );
    const packageManifest = JSON.parse(packageManifestContent.toString());
    packageManifest["scripts"] = packageScripts;
    packageManifest["main"] = "transpiled/index.js";
    packageManifest["types"] = "transpiled/index.d.ts";

    writeFileSync(
        `./${packageName}/package.json`,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        JSON.stringify(packageManifest, null, 2)
    );
};
