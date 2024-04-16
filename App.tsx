import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

import { THEME } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});