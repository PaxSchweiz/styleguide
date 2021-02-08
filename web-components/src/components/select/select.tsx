import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Method, Prop, State} from '@stencil/core';
import {StyleEventDetail} from '../../interface';
import {InputChangeEventDetail} from '../input/input';
import {renderHiddenInput} from "../../utils/helpers";

export interface SelectOptionInterface {
  text: string;
  value: string;
  selected: boolean;
  disabled: boolean;
  abbreviation: string;
}

@Component({
  tag: 'pax-select',
  styleUrl: 'select.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Select implements ComponentInterface {

  private nativeInput?: HTMLInputElement;
  private initialValue: string;

  /**
   * The host element.
   * @type {HTMLElement}
   */
  @Element() el!: HTMLElement;


  // STATE ---------------------------------------------------------------------


  @State() hasFocus: boolean = false;
  @State() options: SelectOptionInterface[] = [];
  @State() selectedOption: SelectOptionInterface = null;
  @State() pickerHidden: boolean = true;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * If set, the user cannot interact with the select component.
   * @type {boolean}
   */
  @Prop() disabled: boolean = false;

  /**
   * If set, the user cannot change the value of the select component.
   * @type {boolean}
   */
  @Prop() readonly: boolean = false;

  /**
   * If set, the component is visually marked as invalid.
   * @type {boolean}
   */
  @Prop() invalid: boolean = false;

  /**
   * The error message that is displayed next to the component.
   * @type {string}
   */
  @Prop() error: string;

  /**
   * The value of the select component.
   * @type {string}
   */
  @Prop({mutable: true}) value: string;


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted when the select component has focus.
   */
  @Event() selectFocus: EventEmitter<void>;

  private emitFocus() {
    this.selectFocus.emit();
  }

  /**
   * Gets emitted when the select component lost focus.
   */
  @Event() selectBlur: EventEmitter<void>;

  private emitBlur() {
    this.selectBlur.emit();
  }

  /**
   * Gets emitted when the select component's value changed.
   */
  @Event() selectChange: EventEmitter<InputChangeEventDetail>;

  private emitChange() {
    if (this.initialValue !== this.value) {
      this.initialValue = this.value;
      this.selectChange.emit({
        value: this.value !== null ? this.getValue() : null
      });
    }
  }

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;

  private emitStyle() {
    this.paxStyle.emit({
      'select': true,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'is-disabled': this.disabled,
      'is-readonly': this.readonly,
      'is-invalid': this.invalid
    });
  }


  // METHODS -------------------------------------------------------------------


  /**
   * When called focuses the native input element of the component.
   */
  @Method()
  async focusInput() {
    this.nativeInput.focus();
    if (this.readonly) this.nativeInput.select();
    if (!this.disabled && !this.readonly) this.openPicker();
  }


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {
    this.renderOptions();

    // set value if provided
    if (this.selectedOption) {
      this.value = this.getValue();
    }

    this.initialValue = this.value;
    this.el.ownerDocument.addEventListener('mousedown', this.onOutsideClick, false);

    this.emitStyle();
  }

  /**
   * Gets called every time the component is disconnected from the DOM.
   */
  disconnectedCallback() {
    this.el.ownerDocument.removeEventListener('mousedown', this.onOutsideClick, false);
  }


  // INTERNAL ------------------------------------------------------------------


  private renderOptions() {
    this.options = [];

    const selectOptionElements: HTMLPaxSelectOptionElement[] = this.getOptions();

    for (let i = 0; i < selectOptionElements.length; i++) {
      let option: SelectOptionInterface = {
        text: selectOptionElements[i].textContent,
        value: selectOptionElements[i].value,
        selected: selectOptionElements[i].selected,
        disabled: selectOptionElements[i].disabled,
        abbreviation: selectOptionElements[i].abbreviation
      };

      this.options = [...this.options, option];

      if (option.selected) {
        this.selectedOption = option;
      }
    }
  }

  private getOptions(): HTMLPaxSelectOptionElement[] {
    return Array.from(this.el.querySelectorAll('pax-select-option'));
  }

  private handleFocus = () => {
    this.hasFocus = true;
    this.emitStyle();
    this.emitFocus();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    if (this.pickerHidden) {
      this.emitStyle();
      this.emitBlur();
    }
  }

  private handleClick = () => {
    if (!this.readonly) {
      if (this.pickerHidden) {
        this.openPicker();
      } else {
        this.hidePicker();
        this.nativeInput.blur();
      }
    }
  }

  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Tab') {
      this.hidePicker();
      this.emitStyle();
    }
  }

  private handleOptionClick = (item: SelectOptionInterface) => {
    if (item.disabled) return false;
    if (this.selectedOption) this.selectedOption.selected = false;
    this.selectedOption = item;
    this.selectedOption.selected = true;
    this.value = this.getValue();
    this.hidePicker();
    this.emitChange();
    this.emitBlur();
    this.emitStyle();
  }

  private getValue(): string {
    return (this.selectedOption?.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  private openPicker() {
    this.pickerHidden = false;
  }

  private hidePicker() {
    this.pickerHidden = true;
  }

  private onOutsideClick = (e) => {
    if (this.el.contains(e.target)) return;
    else {
      this.hidePicker();
      this.emitStyle();
    }
  };


  // MARKUP --------------------------------------------------------------------


  render() {
    const selectedOption = this.selectedOption ? this.selectedOption.text : '';

    const options = (
      <pax-list>
        {this.options.map((item: SelectOptionInterface) =>
          <pax-item
            class={{
              'selected': item.selected ? true : null,
              'disabled': item.disabled ? true : null
            }}
            onClick={() => this.handleOptionClick(item)}
          >
            {item.text}
            {item.abbreviation ?
              <span slot="end">{item.abbreviation}</span> : null}
          </pax-item>
        )}
      </pax-list>
    );

    // render a hidden input element in the global DOM that gets submitted as form data
    if (this.name) {
      renderHiddenInput(true, this.el, this.name, this.getValue(), this.disabled);
    }

    return (
      <Host
        role="combobox"
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          'picker-open': !this.pickerHidden,
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        }}
      >
        <input
          type="text"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          disabled={this.disabled}
          readonly={!this.disabled}
          value={selectedOption}
          ref={(el) => this.nativeInput = el as HTMLInputElement}
        />
        <svg class="select-icon" width="17" height="9.175" viewBox="0 0 17 9.175">
          <path
            d="M8.978,8.979,16.8,1.155A.677.677,0,1,0,15.845.2L8.5,7.542,1.157.2A.679.679,0,0,0,0,.675a.667.667,0,0,0,.2.477L8.023,8.974a.673.673,0,0,0,.955.006Z"/>
        </svg>
        {this.error !== undefined && this.error.length > 0
          ? <div class="error-message">{this.error}</div>
          : null
        }
        <div class="picker" hidden={this.pickerHidden}>
          {options}
        </div>
      </Host>
    )
  }
}
