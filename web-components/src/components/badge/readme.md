# pax-badge

The `pax-badge` uses the colors from the pax color palette.

## Notes

* If the badge is empty the DOM node is hidden.
* A common use-case is a badge inside a `pax-list` element.

## Usage

<pax-row>
    <pax-col col-sm-6>
        <div class="browser">
            <div class="browser-toolbar">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
            </div>
            <div class="browser-body">
                <pax-list lines>
                    <pax-item>
                        Default Badge
                        <pax-badge slot="end">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Success Badge
                        <pax-badge slot="end" color="success">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Warning Badge
                        <pax-badge slot="end" color="warning">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Danger Badge
                        <pax-badge slot="end" color="danger">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Dark Badge
                        <pax-badge slot="end" color="dark">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Light Badge
                        <pax-badge slot="end" color="light">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Ghost Badge
                        <pax-badge slot="end" color="ghost">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Empty Badge <i>(does not get rendered)</i>
                        <pax-badge></pax-badge>
                    </pax-item>
                </pax-list>
            </div>
        </div>
    </pax-col>
    <pax-col col-sm-6>
        <div class="browser">
            <div class="browser-toolbar">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
            </div>
            <div class="browser-body">
                <pax-list lines>
                    <pax-item>
                        Default Badge
                        <pax-badge slot="start">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Success Badge
                        <pax-badge slot="start" color="success">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Warning Badge
                        <pax-badge slot="start" color="warning">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Danger Badge
                        <pax-badge slot="start" color="danger">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Dark Badge
                        <pax-badge slot="start" color="dark">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Light Badge
                        <pax-badge slot="start" color="light">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Ghost Badge
                        <pax-badge slot="start" color="ghost">Badge</pax-badge>
                    </pax-item>
                    <pax-item>
                        Empty Badge <i>(does not get rendered)</i>
                        <pax-badge></pax-badge>
                    </pax-item>
                </pax-list>
            </div>
        </div>
    </pax-col>
</pax-row>

## Basic

<pax-badge>Pax Badge</pax-badge>

```html
<pax-badge>Pax Badge</pax-badge>
```


## With colored background

### Success

<pax-badge color="success">Pax Badge</pax-badge>

```html
<pax-badge color="success">Pax Badge</pax-badge>
```

### Warning

<pax-badge color="warning">Pax Badge</pax-badge>

```html
<pax-badge color="warning">Pax Badge</pax-badge>
```

### Danger

<pax-badge color="danger">Pax Badge</pax-badge>

```html
<pax-badge color="danger">Pax Badge</pax-badge>
```

### Dark

<pax-badge color="dark">Pax Badge</pax-badge>

```html
<pax-badge color="dark">Pax Badge</pax-badge>
```

### Light

<pax-badge color="light">Pax Badge</pax-badge>

```html
<pax-badge color="light">Pax Badge</pax-badge>
```

### Ghost

<pax-badge color="ghost">Pax Badge</pax-badge>

```html
<pax-badge color="ghost">Pax Badge</pax-badge>
```

### With no content

<pax-badge></pax-badge>

```html
<pax-badge></pax-badge>
```


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                    | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| `color`  | `color`   | The color to use from the pax color palette. Options are: `'success'`, `'warning'`, `'danger'`, `'dark'`, `'light'`, `'ghost'` | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
