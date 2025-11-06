import { NativeModules } from 'react-native';

const { RnDetectDeveloperOptions } = NativeModules;

export const isDeveloperOptionsEnabled = async (): Promise<boolean> => {
  try {
    const result = await RnDetectDeveloperOptions.isDeveloperOptionsEnabled();
    return result;
  } catch (e) {
    console.warn('Error detecting developer options', e);
    return false;
  }
};
