import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { theme } from './src/styles/themes';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

const firebaseConfig = {
  apiKey: ENV.FIERBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DATABASE_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  // Home: { currentUser: firebase.auth.UserCredential };
  MemoDetail: undefined;
  MemoList: undefined;
  MemoEdit: undefined;
  MemoCreate: { currentUser: firebase.auth.UserCredential };
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
