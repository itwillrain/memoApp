import React, { FC } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';
import { RootStackParamList } from '../../App';

type MemoEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoEdit'
>;

type Props = {
  navigation: MemoEditScreenNavigationProp;
};
const styled = styledNative as Styled<OriginalTheme>;
const MemoEditScreen: FC<Props> = ({ navigation }) => (
  <Container>
    <MemoEditInput multiline value="Hi" />
    <CircleButton
      name="check"
      onPress={() => navigation.navigate('MemoDetail')}
    />
  </Container>
);
const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const MemoEditInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.white};
`;

export default MemoEditScreen;
