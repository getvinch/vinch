import React from 'react';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  name: string;
}

export default function Board(props: Props) {
  const theme = useTheme();

  return (
    <Box data-testid="board">
      <Box m={theme.spacing(0.5)}>
        <Typography variant="h4" component="h1">
          {props.name}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}
