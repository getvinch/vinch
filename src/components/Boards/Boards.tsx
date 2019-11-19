import React from 'react';
import Box from '@material-ui/core/Box';
import * as S from './Boards.styles';
import { useTheme } from '@material-ui/core/styles';
import BoardTile from './components/BoardTile';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

interface Props {
  boards: {
    id: string;
    name: string;
  }[];
  onAddBoard: () => void;
}

export default function(props: Props) {
  const theme = useTheme();
  const addButtonSpacing = theme.spacing(1);

  return (
    <>
      <Box m={theme.spacing(0.5)}>
        <Typography variant="h4" component="h1">
          Boards
        </Typography>
      </Box>
      <Divider />
      <Box m={theme.spacing(0.5)} pb={addButtonSpacing}>
        <Grid container spacing={4}>
          {props.boards.map(board => (
            <BoardTile key={board.id} {...board} />
          ))}
        </Grid>
        <Box display="flex" justifyContent="flex-end">
          <S.AddButton
            color="primary"
            aria-label="add"
            spacing={theme.spacing(2)}
            onClick={props.onAddBoard}
            variant="extended"
          >
            <S.AddButtonIcon spacing={addButtonSpacing} />
            Create New Board
          </S.AddButton>
        </Box>
      </Box>
    </>
  );
}
