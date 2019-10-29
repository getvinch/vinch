import React from 'react';
import Boards from './Boards';
import useGroups from '../../lib/hooks/useGroups';

export default function BoardsContainer() {
  const { data, loading, error } = useGroups();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Loading Boards</div>;
  }

  return <Boards boards={data} />;
}
