# pax-input

The `pax-input` is a wrapper to the HTML input element.

## Notes

* It works with the following types: `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, and `"url"`.
* A `name` attribute must be provided if it is used with a standard `<form>` element.
* It is possible to combine it with stacked or floating labels. Prefer floating labels.
* Long values get truncated.
* Invalid states are included, validation is not.

## Basic

<pax-input></pax-input>

```html
<pax-input/>
```

### With value

<pax-input value="Lorem ipsum"></pax-input>

```html
<pax-input value="Lorem ipsum"/>
```

### with different type

<pax-input type="password"></pax-input>

```html
<pax-input type="password"/>
```

## Disabled

<pax-input disabled></pax-input>

```html
<pax-input disabled/>
```

## Readonly

<pax-input readonly value="Lorem ipsum"></pax-input>

```html
<pax-input readonly value="Lorem ipsum"/>
```

## Invalid

<pax-input invalid></pax-input>

```html
<pax-input invalid/>
```

### with error message

<pax-input invalid error="Error message"></pax-input>

```html
<pax-input invalid error="Error message"/>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                 | Type                                                                        | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `disabled` | `disabled` | If set, the user cannot interact with the input component.                                                                                  | `boolean`                                                                   | `false`     |
| `error`    | `error`    | The error message that is displayed next to the component.                                                                                  | `string`                                                                    | `undefined` |
| `invalid`  | `invalid`  | If set, the component is visually marked as invalid.                                                                                        | `boolean`                                                                   | `false`     |
| `name`     | `name`     | The name of the hidden input, which is submitted with the form data.                                                                        | `string`                                                                    | `undefined` |
| `readonly` | `readonly` | If set, the user cannot change the value of the input component.                                                                            | `boolean`                                                                   | `false`     |
| `type`     | `type`     | The type of the native input element. Options are: `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'url'`. | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`    | `value`    | The value of the input component.                                                                                                           | `number \| string`                                                          | `''`        |


## Events

| Event          | Description                                            | Type                                  |
| -------------- | ------------------------------------------------------ | ------------------------------------- |
| `inputBlurred` | Gets emitted when the input component lost focus.      | `CustomEvent<void>`                   |
| `inputChanged` | Gets emitted when the input component's value changed. | `CustomEvent<InputChangeEventDetail>` |
| `inputFocused` | Gets emitted when the input component has focus.       | `CustomEvent<void>`                   |
| `inputInput`   | Gets emitted when a keyboard input occurred.           | `CustomEvent<KeyboardEvent>`          |
| `paxStyle`     | Gets emitted when the styles change.                   | `CustomEvent<StyleEventDetail>`       |


## Methods

### `focusInput() => Promise<void>`

When called focuses the native input element of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
