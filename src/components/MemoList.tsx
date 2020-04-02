/* eslint-disable import/no-cycle */
import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { theme, OriginalTheme } from '../styles/themes';
import { MemoListScreenNavigationProp } from '../screens/MemoListScreen';

interface Props {
  navigation: MemoListScreenNavigationProp;
}

const styled = styledNative as Styled<OriginalTheme>;
const MemoList: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.memoList}>
      <MemoItem
        underlayColor={theme.colors.primary}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View style={styles.memoListItem}>
          <Text>講座のアイテム</Text>
          <Text>2017/10/10</Text>
        </View>
      </MemoItem>

      <View style={styles.memoListItem}>
        <Text>講座のアイテム</Text>
        <Text>2017/10/10</Text>
      </View>

      <View style={styles.memoListItem}>
        <Text>講座のアイテム</Text>
        <Text>2017/10/10</Text>
      </View>

      <View style={styles.memoListItem}>
        <Text>講座のアイテム</Text>
        <Text>2017/10/10</Text>
      </View>
    </View>
  );
};

const MemoItem = styled.TouchableHighlight``;

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

export default MemoList;
