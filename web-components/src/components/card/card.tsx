import {Component, ComponentInterface, h, Host, Prop} from '@stencil/core';
import {Color} from '../../interface';
import {createColorClass} from '../../utils/theme';

@Component({
  tag: 'pax-card',
  styleUrl: './card.css',
  shadow: true
})
export class Card implements ComponentInterface {

  /**
   * The color of the border.
   * Options are: 'success' | 'warning' | 'danger' | 'dark' | 'light'
   * @type {Color}
   */
  @Prop() border: Color;

  /**
   * The text of the header.
   * @type {string}
   */
  @Prop() header: string;

  render() {
    return (
      <Host
        class={{
          ...createColorClass(this.border),
          'has-header': this.header && this.header.length > 0
        }}
      >
        {this.header
          ? <div class="header">{this.header}</div>
          : null
        }
        <slot/>
      </Host>
    );
  }
}
