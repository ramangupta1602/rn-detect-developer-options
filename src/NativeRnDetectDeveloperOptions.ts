import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  isDeveloperOptionsEnabled(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'RnDetectDeveloperOptions'
);
