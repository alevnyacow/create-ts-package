/* eslint-disable no-console */

/**
 * Simple wrapper for package creation actions with logging.
 */
export const loggedPackageAction = (
    action: (packageName: string) => void,
    logTextSettingKey: string
) => {
    return (packageName: string) => {
        console.log(process.env[logTextSettingKey]);
        action(packageName);
        console.log(process.env.LOG_FINISHED_CREATION_STAGE);
    };
};
