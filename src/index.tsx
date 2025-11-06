import NativeRnDetectDeveloperOptions from './NativeRnDetectDeveloperOptions';

export const isDeveloperOptionsEnabled = async (): Promise<boolean> =>
    await NativeRnDetectDeveloperOptions.isDeveloperOptionsEnabled();

export default isDeveloperOptionsEnabled;