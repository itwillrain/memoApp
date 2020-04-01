import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'emotion-theming';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';
import AppBar, { Theme } from './src/components/AppBar';

const theme: Theme = {
  color: 'pink',
  backgroundColor: 'hotpink',
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <AppBar color={theme.color} backgroundColor={theme.backgroundColor} />
        <MemoList />
        <CircleButton />
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
