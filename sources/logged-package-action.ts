/* eslint-disable no-console */

const configData: Record<string, string> = {
    LOG_CREATING_PACKAGE_BASE: "Creating package base...",
    LOG_CREATING_BASE_SOURCES: "Creating base source files...",
    LOG_CONFIGURING_MANIFEST: "Configuring package manifest...",
    LOG_ADDING_ROOT_FILES: "Adding some configuration files...",
    LOG_FINISHED_CREATION_STAGE: "Finished."
};

/**
 * Simple wrapper for package creation actions with logging.
 */
export const loggedPackageAction = (
    action: (packageName: string) => void,
    logTextSettingKey: string
) => {
    return (packageName: string) => {
        console.log(configData[logTextSettingKey]);
        action(packageName);
        console.log(configData.LOG_FINISHED_CREATION_STAGE);
    };
};
