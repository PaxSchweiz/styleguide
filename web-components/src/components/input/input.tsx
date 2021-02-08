import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch
} from '@stencil/core';
import {
  StyleEventDetail,
  TextFieldTypes
} from '../../interface';

export interface InputChangeEventDetail {
  value: string | undefined | null;
}

@Component({
  tag: 'pax-input',
  styleUrl: './input.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Input implements ComponentInterface {

  private nativeInput?: HTMLInputElement;


  // STATE ---------------------------------------------------------------------


  @State() hasFocus: boolean = false;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * If set, the user cannot interact with the input component.
   * @type {boolean}
   */
  @Prop() disabled: boolean = false;

  /**
   * If set, the user cannot change the value of the input component.
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
   * The type of the native input element.
   * Options are: `'email'` | `'number'` | `'password'` | `'search'` | `'tel'` | `'text'` | `'url'`.
   * @type {TextFieldTypes}
   */
  @Prop() type: TextFieldTypes = 'text';

  /**
   * The value of the input component.
   * @type {string|number}
   */
  @Prop({mutable: true}) value?: string | number | null = '';

  @Watch('value')
  protected valueChanged() {
    this.emitStyle();
    this.inputChanged.emit({
      value: this.value !== null ? this.getValue() : null
    })
  }


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted when the input component has focus.
   */
  @Event() inputFocused: EventEmitter<void>;

  /**
   * Gets emitted when the input component lost focus.
   */
  @Event() inputBlurred: EventEmitter<void>;

  /**
   * Gets emitted when the input component's value changed.
   */
  @Event() inputChanged: EventEmitter<InputChangeEventDetail>;

  /**
   * Gets emitted when a keyboard input occurred.
   */
  @Event() inputInput: EventEmitter<KeyboardEvent>;

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;


  // METHODS -------------------------------------------------------------------


  /**
   * When called focuses the native input element of the component.
   */
  @Method()
  async focusInput() {
    this.nativeInput.focus();
    this.nativeInput.select();
  }


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
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'is-disabled': this.disabled,
      'is-readonly': this.readonly,
      'is-invalid': this.invalid
    });
  }

  private handleFocus = () => {
    this.hasFocus = true;
    this.emitStyle();
    this.inputFocused.emit();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.emitStyle();
    this.inputBlurred.emit();
  }

  private handleInput = (evt: Event) => {
    const input = evt.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.inputInput.emit(evt as KeyboardEvent);
  }

  private getValue(): string {
    return typeof this.value === 'number'
      ? this.value.toString()
      : (this.value || '').toString()
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        }}
      >
        <input
          ref={input => this.nativeInput = input}
          name={this.name}
          disabled={this.disabled}
          readOnly={this.readonly}
          type={this.type}
          value={this.getValue()}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
        />
        {this.error !== undefined && this.error.length > 0
          ? <div class="error-message">{this.error}</div>
          : null
        }
      </Host>
    );
  }
}
