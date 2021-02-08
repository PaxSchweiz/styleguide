import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop} from '@stencil/core';
import {HTMLStencilElement} from '@stencil/core/internal';
import {ButtonTypes, Fill, Mode} from '../../interface';

@Component({
  tag: 'pax-button',
  styleUrl: 'button.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Button implements ComponentInterface {

  @Element() hostElement: HTMLStencilElement;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * If `true`, the user cannot interact with the button component.
   * @type {boolean}
   */
  @Prop() disabled: boolean;

  /**
   * The type of button that should be displayed.
   * Options are: `'clear'` or `'outline'`
   * @type {string}
   */
  @Prop() fill: Fill;

  /**
   * The mode changes the appearance of the button depending on the overall theme.
   * Options are: `'light'` or `'dark'`
   * @type {Mode}
   */
  @Prop() mode: Mode;

  /**
   * The type of the native button that gets rendered.
   * Options are: `'submit'` or `'reset'`
   * @type {string}
   */
  @Prop() type: ButtonTypes;


  // EVENTS --------------------------------------------------------------------


  /**
   * Emitted when the button lost focus.
   */
  @Event() buttonBlur: EventEmitter<void>;

  /**
   * Emitted when the button has focus.
   */
  @Event() buttonFocus: EventEmitter<void>;


  // INTERNAL ------------------------------------------------------------------


  // TODO: Submit form outside of shadow DOM when button type is "submit"

  private get hasIconOnly() {
    return !!this.hostElement.querySelector('pax-icon[slot="icon-only"]');
  }

  private handleFocus = () => {
    this.buttonFocus.emit();
  };

  private handleBlur = () => {
    this.buttonBlur.emit();
  };


  // MARKUP --------------------------------------------------------------------


  render() {
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          ['button-disabled']: this.disabled,
          [`button-${this.fill}`]: this.fill ? true : null,
          ['button-icon']: this.hasIconOnly,
          [`button-${this.mode}-mode`]: this.mode ? true : null
        }}
      >
        <button
          class="button-native"
          type={this.type !== undefined ? this.type : null}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          disabled={this.disabled ? true : null}
        >
          <slot name="icon-only"/>
          <slot name="start"/>
          <slot/>
        </button>
      </Host>
    );
  }

}
