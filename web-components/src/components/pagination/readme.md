# pax-pagination

The `pax-pagination` is a wrapper to a list of `pax-link` and `pax-item` components.

## Notes

* The content of a `pax-link` or `pax-item` can be any text or a `pax-icon`.

## Usage

<div class="browser">
    <div class="browser-toolbar">
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
    </div>
    <div class="browser-body">
        <pax-pagination>
            <pax-link href="#">Previous</pax-link>
            <pax-link href="#">1</pax-link>
            <pax-link href="#" emphasized>2</pax-link>
            <pax-link href="#">3</pax-link>
            <pax-link href="#">Next</pax-link>
        </pax-pagination>
    </div>
</div>

## Basic

<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#" emphasized>2</pax-link>
    <pax-link href="#">3</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>

```html
<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#" emphasized>2</pax-link>
    <pax-link href="#">3</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>
```


### with first page active

<pax-pagination>
    <pax-link href="#" disabled>Previous</pax-link>
    <pax-link href="#" emphasized>1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#">3</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>

```html
<pax-pagination>
    <pax-link href="#" disabled>Previous</pax-link>
    <pax-link href="#" emphasized>1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#">3</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>
```

### with last page active

<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#" emphasized>3</pax-link>
    <pax-link href="#" disabled>Next</pax-link>
</pax-pagination>

```html
<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#" emphasized>3</pax-link>
    <pax-link href="#" disabled>Next</pax-link>
</pax-pagination>
```

## with many pages

<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#" emphasized>3</pax-link>
    <pax-link href="#">4</pax-link>
    <pax-link href="#">5</pax-link>
    <pax-link href="#">6</pax-link>
    <pax-link href="#">7</pax-link>
    <pax-link href="#">8</pax-link>
    <pax-link href="#">9</pax-link>
    <pax-link href="#">10</pax-link>
    <pax-link href="#">11</pax-link>
    <pax-link href="#">12</pax-link>
    <pax-link href="#">13</pax-link>
    <pax-link href="#">14</pax-link>
    <pax-link href="#">15</pax-link>
    <pax-link href="#">16</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>

```html
<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-link href="#">1</pax-link>
    <pax-link href="#">2</pax-link>
    <pax-link href="#" emphasized>3</pax-link>
    <pax-link href="#">4</pax-link>
    <pax-link href="#">5</pax-link>
    <pax-link href="#">6</pax-link>
    <pax-link href="#">7</pax-link>
    <pax-link href="#">8</pax-link>
    <pax-link href="#">9</pax-link>
    <pax-link href="#">10</pax-link>
    <pax-link href="#">11</pax-link>
    <pax-link href="#">12</pax-link>
    <pax-link href="#">13</pax-link>
    <pax-link href="#">14</pax-link>
    <pax-link href="#">15</pax-link>
    <pax-link href="#">16</pax-link>
    <pax-link href="#">Next</pax-link>
</pax-pagination>
```

### abbreviated

<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-item>...</pax-item>
    <pax-link href="#">9</pax-link>
    <pax-link href="#" emphasized>10</pax-link>
    <pax-link href="#">11</pax-link>
    <pax-item>...</pax-item>
    <pax-link href="#">Next</pax-link>
</pax-pagination>

```html
<pax-pagination>
    <pax-link href="#">Previous</pax-link>
    <pax-item>...</pax-item>
    <pax-link href="#">9</pax-link>
    <pax-link href="#" emphasized>10</pax-link>
    <pax-link href="#">11</pax-link>
    <pax-item>...</pax-item>
    <pax-link href="#">Next</pax-link>
</pax-pagination>
```


<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
