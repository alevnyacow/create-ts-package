/* eslint-disable no-console */

/**
 * Procedure describing a stage of a package creating based on a package name.
 */
type PackageCreatingAction = (packageName: string) => void;

/**
 * Simple wrapper for package creation actions with logging.
 */
export const loggedPackageAction = (
    action: PackageCreatingAction,
    message: string
): PackageCreatingAction => {
    return (packageName: string) => {
        console.log(message);
        action(packageName);
        console.log("Finished.");
    };
};
