import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';
import { RootStackParamList } from '../../App';

type MemoDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoDetail'
>;

type Props = {
  navigation: MemoDetailScreenNavigationProp;
};

const styled = styledNative as Styled<OriginalTheme>;
const MemoDetailScreen: FC<Props> = ({ navigation }) => (
  <Container>
    <MemoHeader>
      <View>
        <MemoHeaderTitle>講座アイデア</MemoHeaderTitle>
        <MemoHeaderDate>2017/12/12</MemoHeaderDate>
      </View>
    </MemoHeader>

    <MemoContent>
      <Text>講座のアイデア</Text>
    </MemoContent>

    <CircleButton
      style={styles.editButton}
      color="white"
      name="pencil"
      onPress={() => {
        navigation.navigate('MemoEdit');
      }}
    />
  </Container>
);

const styles = StyleSheet.create({
  editButton: {
    top: 80,
  },
});

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
