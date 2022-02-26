/**
 * Obtains package name from a terminal parameter.
 */
export const getPackageName = () => {
    const [, , packageName] = process.argv;
    if (!packageName) {
        throw new Error("Package name was not provided.");
    }
    return packageName;
};
