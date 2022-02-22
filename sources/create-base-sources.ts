import { mkdirSync, writeFileSync } from "fs";

/**
 * Creates index.ts and dummy.file.ts files with required folders.
 */
export const createBaseSources = (packageName: string) => {
    mkdirSync(`./${packageName}/sources`);
    writeFileSync(
        `./${packageName}/sources/index.ts`,
        "const answerForEverything = 42;\n\nexport { answerForEverything };"
    );
    mkdirSync(`./${packageName}/tests`);
    writeFileSync(
        `./${packageName}/tests/dummy.test.ts`,
        'test("dummy_test", () => {\n\texpect(1).toBe(1);\n});'
    );
};
