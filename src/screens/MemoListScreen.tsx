import React, { FC, useEffect, useState } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as firebase from 'firebase';
import { OriginalTheme } from '../styles/themes';
import MemoList from '../components/MemoList';
import { RootStackParamList } from '../../App';
import CircleButton from '../elements/CircleButton';
import 'firebase/firestore';
import { memoConverter } from '../services/models/memo';

export type MemoListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoList'
>;
type Props = {
  navigation: MemoListScreenNavigationProp;
};
const handlePress = async (
  navigation: MemoListScreenNavigationProp,
): Promise<void> => {
  navigation.navigate('MemoCreate');
};

const MemoListScreen: FC<Props> = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const { uid } = firebase.auth().currentUser;
      const snap = await db
        .collection(`users/${uid}/memos`)
        .withConverter(memoConverter)
        .get();
      const memo = snap.docs.map((doc) => doc.data());
      setData(memo);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <MemoList navigation={navigation} memos={data} />
      <CircleButton name="plus" onPress={() => handlePress(navigation)} />
    </Container>
  );
};

const styled = styledNative as Styled<OriginalTheme>;
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;
export default MemoListScreen;
