import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch
} from '@stencil/core';
import {StyleEventDetail} from "../../interface";

export interface TextareaChangeEventDetail {
  value: string | undefined | null;
}

@Component({
  tag: 'pax-textarea',
  styleUrl: './textarea.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Textarea implements ComponentInterface {

  private nativeInput?: HTMLTextAreaElement;

  @Element() el!: HTMLElement;


  // STATE ---------------------------------------------------------------------


  @State() hasFocus: boolean = false;


  // PROPERTIES ----------------------------------------------------------------


  /**
   * The name of the hidden input, which is submitted with the form data.
   * @type {string}
   */
  @Prop() name: string;

  /**
   * The placeholder message that should be displayed when not value is set.
   * @type {string}
   */
  @Prop() placeholder: string;

  /**
   * If set, the user cannot interact with the textarea component.
   * @type {boolean}
   */
  @Prop() disabled: boolean = false;

  /**
   * If set, the user cannot change the value of the textarea component.
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
   * The initial height of the textarea component defined in rows.
   * @type {number}
   */
  @Prop() rows: number = 3;

  /**
   * The value of the textarea component.
   * @type {string}
   */
  @Prop({mutable: true}) value?: string | null = '';

  /**
   * Updates the native textarea element when the value changes.
   */
  @Watch('value')
  protected valueChanged() {
    const value = this.getValue();
    if (this.nativeInput && this.nativeInput.value !== value) {
      this.nativeInput.value = value;
      this.emitStyle();
      this.textareaChanged.emit({value: value});
    }
  }


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted when the textarea component has focus.
   */
  @Event() textareaFocused: EventEmitter<void>;

  /**
   * Gets emitted when the textarea component lost focus.
   */
  @Event() textareaBlurred: EventEmitter<void>;

  /**
   * Gets emitted when the textarea component's value changed.
   */
  @Event() textareaChanged: EventEmitter<TextareaChangeEventDetail>;

  /**
   * Gets emitted when a keyboard input occurred.
   */
  @Event() textareaInput: EventEmitter<KeyboardEvent>;

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;


  // METHODS -------------------------------------------------------------------


  /**
   * When called focuses the native textarea element of the component.
   */
  @Method()
  async focusInput() {
    this.nativeInput.focus();
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
    this.textareaFocused.emit();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.emitStyle();
    this.textareaBlurred.emit();
  }

  private handleInput = (evt: KeyboardEvent) => {
    if (this.nativeInput) {
      this.value = this.nativeInput.value;
    }
    this.textareaInput.emit(evt as KeyboardEvent);
  }

  private getValue(): string {
    return this.value || '';
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
          'has-value': !!this.getValue(),
          'has-focus': this.hasFocus
        }}
      >
        <textarea
          ref={textarea => this.nativeInput = textarea}
          name={this.name}
          placeholder={this.placeholder}
          rows={this.rows}
          disabled={this.disabled}
          readOnly={this.readonly}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
        >
          {this.getValue()}
        </textarea>
        {this.error !== undefined && this.error.length > 0
          ? <div class="error-message">{this.error}</div>
          : null
        }
      </Host>
    );
  }
}
