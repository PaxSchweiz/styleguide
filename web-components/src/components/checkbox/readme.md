# pax-checkbox

The `pax-checkbox` allows the selection of multiple options from a set of options.

## Notes

* A `name` attribute must be provided if it is used with a standard `<form>` element. A hidden input will be rendered that holds the value that will be submitted.
* If the `value` of a checkbox is not provided, it falls back to `"on"`.
* Clicking on a checkbox will toggle the `checked` attribute.
* They can also be checked programmatically by setting the `checked` attribute.
* They can be displayed as inline or listed using `pax-list`.
* An `icon` attribute with the value `'switch'` renders a switch icon instead of the checkbox icon.

## Basic

<pax-checkbox></pax-checkbox>

```html
<pax-checkbox></pax-checkbox>
```

### which is preselected

<pax-checkbox checked></pax-checkbox>

```html
<pax-checkbox checked></pax-checkbox>
```

### with hidden input

<pax-checkbox name="name-of-hidden-input"></pax-checkbox>

```html
<pax-checkbox name="name-of-hidden-input"></pax-checkbox>
```

### with hidden input and custom value

<pax-checkbox name="name-of-hidden-input" value="custom-value"></pax-checkbox>

```html
<pax-checkbox name="name-of-hidden-input" value="custom-value"></pax-checkbox>
```

### with switch icon

<pax-checkbox icon="switch"></pax-checkbox>

```html
<pax-checkbox icon="switch"></pax-checkbox>
```

## Disabled

<pax-checkbox disabled></pax-checkbox>

```html
<pax-checkbox disabled></pax-checkbox>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                      | Type      | Default      |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------ | --------- | ------------ |
| `checked`  | `checked`  | If set, the checkbox is selected.                                                                | `boolean` | `false`      |
| `disabled` | `disabled` | If set, the user cannot interact with the checkbox component.                                    | `boolean` | `false`      |
| `icon`     | `icon`     | The type of the checkbox icon. Options are: `'checkbox'` \| `'switch'`. Defaults to `'checkbox'` | `string`  | `'checkbox'` |
| `name`     | `name`     | The name of the hidden input, which is submitted with the form data.                             | `string`  | `undefined`  |
| `value`    | `value`    | The value of the checkbox, which is submitted with the form data.                                | `string`  | `'on'`       |


## Events

| Event            | Description                                          | Type                                        |
| ---------------- | ---------------------------------------------------- | ------------------------------------------- |
| `checkboxBlur`   | Gets emitted when the checkbox component lost focus. | `CustomEvent<void>`                         |
| `checkboxChange` | Gets emitted when the checked property has changed.  | `CustomEvent<CheckboxChangeEventInterface>` |
| `checkboxFocus`  | Gets emitted when the checkbox component has focus.  | `CustomEvent<void>`                         |
| `paxStyle`       | Gets emitted when the styles change.                 | `CustomEvent<StyleEventDetail>`             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
