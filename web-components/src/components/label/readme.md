# pax-label

The `pax-label` is a wrapper component that can be used in two basic scenarios: (a) as a
standalone label – with `pax-toggle`, or `pax-progress-bar` –  or (b) as an
associated input label within forms – with `pax-input`, `pax-select`, `pax-checkbox`, or `pax-radio`.

## Notes

* The label is truncated by default if it exceeds the available space. This can be changed by setting the `wrap` attribute.
* The `data-suffix` attribute is only rendered when nested inside a `<form>` element.

## Basic

<pax-label>Lorem ipsum</pax-label>

```html
<pax-label>Lorem ipsum</pax-label>
````

## Within a form

### Default

<form>
    <pax-label>Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label>Lorem ipsum</pax-label>
</form>
````

### Required

<form>
    <pax-label required>Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label required>Lorem ipsum</pax-label>
</form>
````

#### With custom suffix

<form>
    <pax-label suffix="dolor sit">Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label suffix="dolor sit">Lorem ipsum</pax-label>
</form>
````


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                          | Type         | Default      |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `for`      | `for`      | The id of of the element that this label should be linked to.                                        | `string`     | `undefined`  |
| `position` | `position` | The position determines where and how the label behaves inside an item.                              | `"floating"` | `undefined`  |
| `required` | `required` | If set, the label component gets marked as required.                                                 | `boolean`    | `undefined`  |
| `suffix`   | `suffix`   | The suffix that should be displayed when used in combination with an input component.                | `string`     | `'optional'` |
| `wrap`     | `wrap`     | If set, the label component wraps other wise it gets clipped with '...' when there is no space left. | `boolean`    | `undefined`  |


## Events

| Event      | Description                          | Type                            |
| ---------- | ------------------------------------ | ------------------------------- |
| `paxStyle` | Gets emitted when the styles change. | `CustomEvent<StyleEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
