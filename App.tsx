import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";

import { THEME } from "./src/theme";

import Constants from 'expo-constants';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>{Constants.expoConfig.extra.fact}</Text>
      </Box>
    </NativeBaseProvider>
  );
}