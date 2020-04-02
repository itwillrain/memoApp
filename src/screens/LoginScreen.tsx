import React, { FC } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { OriginalTheme, theme } from '../styles/themes';

const styled = styledNative as Styled<OriginalTheme>;
const LoginScreen: FC<any> = ({ navigation }) => (
  <Container>
    <Title>ログイン</Title>
    <Input value="Email" />
    <Input value="Password" />
    <SubmitButton
      onPress={() => navigation.navigate('Signup')}
      underlayColor={theme.colors.primary}
    >
      <SubmitButtonTitle>ログイン</SubmitButtonTitle>
    </SubmitButton>
  </Container>
);

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
