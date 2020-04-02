import React, { FC } from 'react';
import {} from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const MemoListScreen: FC = () => (
  <>
    <MemoList />
    <CircleButton name="plus" />
  </>
);

export default MemoListScreen;
