/* eslint-disable import/no-cycle */
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { FlatList } from 'react-native-gesture-handler';
import { theme, OriginalTheme } from '../styles/themes';
import { MemoListScreenNavigationProp } from '../screens/MemoListScreen';
import { Memo } from '../services/models/memo';
import { formatDate } from '../filters';

interface Props {
  navigation: MemoListScreenNavigationProp;
  memos: Memo[];
}

const styled = styledNative as Styled<OriginalTheme>;

const Item = ({
  memo,
  navigation,
}: {
  memo: Memo;
  navigation: MemoListScreenNavigationProp;
}) => {
  return (
    <MemoListItem
      onPress={() => {
        navigation.navigate('MemoDetail', { id: memo.id });
      }}
      underlayColor={theme.colors.grayLighten1}
    >
      <>
        <MemoListTitle>{memo.body.substring(0, 10)}</MemoListTitle>
        <MemoListDate>{formatDate(memo.updatedAt)}</MemoListDate>
      </>
    </MemoListItem>
  );
};

const MemoList: FC<Props> = ({ navigation, memos }) => {
  return (
    <View style={styles.memoList}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <Item memo={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const MemoListItem = styled.TouchableHighlight`
  padding: 16px;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;
const MemoListTitle = styled.Text``;
const MemoListDate = styled.Text``;

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
});

export default MemoList;
