import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/styles/themes';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const RootStack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Home: undefined;
  MemoDetail: { userId: string };
  MMemo: undefined;
  MemoList: undefined;
  MemoEdit: undefined;
  Login: undefined;
  Signup: undefined;
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: theme.colors.white,
            headerStyle: { backgroundColor: theme.colors.primaryDarken1 },
          }}
        >
          <RootStack.Screen name="MMemo" component={MemoListScreen} />
          <RootStack.Screen name="MemoDetail" component={MemoDetailScreen} />
          <RootStack.Screen name="MemoEdit" component={MemoEditScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Signup" component={SignupScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
