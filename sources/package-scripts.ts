/* eslint-disable camelcase */

/**
 * Describes npm scripts needed in package.
 */
export const scripts = {
    test: "jest",
    clean_transpiled: "del-cli --force ./transpiled",
    format: "prettier --config .prettierrc --write sources/*",
    lint: "eslint sources/**/*.ts --ext .ts",
    check: "npm run lint && npm run test",
    build: "npm run clean_transpiled && tsc"
};
