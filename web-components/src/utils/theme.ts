import {Color, CssClassMap} from '../interface';

/**
 * Create the color class for the component based color passed in.
 *
 * @param {Color | undefined | null} color
 * @return {CssClassMap | undefined}
 */
export const createColorClass = (color: Color | undefined | null): CssClassMap | undefined => {
  return (typeof  color === 'string' && color.length > 0) ? {
    'pax-color': true,
    [`pax-color--${color}`]: true
  } : undefined;
};
