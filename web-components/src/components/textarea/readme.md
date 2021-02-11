# pax-textarea

The `pax-textarea` is a wrapper to the HTML textarea element.

## Notes

* A `name` attribute must be provided if it is used with a standard `<form>` element.
* It is possible to combine it with stacked or floating labels. Prefer floating labels.
* Invalid states are included, validation is not.
* It can only be resized vertically, not horizontally.

## Usage

<pax-grid>
    <pax-row>
        <pax-col>
            <div class="browser">
                <div class="browser-toolbar">
                    <div class="browser-dot"></div>
                    <div class="browser-dot"></div>
                    <div class="browser-dot"></div>
                </div>
                <div class="browser-body">
                    <pax-item>
                      <pax-textarea placeholder="Placeholder"/>
                    </pax-item>
                </div>
            </div>
        </pax-col>
    </pax-row>
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
                          <pax-textarea id="default-floating"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-prefilled" position="floating">Prefilled</pax-label>
                          <pax-textarea id="default-floating-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-disabled" position="floating">Disabled</pax-label>
                          <pax-textarea disabled id="default-floating-disabled"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-disabled-prefilled" position="floating">Disabled and Prefilled</pax-label>
                          <pax-textarea disabled id="default-floating-disabled-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-readonly-prefilled" position="floating">Readonly</pax-label>
                          <pax-textarea readonly id="default-floating-readonly-prefilled" value="With value, truncated, therefore we need a longer value, that really stretches very very very long"/>
                        </pax-item>
                        <pax-item>
                          <pax-label for="default-floating-invalid" position="floating">Invalid</pax-label>
                          <pax-textarea invalid error="Error message" id="default-floating-invalid" value="Wrong value"/>
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
                          <pax-textarea id="required-floating"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-prefilled" position="floating">Prefilled</pax-label>
                          <pax-textarea id="required-floating-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-disabled" position="floating">Disabled</pax-label>
                          <pax-textarea disabled id="required-floating-disabled"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-disabled-prefilled" position="floating">Disabled and Prefilled</pax-label>
                          <pax-textarea disabled id="required-floating-disabled-prefilled" value="Lorem ipsum"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required readonly for="required-floating-readonly-prefilled" position="floating">Readonly</pax-label>
                          <pax-textarea readonly id="required-floating-readonly-prefilled" value="With value, truncated, therefore we need a longer value, that really stretches very very very long"/>
                        </pax-item>
                        <pax-item>
                          <pax-label required for="required-floating-invalid" position="floating">Invalid</pax-label>
                          <pax-textarea invalid error="Error message" id="required-floating-invalid"/>
                        </pax-item>
                    </form>
                </div>
            </div>
        </pax-col>
    </pax-row>
</pax-grid>

<pax-message-strip icon="info">Use `pax-textarea` with a placeholder or in combination with `pax-item` and `pax-label`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-item>
  <pax-textarea id="foo" name="foo" placeholder="Placeholder"/>
</pax-item>
```

```html
<pax-item>
  <pax-label for="foo" position="floating">Label</pax-label>
  <pax-textarea id="foo" name="foo"/>
</pax-item>
```

</pax-panel>

## Basic

<pax-textarea></pax-textarea>

```html
<pax-textarea/>
```

### With value

<pax-textarea value="Lorem ipsum"></pax-textarea>

```html
<pax-textarea value="Lorem ipsum"/>
```

### With more rows

<pax-textarea rows="5"></pax-textarea>

```html
<pax-textarea rows="5"/>
```

## Disabled

<pax-textarea disabled></pax-textarea>

```html
<pax-textarea disabled/>
```

## Readonly

<pax-textarea readonly value="Lorem ipsum"></pax-textarea>

```html
<pax-textarea readonly value="Lorem ipsum"/>
```

## Invalid

<pax-textarea invalid></pax-textarea>

```html
<pax-textarea invalid/>
```

### with error message

<pax-textarea invalid error="Error message"></pax-textarea>

```html
<pax-textarea invalid error="Error message"/>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                             | Type      | Default     |
| ------------- | ------------- | ----------------------------------------------------------------------- | --------- | ----------- |
| `disabled`    | `disabled`    | If set, the user cannot interact with the textarea component.           | `boolean` | `false`     |
| `error`       | `error`       | The error message that is displayed next to the component.              | `string`  | `undefined` |
| `invalid`     | `invalid`     | If set, the component is visually marked as invalid.                    | `boolean` | `false`     |
| `name`        | `name`        | The name of the hidden input, which is submitted with the form data.    | `string`  | `undefined` |
| `placeholder` | `placeholder` | The placeholder message that should be displayed when not value is set. | `string`  | `undefined` |
| `readonly`    | `readonly`    | If set, the user cannot change the value of the textarea component.     | `boolean` | `false`     |
| `rows`        | `rows`        | The initial height of the textarea component defined in rows.           | `number`  | `3`         |
| `value`       | `value`       | The value of the textarea component.                                    | `string`  | `''`        |


## Events

| Event             | Description                                               | Type                                     |
| ----------------- | --------------------------------------------------------- | ---------------------------------------- |
| `paxStyle`        | Gets emitted when the styles change.                      | `CustomEvent<StyleEventDetail>`          |
| `textareaBlurred` | Gets emitted when the textarea component lost focus.      | `CustomEvent<void>`                      |
| `textareaChanged` | Gets emitted when the textarea component's value changed. | `CustomEvent<TextareaChangeEventDetail>` |
| `textareaFocused` | Gets emitted when the textarea component has focus.       | `CustomEvent<void>`                      |
| `textareaInput`   | Gets emitted when a keyboard input occurred.              | `CustomEvent<KeyboardEvent>`             |


## Methods

### `focusInput() => Promise<void>`

When called focuses the native textarea element of the component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
