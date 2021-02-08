# pax-checkbox

The `pax-checkbox` allows the selection of multiple options from a set of options.

## Notes

* A `name` attribute must be provided if it is used with a standard `<form>` element. A hidden input will be rendered that holds the value that will be submitted.
* If the `value` of a checkbox is not provided, it falls back to `"on"`.
* Clicking on a checkbox will toggle the `checked` attribute.
* They can also be checked programmatically by setting the `checked` attribute.
* They can be displayed as inline or listed using `pax-list`.
* An `icon` attribute with the value `'switch'` renders a switch icon instead of the checkbox icon.

## Usage

<pax-grid>
  <pax-row>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Optional with listing layout</pax-headline>
          <form action="">
            <pax-list>
              <pax-item>
                <pax-checkbox id="default-listing" name="default-listing" slot="start"></pax-checkbox>
                <pax-label for="default-listing">Label</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox checked id="default-listing-checked" name="default-listing-checked" slot="start"></pax-checkbox>
                <pax-label for="default-listing-checked">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox disabled id="default-listing-disabled" name="default-listing-disabled" slot="start"></pax-checkbox>
                <pax-label for="default-listing-disabled" disabled>Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-listing" name="default-listing" slot="start"></pax-checkbox>
                <pax-label for="default-listing">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-listing" name="default-listing" slot="start"></pax-checkbox>
                <pax-label for="default-listing" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-listing-link" name="default-listing-link" slot="start"></pax-checkbox>
                <pax-label for="default-listing-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox value="custom-value" id="default-listing-custom-value" name="default-listing-custom-value" slot="start"></pax-checkbox>
                <pax-label for="default-listing-custom-value">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
        </div>
    </pax-col>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Required with listing layout</pax-headline>
          <form action="">
            <pax-list>
              <pax-item>
                <pax-checkbox id="required-listing" name="required-listing" slot="start"></pax-checkbox>
                <pax-label required for="required-listing">Label</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox checked id="required-listing-checked" name="required-listing-checked" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-checked">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox disabled id="required-listing-disabled" name="required-listing-disabled" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-disabled" disabled>Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-listing" name="required-listing" slot="start"></pax-checkbox>
                <pax-label required for="required-listing">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-listing" name="required-listing" slot="start"></pax-checkbox>
                <pax-label required for="required-listing" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-listing-link" name="required-listing-link" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox value="custom-value" id="required-listing-custom-value" name="required-listing-custom-value" slot="start"></pax-checkbox>
                <pax-label for="required-listing-custom-value">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
      </div>
    </pax-col>
  </pax-row>
</pax-grid>

<pax-message-strip icon="info">Use `pax-checkbox` in combination with `pax-list`, `pax-item` and `pax-label`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-list>
    <pax-item>
        <pax-checkbox id="foo" name="foo" slot="start"></pax-checkbox>
        <pax-label for="foo">Label</pax-label>
    </pax-item>
</pax-list>
```

</pax-panel>

<pax-grid>
  <pax-row>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Optional with inline layout</pax-headline>
          <form action="">
            <pax-list inline>
              <pax-item>
                <pax-checkbox id="default" name="default" slot="start"></pax-checkbox>
                <pax-label for="default">Label</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox checked id="default-checked" name="default-checked" slot="start"></pax-checkbox>
                <pax-label for="default-checked">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox disabled id="default-disabled" name="default-disabled" slot="start"></pax-checkbox>
                <pax-label for="default-disabled" disabled>Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-truncated" name="default-truncated" slot="start"></pax-checkbox>
                <pax-label for="default-truncated">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-wrap" name="default-wrap" slot="start"></pax-checkbox>
                <pax-label for="default-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="default-link" name="default-link" slot="start"></pax-checkbox>
                <pax-label for="default-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox value="custom-value" id="default-custom-value" name="default-custom-value" slot="start"></pax-checkbox>
                <pax-label for="default-custom-value">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
      </div>
    </pax-col>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Required with inline layout</pax-headline>
          <form action="">
            <pax-list inline>
              <pax-item>
                <pax-checkbox id="required" name="required" slot="start"></pax-checkbox>
                <pax-label required for="required">Standard</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox checked id="required-checked" name="required-checked" slot="start"></pax-checkbox>
                <pax-label required for="required-checked">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox disabled id="required-disabled" name="required-disabled" slot="start"></pax-checkbox>
                <pax-label required for="required-disabled">Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-truncated" name="required-truncated" slot="start"></pax-checkbox>
                <pax-label required for="required-truncated">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-wrap" name="required-wrap" slot="start"></pax-checkbox>
                <pax-label required for="required-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox id="required-link" name="required-link" slot="start"></pax-checkbox>
                <pax-label required for="required-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox value="custom-value" id="required-custom-value" name="required-custom-value" slot="start"></pax-checkbox>
                <pax-label required for="required-custom-value">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
      </div>
    </pax-col>
  </pax-row>
</pax-grid>

<pax-message-strip icon="info">For using an inline layout add the `inline` attribute to the `pax-list`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-list inline>
    <pax-item>
        <pax-checkbox id="foo" name="foo" slot="start"></pax-checkbox>
        <pax-label for="foo">Label</pax-label>
    </pax-item>
</pax-list>
```

</pax-panel>

<pax-grid>
  <pax-row>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Optional with switch icon</pax-headline>
          <form action="">
            <pax-list>
              <pax-item>
                <pax-checkbox icon="switch" id="default-listing-switch" name="default-listing-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-switch">Label</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" checked id="default-listing-checked-switch" name="default-listing-checked-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-checked-switch">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" disabled id="default-listing-disabled-switch" name="default-listing-disabled-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-disabled-switch" disabled>Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="default-listing-switch" name="default-listing-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-switch">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="default-listing-switch" name="default-listing-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-switch" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="default-listing-link-switch" name="default-listing-link-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-link-switch">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" value="custom-value" id="default-listing-custom-value-switch" name="default-listing-custom-value-switch" slot="start"></pax-checkbox>
                <pax-label for="default-listing-custom-value-switch">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
        </div>
    </pax-col>
    <pax-col col-md-6>
      <div class="browser">
        <div class="browser-toolbar">
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
          <div class="browser-dot"></div>
        </div>
        <div class="browser-body">
          <pax-headline level="3">Required with switch icon</pax-headline>
          <form action="">
            <pax-list>
              <pax-item>
                <pax-checkbox icon="switch" id="required-listing-switch" name="required-listing-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-switch">Label</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" checked id="required-listing-checked-switch" name="required-listing-checked-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-checked-switch">Checked</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" disabled id="required-listing-disabled-switch" name="required-listing-disabled-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-disabled-switch" disabled>Disabled</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="required-listing-switch" name="required-listing-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-switch">Label with a long text that will be truncated</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="required-listing-switch" name="required-listing-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-switch" wrap>Label with a long text that will wrap to the next line</pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" id="required-listing-link-switch" name="required-listing-link-switch" slot="start"></pax-checkbox>
                <pax-label required for="required-listing-link-switch">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
              </pax-item>
              <pax-item>
                <pax-checkbox icon="switch" value="custom-value" id="required-listing-custom-value-switch" name="required-listing-custom-value-switch" slot="start"></pax-checkbox>
                <pax-label for="required-listing-custom-value-switch">Custom Value</pax-label>
              </pax-item>
            </pax-list>
          </form>
        </div>
      </div>
    </pax-col>
  </pax-row>
</pax-grid>

<pax-message-strip icon="info">For using another icon add the `icon` attribute to the `pax-checkbox`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-list>
    <pax-item>
        <pax-checkbox icon="switch" id="foo" name="foo" slot="start"></pax-checkbox>
        <pax-label for="foo">Label</pax-label>
    </pax-item>
</pax-list>
```

</pax-panel>

## Basic

<pax-checkbox></pax-checkbox>

```html
<pax-checkbox></pax-checkbox>
```

### which is preselected

<pax-checkbox checked></pax-checkbox>

```html
<pax-checkbox checked></pax-checkbox>
```

### with hidden input

<pax-checkbox name="name-of-hidden-input"></pax-checkbox>

```html
<pax-checkbox name="name-of-hidden-input"></pax-checkbox>
```

### with hidden input and custom value

<pax-checkbox name="name-of-hidden-input" value="custom-value"></pax-checkbox>

```html
<pax-checkbox name="name-of-hidden-input" value="custom-value"></pax-checkbox>
```

### with switch icon

<pax-checkbox icon="switch"></pax-checkbox>

```html
<pax-checkbox icon="switch"></pax-checkbox>
```

## Disabled

<pax-checkbox disabled></pax-checkbox>

```html
<pax-checkbox disabled></pax-checkbox>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                      | Type      | Default      |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------ | --------- | ------------ |
| `checked`  | `checked`  | If set, the checkbox is selected.                                                                | `boolean` | `false`      |
| `disabled` | `disabled` | If set, the user cannot interact with the checkbox component.                                    | `boolean` | `false`      |
| `icon`     | `icon`     | The type of the checkbox icon. Options are: `'checkbox'` \| `'switch'`. Defaults to `'checkbox'` | `string`  | `'checkbox'` |
| `name`     | `name`     | The name of the hidden input, which is submitted with the form data.                             | `string`  | `undefined`  |
| `value`    | `value`    | The value of the checkbox, which is submitted with the form data.                                | `string`  | `'on'`       |


## Events

| Event            | Description                                          | Type                                        |
| ---------------- | ---------------------------------------------------- | ------------------------------------------- |
| `checkboxBlur`   | Gets emitted when the checkbox component lost focus. | `CustomEvent<void>`                         |
| `checkboxChange` | Gets emitted when the checked property has changed.  | `CustomEvent<CheckboxChangeEventInterface>` |
| `checkboxFocus`  | Gets emitted when the checkbox component has focus.  | `CustomEvent<void>`                         |
| `paxStyle`       | Gets emitted when the styles change.                 | `CustomEvent<StyleEventDetail>`             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
