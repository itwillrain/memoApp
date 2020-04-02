import React, { FC } from 'react';
import styledNative, { Styled } from '@emotion/native';
import CircleButton from '../elements/CircleButton';
import { OriginalTheme } from '../styles/themes';

const styled = styledNative as Styled<OriginalTheme>;
const MemoEditScreen: FC = () => (
  <Container>
    <MemoEditInput multiline value="Hi" />
    <CircleButton name="check" />
  </Container>
);
const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const MemoEditInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.white};
`;

export default MemoEditScreen;
