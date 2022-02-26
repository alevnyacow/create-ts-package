import { readDirectoryFiles } from "@alevnyacow/get-directory-files";

test("Configuration files list", () => {
    const rootFilesData = readDirectoryFiles("root-level-files");
    const keys = Object.keys(rootFilesData);
    expect(keys).toEqual([
        ".eslintignore",
        ".eslintrc",
        ".prettierrc",
        "dotgitignore",
        "dotnpmignore",
        "jest.config.js",
        "tsconfig.json"
    ]);
});
