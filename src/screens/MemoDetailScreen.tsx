import React, { FC, useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import * as firebase from 'firebase/app';
import useMemo from '../hooks/use-memo';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';
import { RootStackParamList } from '../../App';
import { formatDate } from '../filters';
import { Memo } from '../services/models/memo';

type MemoDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoDetail'
>;
type MemoDetailScreenRouteProp = RouteProp<RootStackParamList, 'MemoDetail'>;
type Props = {
  navigation: MemoDetailScreenNavigationProp;
  route: MemoDetailScreenRouteProp;
};

const styled = styledNative as Styled<OriginalTheme>;
const MemoDetailScreen: FC<Props> = ({ navigation, route }) => {
  const { id } = route.params;
  const { uid } = firebase.auth().currentUser;
  const { loading, memo } = useMemo(uid, id);

  const [_memo, setMemo] = useState(new Memo('', null, null));

  useEffect(() => {
    setMemo(memo);
  }, [memo]);

  const refreshFunc = (val: Memo) => {
    setMemo(val);
  };

  return (
    <Container>
      <MemoHeader>
        <View>
          <MemoHeaderTitle>
            {loading ? '' : _memo.body.substring(0, 10)}
          </MemoHeaderTitle>
          <MemoHeaderDate>{formatDate(_memo.createdAt)}</MemoHeaderDate>
        </View>
      </MemoHeader>

      <MemoContent>
        <MemoBody>{_memo.body}</MemoBody>
      </MemoContent>

      <CircleButton
        style={styles.editButton}
        color="white"
        name="pencil"
        onPress={() => {
          navigation.navigate('MemoEdit', {
            id,
            refresh: refreshFunc,
          });
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  editButton: {
    top: 80,
  },
});

const MemoBody = styled.Text`
  line-height: 24;
  font-size: 15px;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const MemoHeader = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primaryDarken1};
  justify-content: center;
  padding: 10px;
`;

const MemoHeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.white};
`;

const MemoHeaderDate = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;

const MemoContent = styled.View`
  padding: 30px 10px 0 10px;
  flex: 1;
`;
export default MemoDetailScreen;
