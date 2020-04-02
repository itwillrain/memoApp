import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { OriginalTheme } from '../styles/themes';

const styled = styledNative as Styled<OriginalTheme>;
const AppBar: FC = () => (
  <Container>
    <>
      <Text style={styles.appBarTitle}>TA CLOUD</Text>
    </>
  </Container>
);

const Container = styled.View`
  color: red;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 78;
  padding-top: 30;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AppBar;
