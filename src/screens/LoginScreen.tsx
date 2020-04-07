import React, { FC, useState } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as firebase from 'firebase';
import { OriginalTheme, theme } from '../styles/themes';
import { RootStackParamList } from '../../App';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
interface Props {
  navigation: LoginScreenNavigationProp;
}
const styled = styledNative as Styled<OriginalTheme>;
const LoginScreen: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('info.itwillrain@gmail.com');
  const [password, setPassword] = useState<string>('12345678');

  const handleSubmit = async () => {
    try {
      const userCredencial = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log('SUCCESS', { userCredencial });
      navigation.navigate('MemoList');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <Container>
      <Title>ログイン</Title>
      <Input
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
      />
      <Input
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <SubmitButton onPress={handleSubmit} underlayColor={theme.colors.primary}>
        <SubmitButtonTitle>ログイン</SubmitButtonTitle>
      </SubmitButton>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 28px;
  align-self: center;
  margin-bottom: 18px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`;

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.grayLighten1};
  height: 48px;
  margin-bottom: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  padding: 8px;
`;

const SubmitButton = styled.TouchableHighlight`
  background-color: ${(props) => props.theme.colors.primaryDarken1};
  height: 48px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 70%;
  align-self: center;
`;

const SubmitButtonTitle = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
`;

export default LoginScreen;
