import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  isDeveloperOptionsEnabled(): Promise<boolean>;
}

const NativeRnDetectDeveloperOptions = TurboModuleRegistry.getEnforcing<Spec>(
  'RnDetectDeveloperOptions'
);

export default NativeRnDetectDeveloperOptions;
