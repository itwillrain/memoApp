import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './src/styles/themes';
import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <AppBar />
        <MemoDetailScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 78,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
