import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import { CardsDocumentData } from '../../lib/hooks/useCards';
import Typography from '@material-ui/core/Typography';

import Tile from '../Tile';
import * as S from './Board.styles';

interface Props {
  name: string;
  cards: CardsDocumentData[];
  onAddCard: () => void;
}

export default function Board(props: Props) {
  const theme = useTheme();
  const addButtonSpacing = theme.spacing(1);

  return (
    <Box data-testid="board">
      <Box m={theme.spacing(0.5)}>
        <Typography variant="h4" component="h1">
          {props.name}
        </Typography>
      </Box>
      <Divider />
      <Box m={theme.spacing(0.5)} pb={addButtonSpacing}>
        <Grid container spacing={4}>
          {props.cards.map(card => (
            <Tile key={card.id} id={card.id} name={card.description} />
          ))}
        </Grid>
        <S.AddButton
          color="primary"
          aria-label="add"
          spacing={theme.spacing(2)}
          onClick={props.onAddCard}
          variant="extended"
        >
          <S.AddButtonIcon spacing={addButtonSpacing} />
          Add a Card
        </S.AddButton>
      </Box>
    </Box>
  );
}
