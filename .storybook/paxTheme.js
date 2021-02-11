// Pax Style for Storybook

import { create } from '@storybook/theming';
import { color } from '../stories/branding/pax-variables'

export default create({
  base: 'dark',

  colorPrimary: 'rgba(140, 205, 15, 1)',
  colorSecondary: 'rgba(59, 58, 83, 1)',

  // UI
  appBg: 'rgba(59, 59, 59, 1)',
  appContentBg: '#FFFFFF',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Source+Sans+Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: color.pax_gris45,
  textInverseColor: color.pax_orange,

  // Toolbar default and active colors
  barTextColor: 'rgba(59, 58, 83, 1)',
  barSelectedColor: '#000000',
  barBg: 'rgba(255,255,255,0.9)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Pax Styleguide',
  brandUrl: 'https://www.pax.ch',
  brandImage: 'https://www.pax.ch/Assets/img/sprites/pax_v_neg_rgb_gruen_claim_d.png'
});