# rn-detect-developer-options

[![npm version](https://img.shields.io/npm/v/rn-detect-developer-options.svg)](https://www.npmjs.com/package/rn-detect-developer-options)
[![npm downloads](https://img.shields.io/npm/dt/rn-detect-developer-options.svg)](https://www.npmjs.com/package/rn-detect-developer-options)
[![license](https://img.shields.io/npm/l/rn-detect-developer-options.svg)](LICENSE)

A lightweight **React Native** library to detect if **Developer Options** or **USB Debugging** are enabled on an Android device.  
Useful for preventing tampering, improving app security, or showing custom warnings when Developer Mode is active.

---

## 🚀 Installation

```bash
npm install rn-detect-developer-options
or
yarn add rn-detect-developer-options

After installation, run:

npx pod-install

(iOS will always return false, since Developer Options are Android-only)

📱 Usage Example

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