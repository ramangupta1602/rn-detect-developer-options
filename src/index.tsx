import NativeRnDetectDeveloperOptions from './NativeRnDetectDeveloperOptions';

export async function isDeveloperOptionsEnabled(): Promise<boolean> {
  return await NativeRnDetectDeveloperOptions.isDeveloperOptionsEnabled();
}

export default { isDeveloperOptionsEnabled };
