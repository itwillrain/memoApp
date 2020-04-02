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
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  MemoDetail: { userId: string };
  MemoList: undefined;
  MemoEdit: undefined;
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
            headerBackTitleVisible: false,
          }}
        >
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Signup" component={SignupScreen} />
          <RootStack.Screen name="Home" component={MemoListScreen} />
          <RootStack.Screen name="MemoDetail" component={MemoDetailScreen} />
          <RootStack.Screen name="MemoEdit" component={MemoEditScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
