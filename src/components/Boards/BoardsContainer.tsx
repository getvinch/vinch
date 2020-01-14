import React from 'react';
import { useHistory } from 'react-router-dom';

import Boards from './Boards';
import useGroups from '../../lib/hooks/useGroups';
import useUpdateGroups from '../../lib/hooks/useUpdateGroups';
import { GroupType } from '../../lib/types';

export default function BoardsContainer() {
  const history = useHistory();
  const { data, loading, error } = useGroups();
  const updateBoard = useUpdateGroups();

  async function onAddBoard() {
    const result = await updateBoard({
      type: GroupType.Board,
      name: `Board - ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })}`,
    });

    history.push(`boards/${result.id}`);
  }

  function onUpdateBoard({ id, value }: { id: string; value: string }) {
    updateBoard({
      id,
      type: GroupType.Board,
      name: value,
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Loading Boards</div>;
  }

  return (
    <Boards
      boards={data}
      onUpdateBoard={onUpdateBoard}
      onAddBoard={onAddBoard}
    />
  );
}
