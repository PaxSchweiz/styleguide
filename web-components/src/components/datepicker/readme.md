# pax-datepicker

The `pax-datepicker` is a wrapper to the input HTML element. It displays a picker menu below the input.

## Notes

* A `name` attribute must be provided if it is used with a standard `<form>` element. A hidden input will be rendered that holds the value that will be submitted.
* It is possible to combine it with stacked or floating labels. Prefer floating labels.
* Invalid states are included, validation is not.
* The date format is `dd.MM.yyyy`, e.g. `21.07.2020`.
* If no `locale` is provided it defaults to `"de"`. Other locales are `"fr"` and `"it"`.
* If a provided `value` has the wrong format, it falls back to an empty value.
* Depends on <pax-link href="https://date-fns.org/">date-fns</pax-link> (MIT license).

## Basic

<pax-datepicker></pax-datepicker>

```html
<pax-datepicker></pax-datepicker>
```

### with hidden input

<pax-datepicker name="name-of-hidden-input"></pax-datepicker>

```html
<pax-datepicker name="name-of-hidden-input"></pax-datepicker>
```

### With value

<pax-datepicker value="21.07.2020"></pax-datepicker>

```html
<pax-datepicker value="21.07.2020"></pax-datepicker>
```

### with locale "de"

<pax-datepicker local="de"></pax-datepicker>

```html
<pax-datepicker local="de"></pax-datepicker>
```

### with locale "fr"

<pax-datepicker locale="fr"></pax-datepicker>

```html
<pax-datepicker locale="fr"></pax-datepicker>
```

### with locale "it"

<pax-datepicker locale="it"></pax-datepicker>

```html
<pax-datepicker locale="it"></pax-datepicker>
```

## Disabled

<pax-datepicker disabled></pax-datepicker>

```html
<pax-datepicker disabled></pax-datepicker>
```

## Readonly

<pax-datepicker readonly></pax-datepicker>

```html
<pax-datepicker readonly></pax-datepicker>
```

## Invalid

<pax-datepicker invalid></pax-datepicker>

```html
<pax-datepicker invalid></pax-datepicker>
```

### with error message

<pax-datepicker invalid error="Error message"></pax-datepicker>

```html
<pax-datepicker invalid error="Error message"></pax-datepicker>
```


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description                                                          | Type      | Default     |
| ------------ | ---------- | -------------------------------------------------------------------- | --------- | ----------- |
| `disabled`   | `disabled` | If set, the user cannot interact with the input component.           | `boolean` | `false`     |
| `error`      | `error`    | The error message that is displayed next to the component.           | `string`  | `undefined` |
| `invalid`    | `invalid`  | If set, the component is visually marked as invalid.                 | `boolean` | `false`     |
| `localeProp` | `locale`   | The locale to use. Options are: `'de'`, `'fr'` or `'it'`.            | `string`  | `'de'`      |
| `name`       | `name`     | The name of the hidden input, which is submitted with the form data. | `string`  | `undefined` |
| `readonly`   | `readonly` | If set, the user cannot change the value of the input component.     | `boolean` | `false`     |
| `value`      | `value`    | The value of the datepicker component.                               | `string`  | `undefined` |


## Events

| Event               | Description                                                 | Type                                  |
| ------------------- | ----------------------------------------------------------- | ------------------------------------- |
| `datepickerBlurred` | Gets emitted when the input component lost focus.           | `CustomEvent<void>`                   |
| `datepickerChanged` | Gets emitted when the datepicker component's value changed. | `CustomEvent<InputChangeEventDetail>` |
| `datepickerFocused` | Gets emitted when the input component has focus.            | `CustomEvent<void>`                   |
| `datepickerInput`   | Gets emitted when a keyboard input occurred.                | `CustomEvent<KeyboardEvent>`          |
| `paxStyle`          | Gets emitted when the styles change.                        | `CustomEvent<StyleEventDetail>`       |


## Methods

### `focusInput() => Promise<void>`

When called focuses the native input element of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
