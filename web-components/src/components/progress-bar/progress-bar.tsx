import {
  Component,
  ComponentInterface,
  h,
  Host,
  Prop
} from '@stencil/core';
import {Color} from '../../interface';
import {clamp} from '../../utils/helpers';
import {createColorClass} from '../../utils/theme';

@Component({
  tag: 'pax-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar implements ComponentInterface {

  /**
   * The value determines how much of the progress bar should display. The value
   * should be between 0 and 1.
   * @type {number}
   */
  @Prop() value: number = 0;

  /**
   * The color to use from the pax color palette. Options are: `'success'`,
   * `'warning'`, `'danger'`, `'dark'`, `'light'`
   * @type {Color}
   */
  @Prop() color?: Color;

  /**
   * Use inline layout.
   * @type {boolean}
   */
  @Prop() inline?: boolean;

  /**
   * Use compact design.
   * @type {boolean}
   */
  @Prop() compact?: boolean;

  render() {
    const finalValue: number = clamp(0, this.value, 1);

    return (
      <Host
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="1"
        class={{
          ...createColorClass(this.color),
          'progress-bar-inline': this.inline,
          'progress-bar-compact': this.compact
        }}
      >
        <div class="bar">
          <div class="progress-bar" style={{transform: `scaleX(${this.value})`}}/>
        </div>
        <div class="legend">
          <div class="label">
            <slot/>
          </div>
          <div class="value">
            <slot name="value-label">{finalValue * 100}%</slot>
          </div>
        </div>
      </Host>
    );
  }

}
