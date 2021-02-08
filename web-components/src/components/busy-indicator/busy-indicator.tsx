import {Component, h, Host, Prop} from '@stencil/core';
import {Color} from '../../interface';
import {createColorClass} from '../../utils/theme';

@Component({
  tag: 'pax-busy-indicator',
  styleUrl: 'busy-indicator.css',
  shadow: true
})
export class BusyIndicator {

  /**
   * If set, the busy indicator component is hidden.
   */
  @Prop() hidden: boolean = false;

  /**
   * The color to use from the pax color palette.
   * Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'`.
   */
  @Prop() color?: Color;

  render() {
    return (
      <Host
        hidden={this.hidden}
        class={{
          ...createColorClass(this.color)
        }}>
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20"/>
        </svg>
      </Host>
    );
  }

}
