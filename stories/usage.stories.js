import { withLinks } from '@storybook/addon-links';

import usage from './usage.html';

export default {
  title: 'Usage',
  decorators: [withLinks],
};

export const Usage = () => usage;
