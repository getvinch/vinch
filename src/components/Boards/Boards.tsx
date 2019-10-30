import React from 'react';
import Box from '@material-ui/core/Box';
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
}

export default function(props: Props) {
  const theme = useTheme();

  return (
    <>
      <Box m={theme.spacing(0.5)}>
        <Typography variant="h4" component="h1">
          Boards
        </Typography>
      </Box>
      <Divider />
      <Box m={theme.spacing(0.5)}>
        <Grid container spacing={4}>
          {props.boards.map(board => {
            return <BoardTile key={board.id} {...board} />;
          })}
        </Grid>
      </Box>
    </>
  );
}
