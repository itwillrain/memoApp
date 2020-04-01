import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MemoList: FC = () => (
  <View style={styles.memoList}>
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

    <View style={styles.memoListItem}>
      <Text>講座のアイテム</Text>
      <Text>2017/10/10</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    paddingTop: 78,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

export default MemoList;
