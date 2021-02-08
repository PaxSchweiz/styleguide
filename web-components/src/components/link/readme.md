# pax-link

The `pax-link` comes with three different states `muted`, `emphasized` and `disabled`.

## Notes

* Always provide the `href` attribute. If the link is disabled it is optional, but the link is never rendered in that case anyway.
* The `target` attribute can be provided only the `href` attribute is provided as well.

## Usage

<div class="browser">
    <div class="browser-toolbar">
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
    </div>
    <div class="browser-body">
        Just my luck, <pax-link href="https://pax.ch">no ice</pax-link>. Is this
        my <pax-link href="https://pax.ch" muted>espresso machine</pax-link>?
        Wh-what is-h-how did you get my
        <pax-link href="https://pax.ch" emphasized>espresso machine</pax-link>?
        I gave it a cold? I gave it a virus. A computer virus. I was part of
        something special. <pax-link href="https://pax.ch" disabled>Must go faster</pax-link>.
        God help us, we're in the hands of <pax-link disabled>engineers</pax-link>.
    </div>
</div>

## Basic

<pax-link href="https://pax.ch">Pax Link</pax-link>

```html
<pax-link href="https://pax.ch">Pax Link</pax-link>
```

### with target

<pax-link href="https://pax.ch" target="_blank">Pax Link</pax-link>

```html
<pax-link href="https://pax.ch" target="_blank">Pax Link</pax-link>
```

## Muted

<pax-link href="https://pax.ch" muted>Pax Link</pax-link>

```html
<pax-link href="https://pax.ch" muted>Pax Link</pax-link>
```

## Emphasized

<pax-link href="https://pax.ch" emphasized>Pax Link</pax-link>

```html
<pax-link href="https://pax.ch" emphasized>Pax Link</pax-link>
```

## Disabled

<pax-link href="https://pax.ch" disabled>Pax Link</pax-link>

```html
<pax-link href="https://pax.ch" disabled>Pax Link</pax-link>
```

### without href

<pax-link disabled>Pax Link</pax-link>

```html
<pax-link disabled>Pax Link</pax-link>
```


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                          | Type      | Default     |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `disabled`   | `disabled`   | If set, the user cannot interact with the link component.                                                                            | `boolean` | `undefined` |
| `emphasized` | `emphasized` | If set, the link component gets displayed emphasized.                                                                                | `boolean` | `undefined` |
| `href`       | `href`       | The `href` value of the native anchor element. This is only used when the link component is not disabled.                            | `string`  | `undefined` |
| `muted`      | `muted`      | If set, the link component gets displayed muted.                                                                                     | `boolean` | `undefined` |
| `target`     | `target`     | The `target` value of the native anchor element. This is only used when the link component has a a `href` value and is not disabled. | `string`  | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
