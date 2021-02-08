import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Method, Prop, State} from '@stencil/core';
import {
  addMonths,
  addYears,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getMonth,
  getYear,
  isSameDay,
  isValid,
  parse,
  set,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subMonths,
  subYears
} from 'date-fns';
import {de, fr, it} from 'date-fns/locale';
import {DatepickerMode, Locale, StyleEventDetail} from '../../interface';
import {InputChangeEventDetail} from "../input/input";
import {renderHiddenInput} from "../../utils/helpers";

@Component({
  tag: 'pax-datepicker',
  styleUrl: './datepicker.css',
  scoped: true // because that way it can be used in a form without any hassle
})
export class Datepicker implements ComponentInterface {

  private initialValue: string;
  private dateContext: Date = new Date();
  private nativeInput: HTMLInputElement;
  private today: Date = new Date();
  private locale;

  @Element() el!: HTMLElement;


  // STATE ---------------------------------------------------------------------


  @State() dates: { date: Date, className: string }[] = [];
  @State() daysOfWeek: string[] = []; // M, D, M, D, F, S, S
  @State() mode: DatepickerMode = 'days';
  @State() months: { date: Date, className: string }[] = [];
  @State() pickerHidden: boolean = true;
  @State() selectedDate: Date;
  @State() years: { date: Date, className: string }[] = [];
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
   * The locale to use. Options are: `'de'`, `'fr'` or `'it'`.
   * @type {Locale}
   */
  @Prop({attribute: 'locale'}) localeProp: Locale = 'de';

  /**
   * The value of the datepicker component.
   * @type {string|number}
   */
  @Prop({mutable: true}) value: string;


  // EVENTS --------------------------------------------------------------------


  /**
   * Gets emitted when the input component has focus.
   */
  @Event() datepickerFocused: EventEmitter<void>;

  private emitFocus() {
    this.datepickerFocused.emit();
  }

  /**
   * Gets emitted when the input component lost focus.
   */
  @Event() datepickerBlurred: EventEmitter<void>;

  private emitBlur() {
    this.datepickerBlurred.emit();
  }

  /**
   * Gets emitted when the datepicker component's value changed.
   */
  @Event() datepickerChanged: EventEmitter<InputChangeEventDetail>;

  private emitChange() {
    if (this.initialValue !== this.value) {
      this.initialValue = this.value;
      this.datepickerChanged.emit({
        value: this.value !== null ? this.getSelectedDate() : null
      });
    }
  }

  /**
   * Gets emitted when a keyboard input occurred.
   */
  @Event() datepickerInput: EventEmitter<KeyboardEvent>;

  private emitInput(evt: KeyboardEvent) {
    this.datepickerInput.emit(evt);
  }

  /**
   * Gets emitted when the styles change.
   */
  @Event() paxStyle!: EventEmitter<StyleEventDetail>;

  private emitStyle() {
    this.paxStyle.emit({
      'datepicker': true,
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
    this.nativeInput.select();
  }


  // LIFECYCLE -----------------------------------------------------------------


  /**
   * Gets called every time the component is connected to the DOM.
   */
  connectedCallback() {

    // set locale
    if (this.localeProp === 'de') this.locale = de;
    else if (this.localeProp === 'fr') this.locale = fr;
    else if (this.localeProp === 'it') this.locale = it;

    // set value if provided
    if (this.value) {
      const date: Date = parse(this.value, 'dd.MM.yyyy', new Date(), {locale: this.locale});
      if (!isNaN(date.getDate())) {
        this.selectedDate = date;
        this.value = this.getSelectedDate();
      } else {
        console.warn(`The value provided for the <pax-datepicker> is not valid: "${this.value}"`);
        this.value = '';
      }
    }

    this.initialValue = this.value;
    this.el.ownerDocument.addEventListener('mousedown', this.onOutsideClick, false);

    this.renderDaysOfWeek();
    this.renderDates();
    this.renderMonths();
    this.renderYears();

    this.emitStyle();
  }

  disconnectedCallback() {
    this.el.ownerDocument.removeEventListener('mousedown', this.onOutsideClick, false);
  }


  // INTERNAL ------------------------------------------------------------------


  private handleFocus = () => {
    this.hasFocus = true;
    this.hidePicker();
    this.emitFocus();
    this.emitStyle();
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.emitChange();
    this.emitBlur();
    this.emitStyle();
  }

  private hidePicker = () => {
    this.pickerHidden = true;
    this.resetPicker();
  };

  private showPicker = () => {
    this.parseDate();
    this.pickerHidden = false;
  };

  private togglePicker = () => {
    if (this.disabled || this.readonly) return false;
    if (this.pickerHidden) this.showPicker();
    else this.hidePicker();
  };

  private parseDate() {
    if (this.nativeInput.value) {
      const date: Date = parse(this.nativeInput.value, 'dd.MM.yyyy', this.dateContext, {locale: this.locale});
      if (isValid(date)) {
        this.dateContext = date;
        this.renderDates();
      }
    }
  }

  private resetPicker() {
    this.mode = 'days';
    this.dateContext = this.selectedDate ? this.selectedDate : this.today;
    this.renderDates();
    this.renderMonths();
    this.renderYears();
  }

  private onOutsideClick = (e) => {
    if (this.el.contains(e.target)) return;
    else this.hidePicker();
  };

  private handleModeSwitch = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.mode === 'days') {
      this.renderYears();
      this.mode = 'years';
    } else if (this.mode === 'months' || this.mode === 'years') {
      this.renderDates();
      this.renderMonths();
      this.mode = 'days';
    }
  };

  private handlePrev = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.mode === 'days') {
      this.dateContext = subMonths(this.dateContext, 1);
      this.renderDates();
    } else if (this.mode === 'months') {
      this.dateContext = subYears(this.dateContext, 1);
      this.renderMonths();
    } else if (this.mode === 'years') {
      this.dateContext = subYears(this.dateContext, 24);
      this.renderYears();
    }
  };

  private handleNext = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.mode === 'days') {
      this.dateContext = addMonths(this.dateContext, 1);
      this.renderDates();
    } else if (this.mode === 'months') {
      this.dateContext = addYears(this.dateContext, 1);
      this.renderMonths();
    } else if (this.mode === 'years') {
      this.dateContext = addYears(this.dateContext, 24);
      this.renderYears();
    }
  };

  private handleDateSelection = (date: Date) => {
    this.selectedDate = date;
    this.value = this.getSelectedDate();
    this.hidePicker();
    this.renderDates();
    this.emitChange();
    this.emitStyle();
  };

  private handleInput = (evt: Event) => {
    const input = evt.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.emitInput(evt as KeyboardEvent);
  }

  private handleMonthSelection = (date: Date) => {
    this.dateContext = set(this.dateContext, {
      month: getMonth(date)
    });

    this.renderDates();
    this.mode = 'days';
  };

  private handleYearSelection = (date: Date) => {
    this.dateContext = set(this.dateContext, {
      year: getYear(date)
    });

    this.renderMonths();
    this.mode = 'months';
  };

  private formatSelectedDate(): string {
    return format(this.selectedDate, 'dd.MM.yyyy', {locale: this.locale});
  }

  private getSelectedDate = () => {
    if (this.selectedDate) return this.formatSelectedDate();
    else return '';
  };

  /**
   * Renders days of week for labels.
   */
  private renderDaysOfWeek() {
    const days = eachDayOfInterval({
      start: startOfWeek(this.today, {locale: this.locale}),
      end: endOfWeek(this.today, {locale: this.locale})
    });

    for (let i = 0; i < days.length; i++) {
      this.daysOfWeek = [...this.daysOfWeek, format(days[i], 'EEEEE', {locale: this.locale})];
    }
  }

  /**
   * Renders visible days for a month.
   *
   * Days in the start and end of a month (padders) are visible, but visually muted.
   * Today and selected date are highlighted.
   */
  private renderDates() {
    this.dates = [];

    const days = eachDayOfInterval({
      start: startOfWeek(startOfMonth(this.dateContext), {locale: this.locale}),
      end: endOfWeek(endOfMonth(this.dateContext), {locale: this.locale})
    });

    for (let i = 0; i < days.length; i++) {
      let className = '';

      if (getMonth(days[i]) === getMonth(this.dateContext)) {
        if (isSameDay(days[i], this.today)) {
          className = 'today';
        } else if (isSameDay(days[i], this.selectedDate)) {
          className = 'selected';
        }
      } else {
        className = 'padder';
      }

      this.dates = [...this.dates, {
        date: days[i],
        className
      }];
    }
  }

  /**
   * Renders years for a given interval of 24 years.
   *
   * Initially the current year is at the fourth position.
   */
  private renderYears() {
    this.years = [];

    const years = eachYearOfInterval({
      start: subYears(this.dateContext, 4),
      end: addYears(this.dateContext, 19)
    });

    for (let i = 0; i < years.length; i++) {
      let className = '';

      if (getYear(years[i]) === getYear(this.today)) {
        className = 'today';
      } else if (getYear(years[i]) === getYear(this.dateContext)) {
        className = 'selected';
      }

      this.years = [...this.years, {
        date: years[i],
        className
      }];
    }
  }

  /**
   * Renders all months for a given year.
   */
  private renderMonths() {
    this.months = [];

    const months = eachMonthOfInterval({
      start: startOfYear(this.dateContext),
      end: endOfYear(this.dateContext)
    });

    for (let i = 0; i < months.length; i++) {
      let className = '';

      if (
        getYear(months[i]) === getYear(this.today) &&
        getMonth(months[i]) === getMonth(this.today)
      ) {
        className = 'today';
      } else if (
        getYear(months[i]) === getYear(this.dateContext) &&
        getMonth(months[i]) === getMonth(this.dateContext)
      ) {
        className = 'selected';
      }

      this.months = [...this.months, {
        date: months[i],
        className
      }];
    }
  }

  private getModeTitle = () => {
    if (this.mode === 'days') return `${this.formatMonth(this.dateContext, 'MMMM')} ${this.formatYear(this.dateContext)}`;
    else if (this.mode === 'months') return `${this.formatYear(this.dateContext)}`;
    else if (this.mode === 'years') return `${this.formatYear(this.years[0].date)} - ${this.formatYear(this.years[this.years.length - 1].date)}`;
  };

  private formatDayOfMonth(date: Date, pattern: string = 'd') {
    return format(date, pattern, {locale: this.locale});
  }

  private formatMonth(date: Date, pattern: string = 'MMM') {
    return format(date, pattern, {locale: this.locale}).toUpperCase();
  }

  private formatYear(date: Date, pattern: string = 'y') {
    return format(date, pattern, {locale: this.locale})
  }

  private getValue(): string {
    return (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }


  // MARKUP --------------------------------------------------------------------


  render() {
    const weekdays = (
      <ol class="weekdays">
        {this.daysOfWeek.map((item: string) =>
          <li>{item}</li>
        )}
      </ol>
    );

    const dates = (
      <ol class="dates">
        {this.dates.map((item) =>
          <li class={item.className}
              onClick={() => this.handleDateSelection(item.date)}>{this.formatDayOfMonth(item.date)}</li>
        )}
      </ol>
    );

    const months = (
      <ol class="months">
        {this.months.map((item) =>
          <li class={item.className}
              onClick={() => this.handleMonthSelection(item.date)}>{this.formatMonth(item.date)}</li>
        )}
      </ol>
    );

    const years = (
      <ol class="years">
        {this.years.map((item) =>
          <li class={item.className}
              onClick={() => this.handleYearSelection(item.date)}>{this.formatYear(item.date)}</li>
        )}
      </ol>
    );

    // render a hidden input element in the global DOM that gets submitted as form data
    if (this.name) {
      renderHiddenInput(true, this.el, this.name, this.getValue(), this.disabled);
    }

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={{
          'has-value': this.hasValue(),
          'has-focus': this.hasFocus
        }}
      >
        <input
          type="text"
          disabled={this.disabled}
          readonly={this.readonly}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleInput}
          value={this.getValue()}
          ref={(el: HTMLInputElement) => this.nativeInput = el}
        />
        <div class="toggle" onClick={this.togglePicker}>
          <svg class="icon-cal" viewBox="0 0 19 17">
            <path
              d="M447.511,291.051v3.75h-3.75v-3.75h-6.5v3.75h-3.75v-3.75h-2.5V306.8h19v-15.75Zm1.25,14.5h-16.5v-8h16.5Zm-14-15.75h1.25v3.75h-1.25Zm10.25,0h1.25v3.75h-1.25Z"
              transform="translate(-431.011 -289.801)"/>
          </svg>
        </div>
        {this.error !== undefined && this.error.length > 0
          ? <div class="error-message">{this.error}</div>
          : null
        }
        <div class="picker" hidden={this.pickerHidden}>
          <div class="action-bar">
            <button class="mode-title" onClick={this.handleModeSwitch}>
              {this.getModeTitle()}
              <svg viewBox="0 0 11 6.202" class={{
                'icon-dropdown': true,
                'is-active': this.mode !== 'days'
              }}>
                <g transform="translate(0 6.202) rotate(-90)">
                  <path
                    d="M.168,5.041A.4.4,0,0,1,.2,5L5.016.186a.7.7,0,0,1,.989.039A.706.706,0,0,1,6,1.185L1.689,5.495,6,9.8a.7.7,0,1,1-.989.99l-4.8-4.8a.7.7,0,0,1-.038-.949Z"
                    transform="translate(0 0)"/>
                </g>
              </svg>
            </button>
            <button class="prev" onClick={this.handlePrev}>
              <svg class="icon-prev" viewBox="0 0 6.202 11">
                <path
                  d="M.168,5.041A.4.4,0,0,1,.2,5L5.016.186a.7.7,0,0,1,.989.039A.706.706,0,0,1,6,1.185L1.689,5.495,6,9.8a.7.7,0,1,1-.989.99l-4.8-4.8a.7.7,0,0,1-.038-.949Z"
                  transform="translate(0 0)"/>
              </svg>
            </button>
            <button class="next" onClick={this.handleNext}>
              <svg class="icon-next" viewBox="0 0 6.202 11">
                <path
                  d="M6.035,5.041A.4.4,0,0,0,6,5L1.187.186A.7.7,0,0,0,.2.225.706.706,0,0,0,.2,1.185l4.309,4.31L.2,9.8a.7.7,0,1,0,.989.99L6,5.99a.7.7,0,0,0,.038-.949Z"
                  transform="translate(0 0)"/>
              </svg>
            </button>
          </div>
          {this.mode === 'days' ? weekdays : null}
          {this.mode === 'days' ? dates : null}
          {this.mode === 'months' ? months : null}
          {this.mode === 'years' ? years : null}
        </div>
      </Host>
    );
  }
}
