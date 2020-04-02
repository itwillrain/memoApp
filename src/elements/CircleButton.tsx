import React, { FC } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import styledNative, { Styled } from '@emotion/native';
import { useFonts } from '@use-expo/font';
import { createIconSet } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import fontawesomeConfig from '../fontawesome.config.json';
import { OriginalTheme, theme } from '../styles/themes';

interface CircleButton {
  style?: ViewStyle;
  color?: string;
  name?: string;
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fontAwesome = require('../../assets/fonts/fa-solid-900.ttf');

const CustomIcon = createIconSet(fontawesomeConfig, 'FontAwesome', fontAwesome);

const CircleButton: FC<CircleButton> = (props) => {
  const { color, style, name } = props;
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    FontAwesome: require('../../assets/fonts/fa-solid-900.ttf'),
  });

  let bgColor = theme.colors.primaryDarken1;
  let textColor = theme.colors.white;
  if (color === 'white') {
    bgColor = theme.colors.white;
    textColor = theme.colors.primaryDarken1;
  }
  if (!fontsLoaded) {
    return <AppLoading />;
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <Circle style={[style, { backgroundColor: bgColor }]}>
        <CustomIcon
          name={name}
          style={[
            styles.circleButtonTitle,
            { color: textColor, fontFamily: 'FontAwesome' },
          ]}
        />
      </Circle>
    );
  }
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
  shadow-offset: 0;
  shadow-opacity: 0.3;
  shadow-radius: 5;
`;

const styles = StyleSheet.create({
  circleButtonTitle: {},
});

export default CircleButton;
