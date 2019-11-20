import React from 'react';
import Board from './Board';
import useGroup from '../../lib/hooks/useGroup';
import { Redirect } from 'react-router-dom';

interface Props {
  match: {
    params: {
      boardId: string;
    };
  };
}

export default function BoardContainer(props: Props) {
  const { data, loading, error } = useGroup(props.match.params.boardId);

  if (error) {
    return <Redirect to="/error" />;
  }

  if (data && !loading && !error) {
    return <Board name={data.name} />;
  }

  return null;
}
