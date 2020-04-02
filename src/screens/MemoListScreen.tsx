import React, { FC } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OriginalTheme } from '../styles/themes';
import MemoList from '../components/MemoList';
import { RootStackParamList } from '../../App';
import CircleButton from '../elements/CircleButton';

export type MemoListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoList'
>;

type Props = {
  navigation: MemoListScreenNavigationProp;
};
const styled = styledNative as Styled<OriginalTheme>;

const MemoListScreen: FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <MemoList navigation={navigation} />
      <CircleButton
        name="plus"
        onPress={() => navigation.navigate('MemoEdit')}
      />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;
export default MemoListScreen;
