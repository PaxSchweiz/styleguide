# pax-title

Title is a wrapper element for headlines from level 1 to 2.

* Without a `level` attribute a `<h1>` headline is rendered.

<div class="browser">
    <div class="browser-toolbar">
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
    </div>
    <div class="browser-body">
        <pax-title level="1">Pax title (h1)</pax-title>
        <pax-title level="2">Pax title (h2)</pax-title>
    </div>
</div>

## Basic

<pax-title>Pax title</pax-title>

```html
<pax-title>Pax title</pax-title>
```

## With different level

### Level 1

<pax-title level="1">Pax title (h1)</pax-title>

```html
<pax-title level="1">Pax title (h1)</pax-title>
```

### Level 2

<pax-title level="2">Pax title (h2)</pax-title>

```html
<pax-title level="2">Pax title (h2)</pax-title>
```


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                               | Type     | Default |
| -------- | --------- | ----------------------------------------- | -------- | ------- |
| `level`  | `level`   | The headline level of the native element. | `number` | `1`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
