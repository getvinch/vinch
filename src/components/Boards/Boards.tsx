import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function(props: {
  boards: {
    id: string;
    name: string;
  }[];
}) {
  return (
    <Paper>
      <List component="nav" aria-label="main mailbox folders">
        {props.boards.map(({ id, name }) => (
          <ListItem key={id} button={true}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
