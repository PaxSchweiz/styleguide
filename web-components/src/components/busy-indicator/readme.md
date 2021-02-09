# pax-busy-indicator

The `pax-busy-indicator` expresses an unspecified wait time.

## Notes

* It supports the following colors from the color palette: `"success"`, `"warning"`, `"danger"`, `"dark"`, and `"light"`.
* If no `color` is provided it falls back to `"success"`.

## Basic

<pax-busy-indicator></pax-busy-indicator>

```html
<pax-busy-indicator/>
```


## With colored background

### Success

<pax-busy-indicator color="success"></pax-busy-indicator>

```html
<pax-busy-indicator color="success"/>
```

### Warning

<pax-busy-indicator color="warning"></pax-busy-indicator>

```html
<pax-busy-indicator color="warning"/>
```

### Danger

<pax-busy-indicator color="danger"></pax-busy-indicator>

```html
<pax-busy-indicator color="danger"/>
```

### Dark

<pax-busy-indicator color="dark"></pax-busy-indicator>

```html
<pax-busy-indicator color="dark"/>
```

### Light

<pax-busy-indicator color="light"></pax-busy-indicator>

```html
<pax-busy-indicator color="light"/>
```

## Hidden

<pax-busy-indicator hidden></pax-busy-indicator>

```html
<pax-busy-indicator hidden/>
```


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                          | Type      | Default     |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `color`  | `color`   | The color to use from the pax color palette. Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'`. | `string`  | `undefined` |
| `hidden` | `hidden`  | If set, the busy indicator component is hidden.                                                                      | `boolean` | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
