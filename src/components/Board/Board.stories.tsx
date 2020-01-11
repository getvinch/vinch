import React from 'react';
import Board from './Board';
import { noop } from '../../constants';

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
