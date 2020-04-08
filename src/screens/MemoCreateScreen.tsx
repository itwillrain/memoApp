import React, { FC, useState } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import { RouteProp } from '@react-navigation/native';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';
import { RootStackParamList } from '../../App';

import 'firebase/firestore';
import { memoConverter } from '../services/models/memo';

type MemoCreateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoCreate'
>;
type MemoCreateScreenRouteProp = RouteProp<RootStackParamList, 'MemoCreate'>;
type Props = {
  navigation: MemoCreateScreenNavigationProp;
  route: MemoCreateScreenRouteProp;
};
const styled = styledNative as Styled<OriginalTheme>;
const MemoCreateScreen: FC<Props> = ({ navigation, route }) => {
  console.log(route);
  const [body, setBody] = useState('');

  const handleSave = async () => {
    try {
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      if (currentUser) {
        const { uid } = currentUser;
        await db.collection(`users/${uid}/memos`).add({
          body,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        navigation.navigate('MemoList');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <MemoEditInput
        multiline
        value={body}
        onChangeText={(text: string) => setBody(text)}
      />
      <CircleButton
        name="check"
        onPress={() => handleSave()}
        // onPress={() => navigation.navigate('MemoDetail')}
      />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const MemoEditInput = styled.TextInput`
  padding: 16px;
  flex: 1;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.white};
`;

export default MemoCreateScreen;
