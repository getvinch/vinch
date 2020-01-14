import React, { useEffect, useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import * as S from './Tile.styles';
import Input from '@material-ui/core/Input';
import { useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  id: string;
  name: string;
  link?: string;
  onSubmit?: (args: { id: string; value: string }) => void;
}

export default function Tile(props: Props) {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [nextName, setNextName] = useState(name);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  const handleOnEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNextName(e.target.value);
  };

  const handleCancelClick = () => {
    setName(name);
    setNextName(name);
    setIsEditing(false);
  };

  const handleConfirmClick = () => {
    if (props.onSubmit) {
      props.onSubmit({ id: props.id, value: nextName });
    }
    setName(nextName);
    setIsEditing(false);
  };

  const headerNode = (
    <CardHeader
      avatar={<Avatar>{props.name ? props.name[0].toUpperCase() : ''}</Avatar>}
      title={
        isEditing ? (
          <FormControl>
            <Input
              autoFocus={true}
              color="primary"
              disableUnderline={true}
              fullWidth={true}
              placeholder={props.name}
              inputProps={{ style: theme.typography.body2 }}
              onChange={handleNameChange}
              value={nextName}
            />
          </FormControl>
        ) : (
          name
        )
      }
    />
  );

  return (
    <Grid item xs={6} sm={3}>
      <Card raised={isEditing}>
        <form noValidate autoComplete="off">
          {props.link && !isEditing ? (
            <CardActionArea>
              <S.MutedLink to={props.link}>{headerNode}</S.MutedLink>
            </CardActionArea>
          ) : (
            headerNode
          )}
          {isEditing ? (
            <CardActions>
              <Button color="primary" size="small" onClick={handleConfirmClick}>
                Confirm
              </Button>
              <Button
                onClick={handleCancelClick}
                size="small"
                color="secondary"
              >
                Cancel
              </Button>
            </CardActions>
          ) : (
            <CardActions>
              <Button size="small" onClick={handleOnEditClick}>
                Edit
              </Button>
              <Button size="small" color="secondary">
                Delete
              </Button>
            </CardActions>
          )}
        </form>
      </Card>
    </Grid>
  );
}
