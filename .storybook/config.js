import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

// automatically import all files ending in *.stories.{ts,tsx}
configure(require.context('../src/', true, /\.stories\.tsx?$/), module);
