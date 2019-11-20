import React from 'react';
import useGroup, { UseGroupResult } from '../../lib/hooks/useGroup';
import BoardContainer from './BoardContainer';
import { GroupType } from '../../lib/types';
import renderWithRouter from '../../lib/test/renderWithRouter';

jest.mock('../../lib/hooks/useGroup', () => jest.fn());

describe('BoardContainer', () => {
  it('does not show board on loading', () => {
    (useGroup as jest.Mock).mockImplementation(
      (): UseGroupResult => ({
        data: undefined,
        error: undefined,
        loading: true,
      }),
    );

    const { queryByTestId } = renderWithRouter(
      <BoardContainer
        match={{
          params: {
            boardId: 'mockid',
          },
        }}
      />,
    );
    expect(queryByTestId(/board/)).toBeFalsy();
  });

  it('shows the board on success', () => {
    (useGroup as jest.Mock).mockImplementation(
      (): UseGroupResult => ({
        data: {
          id: 'mockid',
          name: 'mock group',
          type: GroupType.Board,
        },
        error: undefined,
        loading: false,
      }),
    );

    const { getByTestId } = renderWithRouter(
      <BoardContainer
        match={{
          params: {
            boardId: 'mockid',
          },
        }}
      />,
    );
    expect(getByTestId(/board/)).toBeTruthy();
  });

  it('redirects on error', () => {
    (useGroup as jest.Mock).mockImplementation(
      (): UseGroupResult => ({
        data: undefined,
        error: {
          message: 'oopsies',
        },
        loading: false,
      }),
    );

    const { history } = renderWithRouter(
      <BoardContainer
        match={{
          params: {
            boardId: 'mockid',
          },
        }}
      />,
    );

    expect(history.location.pathname).toEqual('/error');
  });
});
