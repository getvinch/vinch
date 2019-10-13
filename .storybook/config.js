import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.{ts,tsx}
configure(require.context('../src/', true, /\.stories\.tsx?$/), module);
