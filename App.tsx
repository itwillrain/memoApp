import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { YellowBox } from 'react-native';
import { theme } from './src/styles/themes';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import FirebaseApp from './src/FirebaseApp';

import MemoCreateScreen from './src/screens/MemoCreateScreen';
import firebaseConfig from './src/firebase-config';

YellowBox.ignoreWarnings(['Setting a timer']);

firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  // Home: { currentUser: firebase.auth.UserCredential };
  MemoDetail: { id: string };
  MemoList: undefined;
  MemoEdit: { id: string; refresh: Function };
  MemoCreate: { currentUser: firebase.auth.UserCredential };
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseApp>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerTintColor: theme.colors.white,
              headerStyle: { backgroundColor: theme.colors.primaryDarken1 },
              headerBackTitleVisible: false,
            }}
          >
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Signup" component={SignupScreen} />
            <RootStack.Screen name="MemoList" component={MemoListScreen} />
            <RootStack.Screen name="MemoDetail" component={MemoDetailScreen} />
            <RootStack.Screen name="MemoEdit" component={MemoEditScreen} />
            <RootStack.Screen name="MemoCreate" component={MemoCreateScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </FirebaseApp>
    </ThemeProvider>
  );
}
