import React, { FC, useState, useEffect } from 'react';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import * as firebase from 'firebase/app';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';
import { RootStackParamList } from '../../App';
import useMemo from '../hooks/use-memo';
import { Memo, memoConverter } from '../services/models/memo';

type MemoEditScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoEdit'
>;
type MemoEditScreenRouteProp = RouteProp<RootStackParamList, 'MemoEdit'>;
type Props = {
  navigation: MemoEditScreenNavigationProp;
  route: MemoEditScreenRouteProp;
};

const styled = styledNative as Styled<OriginalTheme>;
const MemoEditScreen: FC<Props> = ({ navigation, route }) => {
  const [_memo, setMemo] = useState<Memo>(new Memo('', null, null));
  const { uid } = firebase.auth().currentUser;
  const { id, refresh } = route.params;
  const { memo } = useMemo(uid, id);

  useEffect(() => {
    setMemo(memo);
  }, [memo]);
  const hadlePress = async () => {
    const db = firebase.firestore();
    try {
      await db
        .doc(`users/${uid}/memos/${id}`)
        .withConverter(memoConverter)
        .set(_memo);
      navigation.goBack();
      refresh(_memo);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <Container>
      <MemoEditInput
        multiline
        value={_memo.body}
        onChangeText={(text: string) => {
          const m = { ...memo };
          m.body = text;
          setMemo(m);
        }}
      />
      <CircleButton name="check" onPress={hadlePress} />
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;
const MemoEditInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

export default MemoEditScreen;
