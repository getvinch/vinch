import React from 'react';
import Board from './Board';
import useGroup from '../../lib/hooks/useGroup';
import useCards from '../../lib/hooks/useCards';
import { Redirect } from 'react-router-dom';
import useAddCard from '../../lib/hooks/useAddCard';

interface Props {
  match: {
    params: {
      boardId: string;
    };
  };
}

export default function BoardContainer(props: Props) {
  const boardId = props.match.params.boardId;
  const { data, loading, error } = useGroup(props.match.params.boardId);
  const { data: cardsData } = useCards(boardId);
  const addCard = useAddCard();

  function onAddCard() {
    addCard({
      groupId: boardId,
      description: '',
    });
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  if (data && !loading && !error) {
    return <Board onAddCard={onAddCard} name={data.name} cards={cardsData} />;
  }

  return null;
}
