import { addParameters } from '@storybook/html';

const SOURCE_REGEX = /^\(\) => [`'"](.*)['`"]$/;

export const parameters = {
  layout: 'centered',
    backgrounds: {
    values: [
      { name: 'claire', value: 'rgba(239, 243, 246, 1)' },
      { name: 'prune', value: 'rgba(59, 58, 83, 1)' },
    ],
  },
  options: {
    storySort: {
      order: ['Welcome', 'Usage', 'Branding', 'Components'],
    },
  },
};

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: {
    iframeHeight: '200px',
    transformSource: (src) => {
      const match = SOURCE_REGEX.exec(src);
      return match ? match[1] : src;
    },
  },
});
