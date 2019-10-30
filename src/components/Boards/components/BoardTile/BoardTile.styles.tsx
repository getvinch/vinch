import { styled } from '@material-ui/core/styles';
import Card, { CardProps } from '@material-ui/core/Card';

interface Props {
  id: string;
  name: string;
}

type BoardTileProps = CardProps & {
  spacing: number;
};

const BoardTile = styled(Card)({}) as React.ComponentType<BoardTileProps>;

export { BoardTile };
