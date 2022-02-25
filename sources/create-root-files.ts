import { join } from "path";
import { writeFileSync } from "fs";
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";
/**
 * Creates root files for package configuration.
 */
export const createRootFiles = (packageName: string) => {
    const rootFilesContent = readDirectoryFiles(
        join(__dirname, "root-level-files")
    );
    Object.keys(rootFilesContent).forEach((fileName) => {
        writeFileSync(
            `./${packageName}/${fileName}`,
            rootFilesContent[fileName]
        );
    });
};
