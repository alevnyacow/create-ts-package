import { rootFilesContent } from "./configuration";
import { writeFileSync } from "fs";

/**
 * Creates root files for package configuration.
 */
export const createRootFiles = (packageName: string) => {
    Object.keys(rootFilesContent).forEach((fileName) => {
        writeFileSync(
            `./${packageName}/${fileName}`,
            rootFilesContent[fileName]
        );
    });
};
