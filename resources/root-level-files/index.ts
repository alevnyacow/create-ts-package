import { readdirSync, readFileSync } from "fs";

const fileNames = readdirSync("./resources/root-level-files/data");

const rootFilesContent = fileNames.reduce((accumulator, currentValue) => {
    return {
        ...accumulator,
        [currentValue]: readFileSync(
            `./resources/root-level-files/data/${currentValue}`
        ).toString()
    };
}, {} as Record<string, string>);

export { rootFilesContent };
