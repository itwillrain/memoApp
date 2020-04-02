import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './src/styles/themes';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <AppBar />
        <MemoListScreen />
      </View>
    </ThemeProvider>
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
