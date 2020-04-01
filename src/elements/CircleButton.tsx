import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled, { css } from '@emotion/native';

const CircleButton: FC = () => (
  <View style={styles.circleButton}>
    <Text style={styles.circleButtonTitle}>+</Text>
  </View>
);

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    backgroundColor: 'red',
    height: 40,
    width: 40,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    color: '#fff',
  },
});

export default CircleButton;
