# pax-col

Cols are cellular components of the grid system and go inside a `pax-row`.

* They will expand to fill their `pax-row`.
* All content inside a grid system should go inside a `pax-col`.

## Basic

<pax-grid>
    <pax-row>
        <pax-col>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

## Half width

### Half width on all viewports

<pax-grid>
    <pax-row>
        <pax-col col-sm-6>Lorem ipsum</pax-col>
        <pax-col col-sm-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-sm-6>Lorem ipsum</pax-col>
        <pax-col col-sm-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

### Half width on medium and large viewports

<pax-grid>
    <pax-row>
        <pax-col col-md-6>Lorem ipsum</pax-col>
        <pax-col col-md-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-md-6>Lorem ipsum</pax-col>
        <pax-col col-md-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

### Half width on large viewports

<pax-grid>
    <pax-row>
        <pax-col col-lg-6>Lorem ipsum</pax-col>
        <pax-col col-lg-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-lg-6>Lorem ipsum</pax-col>
        <pax-col col-lg-6>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

## Quarter width

NOTE: Quarter width on all viewports is possible, but not recommended.

### Quarter width on medium and large viewports

<pax-grid>
    <pax-row>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
        <pax-col col-md-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

### Quarter width on large viewports

<pax-grid>
    <pax-row>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

## Combinations of half and quarter widths

### Half width on small viewports and quarter width on medium viewports

<pax-grid>
    <pax-row>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-md-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

### Half width on small and medium viewports and quarter width on large viewports

<pax-grid>
    <pax-row>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-sm-6 col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

### Half width on medium viewports and quarter width on large viewports

<pax-grid>
    <pax-row>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>

```html
<pax-grid>
    <pax-row>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
        <pax-col col-md-6 col-lg-3>Lorem ipsum</pax-col>
    </pax-row>
</pax-grid>
```

<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
