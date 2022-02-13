import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const dataFolderName = "data";

const fileNames = readdirSync(join(__dirname, dataFolderName));

/**
 * Object with content of files placed in "./data" which has file name as a key and
 * file content as a value.
 */
const rootFilesContent = fileNames.reduce((accumulator, currentValue) => {
    return {
        ...accumulator,
        [currentValue]: readFileSync(
            join(__dirname, dataFolderName, currentValue)
        ).toString()
    };
}, {} as { [fileName: string]: string });

export { rootFilesContent };
