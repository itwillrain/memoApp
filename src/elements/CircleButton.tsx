import React, { FC } from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { OriginalTheme, theme } from '../styles/themes';

interface CircleButton {
  style?: ViewStyle;
  color?: string;
}
const CircleButton: FC<CircleButton> = ({ style, color }) => {
  let bgColor = theme.colors.primaryDarken1;
  let textColor = theme.colors.white;
  if (color === 'white') {
    bgColor = theme.colors.white;
    textColor = theme.colors.primaryDarken1;
  }

  return (
    <Circle style={[style, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleButtonTitle, { color: textColor }]}>+</Text>
    </Circle>
  );
};
const styled = styledNative as Styled<OriginalTheme>;
const Circle = styled.View`
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
  circleButtonTitle: {},
});

export default CircleButton;
