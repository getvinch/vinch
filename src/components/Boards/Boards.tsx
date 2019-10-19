import React from 'react';
import useGroups from '../../lib/hooks/useGroups';

export default function Boards() {
  const { data, isLoading, error } = useGroups();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error Loading Boards</div>;
  }

  return (
    <div>
      {data.map(({ id, type, name }) => (
        <div key={id}>{`${id}:${type}:${name}`}</div>
      ))}
    </div>
  );
}
