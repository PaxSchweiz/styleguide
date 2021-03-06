# pax-progress-bar

A horizontal progress bar that can visualize percentage based values.

* If a descriptive label is needed, use the `<pax-label>`.
* If a negative value is passed it will render 0%, and vice versa, if a value is passed that is bigger than 1 it will render 100%.
* If no `color` is defined it will fall back to green.

The value can be changed via JavaScript, i.e. to use it to show a loading
progress:

```javascript
document.querySelector('pax-progress-bar').setAttribute('value', '0.3');
```

## Basic

<pax-progress-bar value="0.5"></pax-progress-bar>

```html
<pax-progress-bar value="0.5"></pax-progress-bar>
```

## With label

<pax-progress-bar value="0.5">
    <pax-label>Lorem ipsum</pax-label>
</pax-progress-bar>

```html
<pax-progress-bar value="0.5">
    <pax-label>Lorem ipsum</pax-label>
</pax-progress-bar>
```

## With custom value label

<pax-progress-bar value="0.5">
    <span slot="value-label">50’000,00 CHF</span>
</pax-progress-bar>

```html
<pax-progress-bar value="0.5">
    <span slot="value-label">50’000,00 CHF</span>
</pax-progress-bar>
```

## Compact

<pax-progress-bar value="0.5" compact></pax-progress-bar>

```html
<pax-progress-bar value="0.5" compact></pax-progress-bar>
```

## Inline

<pax-progress-bar value="0.5" inline></pax-progress-bar>

```html
<pax-progress-bar value="0.5" inline></pax-progress-bar>
```

## With colors

### Success

<pax-progress-bar value="0.5" color="success"></pax-progress-bar>

```html
<pax-progress-bar value="0.5" color="success"></pax-progress-bar>
```

### Warning

<pax-progress-bar value="0.5" color="warning"></pax-progress-bar>

```html
<pax-progress-bar value="0.5" color="warning"></pax-progress-bar>
```

### Danger

<pax-progress-bar value="0.5" color="danger"></pax-progress-bar>

```html
<pax-progress-bar value="0.5" color="danger"></pax-progress-bar>
```

### Dark

<pax-progress-bar value="0.5" color="dark"></pax-progress-bar>

```html
<pax-progress-bar value="0.5" color="dark"></pax-progress-bar>
```

### Light

<pax-progress-bar value="0.5" color="light"></pax-progress-bar>

```html
<pax-progress-bar value="0.5" color="light"></pax-progress-bar>
```


<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                         | Type      | Default     |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `color`   | `color`   | The color to use from the pax color palette. Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'` | `string`  | `undefined` |
| `compact` | `compact` | Use compact design.                                                                                                 | `boolean` | `undefined` |
| `inline`  | `inline`  | Use inline layout.                                                                                                  | `boolean` | `undefined` |
| `value`   | `value`   | The value determines how much of the progress bar should display. The value should be between 0 and 1.              | `number`  | `0`         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
