import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import * as S from './BoardTile.styles';

interface Props {
  id: string;
  name: string;
}

export default function BoardTile(props: Props) {
  return (
    <Grid item xs={6} sm={3}>
      <Card>
        <CardActionArea>
          <S.MutedLink to={`boards/${props.id}`}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {props.name ? props.name[0].toUpperCase() : ''}
                </Avatar>
              }
              title={props.name}
            />
          </S.MutedLink>
        </CardActionArea>
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
