import React from 'react';
import Boards from './Boards';
import { noop } from '../../constants';

export default {
  title: 'Boards',
};

export const Default = () => (
  <Boards
    boards={[
      {
        id: '1',
        name: 'Board A',
      },
      {
        id: '2',
        name: 'Board B',
      },
      {
        id: '3',
        name: 'Board C',
      },
      {
        id: '4',
        name: 'Board D',
      },
    ]}
    onAddBoard={noop}
    onUpdateBoard={noop}
  />
);
