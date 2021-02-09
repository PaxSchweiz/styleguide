// set storybook main theme (on UI)

import { addons } from '@storybook/addons';
import paxTheme from './paxTheme';

addons.setConfig({
  theme: paxTheme
});