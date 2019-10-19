import React from 'react';
import useGroups, { GroupState } from '../../lib/hooks/useGroups';
import Boards from './Boards';
import { render } from '@testing-library/react';

jest.mock('../../lib/hooks/useGroups', () => jest.fn());

describe('Boards', () => {
  it('renders loading when useGroups is loading', () => {
    (useGroups as jest.Mock).mockImplementation(
      (): GroupState => ({
        data: [],
        error: {},
        isLoading: true,
        isLoaded: false,
      }),
    );

    const { getByText } = render(<Boards />);
    expect(getByText(/Loading.../)).toBeTruthy();
  });

  it('renders error when useGroups returns error', () => {
    (useGroups as jest.Mock).mockImplementation(
      (): GroupState => ({
        data: [],
        error: {},
        isLoading: false,
        isLoaded: true,
      }),
    );

    const { getByText } = render(<Boards />);
    expect(getByText(/Error Loading Boards/)).toBeTruthy();
  });

  it('renders component when useGroups returns data', () => {
    (useGroups as jest.Mock).mockImplementation(
      (): GroupState => ({
        data: [
          {
            id: 'mockId',
            type: 'mockType',
            name: 'mockName',
          },
        ],
        error: false,
        isLoading: false,
        isLoaded: true,
      }),
    );

    const { getByText } = render(<Boards />);
    expect(getByText(/mockId/)).toBeTruthy();
  });
});
