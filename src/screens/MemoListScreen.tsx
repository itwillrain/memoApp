import React, { FC } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RouteProp } from '@react-navigation/native';
import { OriginalTheme } from '../styles/themes';
import MemoList from '../components/MemoList';
import { RootStackParamList } from '../../App';
import CircleButton from '../elements/CircleButton';

export type MemoListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoList'
>;

type MemoListScreenRouteProp = RouteProp<RootStackParamList, 'MemoList'>;

type Props = {
  navigation: MemoListScreenNavigationProp;
  route: MemoListScreenRouteProp;
};
const styled = styledNative as Styled<OriginalTheme>;
const handlePress = async (
  navigation: MemoListScreenNavigationProp,
  route: MemoListScreenRouteProp,
): Promise<void> => {
  navigation.navigate('MemoCreate', { currentUser: route.params.currentUser });
};
const MemoListScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <Container>
      <MemoList navigation={navigation} />
      <CircleButton
        name="plus"
        onPress={() => handlePress(navigation, route)}
      />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;
export default MemoListScreen;
