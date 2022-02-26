import { join } from "path";
import { writeFileSync } from "fs";
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

/**
 * Prefix for .gitignore and .npmignore files.
 */
const ignoreFilesPrefix = "dot";

/**
 * Creates root files for package configuration.
 */
export const createRootFiles = (packageName: string) => {
    const rootFilesContent = readDirectoryFiles(
        join(__dirname, "root-level-files")
    );
    Object.keys(rootFilesContent).forEach((fileName) => {
        const requiredFileName = fileName.startsWith(ignoreFilesPrefix)
            ? `.${fileName.substring(ignoreFilesPrefix.length)}`
            : fileName;

        writeFileSync(
            `./${packageName}/${requiredFileName}`,
            rootFilesContent[fileName]
        );
    });
};
