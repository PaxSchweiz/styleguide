# pax-input

The `pax-input` is a wrapper to the HTML input element.

## Notes

* It works with the following types: `"email"`, `"number"`, `"password"`, `"search"`, `"tel"`, `"text"`, and `"url"`.
* A `name` attribute must be provided if it is used with a standard `<form>` element.
* It is possible to combine it with stacked or floating labels. Prefer floating labels.
* Long values get truncated.
* Invalid states are included, validation is not.

## Usage

<pax-grid>
    <pax-row>
        <pax-col col-sm-6>
            <div class="browser">
                <div class="browser-toolbar">
                    <div class="browser-dot"></div>
                    <div class="browser-dot"></div>
                    <div class="browser-dot"></div>
                </div>
                <div class="browser-body">
                    <pax-headline level="3">Optional</pax-headline>
                    <form action="">
                        <pax-item>
                          <pax-label for="default-floating" position="floating">Label</pax-label>
                          <pax-input id="default-floating"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-prefilled" position="floating">Prefilled</pax-label>
                          <pax-input id="default-floating-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-disabled" position="floating">Disabled</pax-label>
                          <pax-input disabled id="default-floating-disabled"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-disabled-prefilled" position="floating">Disabled and Prefilled</pax-label>
                          <pax-input disabled id="default-floating-disabled-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-readonly-prefilled" position="floating">Readonly</pax-label>
                          <pax-input readonly id="default-floating-readonly-prefilled" value="With value, truncated, therefore we need a longer value, that really stretches very very very long"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-invalid" position="floating">Invalid</pax-label>
                          <pax-input invalid error="Error message" id="default-floating-invalid" value="Wrong value"/>
                        </pax-item>
                    </form>
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
                    <pax-headline level="3">Required</pax-headline>
                    <form action="">
                        <pax-item>
                          <pax-label required for="required-floating" position="floating">Label</pax-label>
                          <pax-input id="required-floating"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-prefilled" position="floating">Prefilled</pax-label>
                          <pax-input id="required-floating-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-disabled" position="floating">Disabled</pax-label>
                          <pax-input disabled id="required-floating-disabled"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-disabled-prefilled" position="floating">Disabled and Prefilled</pax-label>
                          <pax-input disabled id="required-floating-disabled-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required readonly for="required-floating-readonly-prefilled" position="floating">Readonly</pax-label>
                          <pax-input readonly id="required-floating-readonly-prefilled" value="With value, truncated, therefore we need a longer value, that really stretches very very very long"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-invalid" position="floating">Invalid</pax-label>
                          <pax-input invalid error="Error message" id="required-floating-invalid"/>
                        </pax-item>
                    </form>
                </div>
            </div>
        </pax-col>
    </pax-row>
</pax-grid>

<pax-message-strip icon="info">Use `pax-input` in combination with `pax-item` and `pax-label`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-item>
  <pax-label for="foo" position="floating">Label</pax-label>
  <pax-input id="foo" name="foo"/>
</pax-item>
```

</pax-panel>

## Basic

<pax-input></pax-input>

```html
<pax-input/>
```

### With value

<pax-input value="Lorem ipsum"></pax-input>

```html
<pax-input value="Lorem ipsum"/>
```

### with different type

<pax-input type="password"></pax-input>

```html
<pax-input type="password"/>
```

## Disabled

<pax-input disabled></pax-input>

```html
<pax-input disabled/>
```

## Readonly

<pax-input readonly value="Lorem ipsum"></pax-input>

```html
<pax-input readonly value="Lorem ipsum"/>
```

## Invalid

<pax-input invalid></pax-input>

```html
<pax-input invalid/>
```

### with error message

<pax-input invalid error="Error message"></pax-input>

```html
<pax-input invalid error="Error message"/>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                 | Type                                                                        | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `disabled` | `disabled` | If set, the user cannot interact with the input component.                                                                                  | `boolean`                                                                   | `false`     |
| `error`    | `error`    | The error message that is displayed next to the component.                                                                                  | `string`                                                                    | `undefined` |
| `invalid`  | `invalid`  | If set, the component is visually marked as invalid.                                                                                        | `boolean`                                                                   | `false`     |
| `name`     | `name`     | The name of the hidden input, which is submitted with the form data.                                                                        | `string`                                                                    | `undefined` |
| `readonly` | `readonly` | If set, the user cannot change the value of the input component.                                                                            | `boolean`                                                                   | `false`     |
| `type`     | `type`     | The type of the native input element. Options are: `'email'` \| `'number'` \| `'password'` \| `'search'` \| `'tel'` \| `'text'` \| `'url'`. | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`    | `value`    | The value of the input component.                                                                                                           | `number \| string`                                                          | `''`        |


## Events

| Event          | Description                                            | Type                                  |
| -------------- | ------------------------------------------------------ | ------------------------------------- |
| `inputBlurred` | Gets emitted when the input component lost focus.      | `CustomEvent<void>`                   |
| `inputChanged` | Gets emitted when the input component's value changed. | `CustomEvent<InputChangeEventDetail>` |
| `inputFocused` | Gets emitted when the input component has focus.       | `CustomEvent<void>`                   |
| `inputInput`   | Gets emitted when a keyboard input occurred.           | `CustomEvent<KeyboardEvent>`          |
| `paxStyle`     | Gets emitted when the styles change.                   | `CustomEvent<StyleEventDetail>`       |


## Methods

### `focusInput() => Promise<void>`

When called focuses the native input element of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
