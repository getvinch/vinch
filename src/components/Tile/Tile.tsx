import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import * as S from './Tile.styles';

interface Props {
  id: string;
  name: string;
  link?: string;
}

export default function Tile(props: Props) {
  const headerNode = (
    <CardHeader
      avatar={<Avatar>{props.name ? props.name[0].toUpperCase() : ''}</Avatar>}
      title={props.name}
    />
  );

  return (
    <Grid item xs={6} sm={3}>
      <Card>
        {props.link ? (
          <CardActionArea>
            <S.MutedLink to={props.link}>{headerNode}</S.MutedLink>
          </CardActionArea>
        ) : (
          headerNode
        )}
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
