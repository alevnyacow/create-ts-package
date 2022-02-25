import { writeFileSync, readFileSync } from "fs";

/**
 * Package scripts data.
 */
const packageScripts = {
    test: "jest",
    // eslint-disable-next-line camelcase
    clean_transpiled: "del-cli --force ./transpiled",
    format: "prettier --config .prettierrc --write sources/**",
    lint: "eslint sources/**/*.ts --ext .ts",
    check: "npm run lint && npm run test",
    build: "npm run clean_transpiled && tsc",
    execute: "npm run build && node transpiled/index.js"
};

/**
 * Modifies package manifest with scripts described in configuration
 * and sets main and types sections for the package.
 */
export const configureManifest = (packageName: string) => {
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
