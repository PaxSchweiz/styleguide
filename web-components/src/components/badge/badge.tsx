import {Component, h, Host, Prop} from '@stencil/core';
import {Color} from '../../interface';
import {createColorClass} from '../../utils/theme';

@Component({
  tag: 'pax-badge',
  styleUrl: 'badge.css',
  shadow: true
})
export class Badge {

  /**
   * The color to use from the pax color palette.
   * Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'`, `'ghost'`
   */
  @Prop() color?: Color;

  render() {
    return (
      <Host
        class={{
          ...createColorClass(this.color)
        }}>
        <slot/>
      </Host>
    );
  }

}
