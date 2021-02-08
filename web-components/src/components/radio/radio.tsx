import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State} from '@stencil/core';
import {StyleEventDetail} from "../../interface";
import {hostContext} from "../../utils/helpers";

@Component({
  tag: 'pax-radio',
  styleUrl: 'radio.css',
  shadow: true
})
export class Radio implements ComponentInterface {

  private radioGroup: HTMLPaxRadioGroupElement | null = null;

  @Element() el!: HTMLElement;


  // STATE ---------------------------------------------------------------------


  @State() hasKeyboardFocus: boolean = false;
  @State() hasMouseOver: boolean = false;
  @State() checked = false;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * The value of the radio, which is submitted with the form data.
   * @type {string}
   */
  @Prop() value: string;

  /**
   * If set, the user cannot interact with the checkbox component.
   * @type {boolean}
   */
  @Prop() disabled: boolean = false;


  // EVENTS---------------------------------------------------------------------


  /**
   * Gets emitted when the radio component has focus.
   */
  @Event() radioFocus: EventEmitter<void>;

  /**
   * Gets emitted when the radio component lost focus.
   */
  @Event() radioBlur: EventEmitter<void>;

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    const radioGroup = this.radioGroup = this.el.closest('pax-radio-group');
    if (radioGroup) {
      this.updateState();
      radioGroup.addEventListener('radioGroupChange', this.updateState);
    }
    this.emitStyle();
  }

  /**
   * Gets called every time the component is disconnected from the DOM.
   */
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      radioGroup.removeEventListener('radioGroupChange', this.updateState);
      this.radioGroup = null;
    }
  }


  // INTERNAL ------------------------------------------------------------------


  private emitStyle() {
    this.paxStyle.emit({
      'radio': true,
      'has-keyboard-focus': this.hasKeyboardFocus,
      'is-checked': this.checked,
      'is-disabled': this.disabled
    });
  }

  private updateState = () => {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this.value;
      this.emitStyle();
    }
  }

  private updateChecked = () => {
    if (this.radioGroup === null) {
      this.checked = true;
    } else {
      if (this.value) {
        this.radioGroup.value = this.value;
      }
    }
  }

  private handleMouseOver = () => {
    this.hasMouseOver = true;
  }

  private handleMouseOut = () => {
    this.hasMouseOver = false;
  }

  private handleClick = () => {
    this.updateChecked();
    this.hasKeyboardFocus = false;
  };

  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      this.updateChecked();
      evt.preventDefault();
    }
  }

  private handleFocus = () => {
    if (!this.hasMouseOver) {
      this.hasKeyboardFocus = true;
      this.emitStyle();
    }
    this.radioFocus.emit();
  }

  private handleBlur = () => {
    if (!this.hasMouseOver) {
      this.hasKeyboardFocus = false;
      this.emitStyle();
    }
    this.radioBlur.emit();
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    return (
      <Host
        role="radio"
        aria-checked={`${this.checked}`}
        aria-disabled={this.disabled ? 'true' : null}
        checked={this.checked}
        class={{
          'in-item': hostContext('pax-item', this.el),
          'has-keyboard-focus': this.hasKeyboardFocus
        }}
      >
        <svg class="radio-icon" viewBox="0 0 12.742 12.742">
          <path d="M0,0V16.02" transform="translate(12.035 12.035) rotate(135)"/>
          <path d="M0,0V16.02" transform="translate(12.035 0.707) rotate(45)"/>
        </svg>
        <button
          type="button"
          disabled={this.disabled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
        </button>
      </Host>
    )
  }

}
