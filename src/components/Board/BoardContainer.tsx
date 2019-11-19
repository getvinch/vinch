import React from 'react';
import Board from './Board';
import useGroup from '../../lib/hooks/useGroup';

interface Props {
  match: {
    params: {
      boardId: string;
    };
  };
}

export default function BoardContainer(props: Props) {
  const { data, loading, error } = useGroup(props.match.params.boardId);

  //TODO: Implement some sort of error handling
  if (data && !loading && !error) {
    return <Board data={data} />;
  }

  return null;
}
