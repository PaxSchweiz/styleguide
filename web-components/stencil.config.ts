import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pax',
  globalStyle: 'src/globals/main.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    }
  ],
};
