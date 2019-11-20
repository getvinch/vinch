import React from 'react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Router } from 'react-router';
import { render } from '@testing-library/react';

export default function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: {
    route?: string;
    history?: MemoryHistory;
  } = {},
) {
  const Wrapper = (props: { children: any }) => (
    <Router history={history}>{props.children}</Router>
  );

  return {
    ...render(<Wrapper>{ui}</Wrapper>),
    history,
  };
}
