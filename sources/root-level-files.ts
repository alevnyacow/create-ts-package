import { join } from "path";
import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

const rootFilesContent = readDirectoryFiles(
    join(__dirname, "root-level-files")
);

export { rootFilesContent };
