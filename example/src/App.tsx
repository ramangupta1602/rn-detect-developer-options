import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { isDeveloperOptionsEnabled } from 'rn-detect-developer-options';

export default function App() {
  useEffect(() => {
    (async () => {
      const enabled = await isDeveloperOptionsEnabled();
      if (enabled) {
        Alert.alert('Warning', 'Developer Options are enabled on this device!');
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detect Developer Options (Kotlin) Demo</Text>
    </View>
  );
}
