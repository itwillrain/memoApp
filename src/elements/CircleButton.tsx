import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { OriginalTheme } from '../styles/themes';

const CircleButton: FC = () => (
  <Circle>
    <Text style={styles.circleButtonTitle}>+</Text>
  </Circle>
);
const styled = styledNative as Styled<OriginalTheme>;
const Circle = styled.View`
  background-color: ${(props) => props.theme.colors.accent};
  position: absolute;
  bottom: 32;
  right: 24;
  height: 40;
  width: 40;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  circleButtonTitle: {
    color: '#fff',
  },
});

export default CircleButton;
