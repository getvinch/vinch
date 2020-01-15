import React from 'react';

import { noop } from '../../constants';
import Board from './Board';

export default {
  title: 'Board',
};

export const Default = () => (
  <Board
    cards={[{ id: 'abc123', description: 'my test story' }]}
    onAddCard={noop}
    name="Great Red Board... argh"
  />
);
