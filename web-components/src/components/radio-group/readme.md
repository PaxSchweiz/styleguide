# pax-radio-group

The `pax-radio-group` allows the selection of a single option from a set of options.

## Notes

* The `pax-radio-group` works in combination with multiple `pax-radio` elements.
* A `name` attribute must be provided if it is used with a standard `<form>` element. A hidden input will be rendered that holds the value of the selected nested `pax-radio` that will be submitted.
* A nested `pax-radio` element can be checked programmatically by setting the `value` of the `pax-radio-group` to the value of the `pax-radio` that should be checked.

## Usage

See `pax-radio` for usage.

## Basic

<pax-radio-group>
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>

```html
<pax-radio-group>
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>
```

### with hidden input

<pax-radio-group name="name-of-hidden-input">
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>

```html
<pax-radio-group name="name-of-hidden-input">
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>
```

### with preselected value

<pax-radio-group value="2">
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>

```html
<pax-radio-group value="2">
  <pax-radio value="1"></pax-radio>
  <pax-radio value="2"></pax-radio>
  <pax-radio value="3"></pax-radio>
</pax-radio-group>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                           | Type     | Default     |
| -------- | --------- | --------------------------------------------------------------------- | -------- | ----------- |
| `name`   | `name`    | The name of the hidden input, which is submitted with the form data.  | `string` | `undefined` |
| `value`  | `value`   | The value of the hidden input, which is submitted with the form data. | `string` | `undefined` |


## Events

| Event              | Description                              | Type                                          |
| ------------------ | ---------------------------------------- | --------------------------------------------- |
| `paxStyle`         | Gets emitted when the styles change.     | `CustomEvent<StyleEventDetail>`               |
| `radioGroupChange` | Gets emitted when the value has changed. | `CustomEvent<RadioGroupChangeEventInterface>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
