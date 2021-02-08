import {Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch} from '@stencil/core';
import {CheckboxIcon, StyleEventDetail} from '../../interface';
import {hostContext, renderHiddenInput} from '../../utils/helpers';
import {CheckboxChangeEventInterface} from './checkbox.interface';

@Component({
  tag: 'pax-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true
})
export class Checkbox {

  @Element() el!: HTMLElement;


  // STATE ---------------------------------------------------------------------


  @State() hasKeyboardFocus: boolean = false;
  @State() hasMouseOver: boolean = false;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * The value of the checkbox, which is submitted with the form data.
   * @type {string}
   */
  @Prop() value: string = 'on';

  /**
   * If set, the user cannot interact with the checkbox component.
   * @type {boolean}
   */
  @Prop() disabled: boolean = false;

  /**
   * The type of the checkbox icon.
   * Options are: `'checkbox'` | `'switch'`. Defaults to `'checkbox'`
   * @type {CheckboxIcon}
   */
  @Prop() icon: CheckboxIcon = 'checkbox';

  /**
   * If set, the checkbox is selected.
   * @type {boolean}
   */
  @Prop({mutable: true}) checked: boolean = false;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.checkboxChange.emit({
      checked: isChecked,
      value: this.value
    });
  }


  // EVENTS---------------------------------------------------------------------


  /**
   * Gets emitted when the checkbox component has focus.
   */
  @Event() checkboxFocus: EventEmitter<void>;

  /**
   * Gets emitted when the checkbox component lost focus.
   */
  @Event() checkboxBlur: EventEmitter<void>;

  /**
   * Gets emitted when the checked property has changed.
   */
  @Event() checkboxChange: EventEmitter<CheckboxChangeEventInterface>;

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    this.emitStyle();
  }


  // INTERNAL ------------------------------------------------------------------


  private emitStyle() {
    this.paxStyle.emit({
      'checkbox': true,
      'checkbox-switch': this.icon === 'switch',
      'has-keyboard-focus': this.hasKeyboardFocus,
      'is-checked': this.checked,
      'is-disabled': this.disabled
    });
  }

  private handleMouseOver = () => {
    this.hasMouseOver = true;
  }

  private handleMouseOut = () => {
    this.hasMouseOver = false;
  }

  private handleClick = () => {
    this.checked = !this.checked;
    this.hasKeyboardFocus = false;
    this.emitStyle();
  };

  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      this.checked = !this.checked;
      evt.preventDefault();
    }
  }

  private handleFocus = () => {
    if (!this.hasMouseOver) {
      this.hasKeyboardFocus = true;
      this.emitStyle();
    }
    this.checkboxFocus.emit();
  };

  private handleBlur = () => {
    if (!this.hasMouseOver) {
      this.hasKeyboardFocus = false;
      this.emitStyle();
    }
    this.checkboxBlur.emit();
  };


  // MARKUP --------------------------------------------------------------------


  /**
   * Returns the markup for the checkbox component.
   *
   * Note that the checkbox is not a real checkbox input (`<input type="checkbox"/>`),
   * but rather a combination of a button (the visual part of the checkbox) and
   * an hidden input element (that is submitted with the form data).
   */
  render() {
    let svg: string;

    if (this.icon === 'switch') {
      svg = (
        <div class="switch-icon"/>
      );
    } else {
      svg = (
        <svg class="checkbox-icon" viewBox="0 0 12.742 12.742">
          <path d="M0,0V16.02" transform="translate(12.035 12.035) rotate(135)"/>
          <path d="M0,0V16.02" transform="translate(12.035 0.707) rotate(45)"/>
        </svg>
      );
    }

    if (this.name) {
      renderHiddenInput(true, this.el, this.name, (this.checked ? this.value : ''), this.disabled);
    }

    return (
      <Host
        role="checkbox"
        aria-checked={`${this.checked}`}
        aria-disabled={this.disabled ? 'true' : null}
        checked={this.checked}
        class={{
          'in-item': hostContext('pax-item', this.el),
          'has-keyboard-focus': this.hasKeyboardFocus
        }}
      >
        {svg}
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
