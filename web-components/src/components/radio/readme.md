# pax-radio

See `pax-radio-group` for a real use case.

## Notes

* The `pax-radio` should only be used inside a `pax-radio-group`.
* A `value` attribute must be provided if it is used with a standard `<form>` element.
* Clicking on a checkbox will set the `checked` attribute to `true` und update the value of the wrapping `pax-radio-group` element.
* `pax-radio` elements can be displayed as inline or listed using `pax-list`.

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
          <pax-headline level="3">Default with listing layout</pax-headline>
          <form action="">
            <pax-radio-group name="default-listing" value="default-listing-checked">
              <pax-list>
                <pax-item>
                  <pax-radio id="default-listing" value="default-listing" slot="start"></pax-radio>
                  <pax-label for="default-listing">Label</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio checked id="default-listing-checked" value="default-listing-checked" slot="start"></pax-radio>
                  <pax-label for="default-listing-checked">Checked</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio disabled id="default-listing-disabled" value="default-listing-disabled" slot="start"></pax-radio>
                  <pax-label for="default-listing-disabled" disabled>Disabled</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-listing-truncated" value="default-listing-truncated" slot="start"></pax-radio>
                  <pax-label for="default-listing-truncated">Label with a long text that will be truncated</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-listing-wrap" value="default-listing-wrap" slot="start"></pax-radio>
                  <pax-label for="default-listing-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-listing-link" value="default-listing-link" slot="start"></pax-radio>
                  <pax-label for="default-listing-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
                </pax-item>
              </pax-list>
            </pax-radio-group>
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
            <pax-radio-group name="required-listing" value="required-listing-checked">
              <pax-list>
                <pax-item>
                  <pax-radio id="required-listing" value="required-listing" slot="start"></pax-radio>
                  <pax-label required for="required-listing">Label</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio checked id="required-listing-checked" value="required-listing-checked" slot="start"></pax-radio>
                  <pax-label required for="required-listing-checked">Checked</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio disabled id="required-listing-disabled" value="required-listing-disabled" slot="start"></pax-radio>
                  <pax-label required for="required-listing-disabled" disabled>Disabled</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-listing-truncated" value="required-listing-truncated" slot="start"></pax-radio>
                  <pax-label required for="required-listing-truncated">Label with a long text that will be truncated</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-listing-wrap" value="required-listing-wrap" slot="start"></pax-radio>
                  <pax-label required for="required-listing-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-listing-link" value="required-listing-link" slot="start"></pax-radio>
                  <pax-label required for="required-listing-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
                </pax-item>
              </pax-list>
            </pax-radio-group>
          </form>
        </div>
      </div>
    </pax-col>
  </pax-row>
</pax-grid>

<pax-message-strip icon="info">Use `pax-radio` in combination with `pax-radio-group`, `pax-list`, `pax-item` and `pax-label`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-radio-group name="foo">
    <pax-list>
        <pax-item>
            <pax-radio id="radio-1" value="radio-1" slot="start"></pax-radio>
            <pax-label for="radio-1">Label</pax-label>
        </pax-item>
        <pax-item>
            <pax-radio id="radio-2" value="radio-2" slot="start"></pax-radio>
            <pax-label for="radio-2">Label</pax-label>
        </pax-item>
    </pax-list>
</pax-radio-group>
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
            <pax-radio-group name="default" value="default-checked">
              <pax-list inline>
                <pax-item>
                  <pax-radio id="default" value="default" slot="start"></pax-radio>
                  <pax-label for="default">Label</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-checked" value="default-checked" slot="start"></pax-radio>
                  <pax-label for="default-checked">Checked</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio disabled id="default-disabled" value="default-disabled" slot="start"></pax-radio>
                  <pax-label for="default-disabled" disabled>Disabled</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-truncated" value="default-truncated" slot="start"></pax-radio>
                  <pax-label for="default-truncated">Label with a long text that will be truncated</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-wrap" value="default-wrap" slot="start"></pax-radio>
                  <pax-label for="default-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="default-link" value="default-link" slot="start"></pax-radio>
                  <pax-label for="default-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
                </pax-item>
              </pax-list>
            </pax-radio-group>
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
            <pax-radio-group>
              <pax-list inline>
                <pax-item>
                  <pax-radio id="required" value="required" slot="start"></pax-radio>
                  <pax-label required for="required">Standard</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio checked id="required-checked" value="required-checked" slot="start"></pax-radio>
                  <pax-label required for="required-checked">Checked</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio disabled id="required-disabled" value="required-disabled" slot="start"></pax-radio>
                  <pax-label required for="required-disabled">Disabled</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-truncated" value="required-truncated" slot="start"></pax-radio>
                  <pax-label required for="required-truncated">Label with a long text that will be truncated</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-wrap" value="required-wrap" slot="start"></pax-radio>
                  <pax-label required for="required-wrap" wrap>Label with a long text that will wrap to the next line</pax-label>
                </pax-item>
                <pax-item>
                  <pax-radio id="required-link" value="required-link" slot="start"></pax-radio>
                  <pax-label required for="required-link">Label with <pax-link href="https://re-lounge.com" target="_blank">link</pax-link></pax-label>
                </pax-item>
              </pax-list>
            </pax-radio-group>
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
<pax-radio-group name="foo">
    <pax-list inline>
        <pax-item>
            <pax-radio id="radio-1" value="radio-1" slot="start"></pax-radio>
            <pax-label for="radio-1">Label</pax-label>
        </pax-item>
        <pax-item>
            <pax-radio id="radio-2" value="radio-2" slot="start"></pax-radio>
            <pax-label for="radio-2">Label</pax-label>
        </pax-item>
    </pax-list>
</pax-radio-group>
```

</pax-panel>

## Basic

<pax-radio></pax-radio>

```html
<pax-radio></pax-radio>
```

### with value

<pax-radio value="potential-value-of-radio-group"></pax-radio>

```html
<pax-radio value="potential-value-of-radio-group"></pax-radio>
```

## Disabled

<pax-radio disabled></pax-radio>

```html
<pax-radio disabled></pax-radio>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                          | Type      | Default     |
| ---------- | ---------- | -------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | If set, the user cannot interact with the checkbox component.        | `boolean` | `false`     |
| `name`     | `name`     | The name of the hidden input, which is submitted with the form data. | `string`  | `undefined` |
| `value`    | `value`    | The value of the radio, which is submitted with the form data.       | `string`  | `undefined` |


## Events

| Event        | Description                                       | Type                            |
| ------------ | ------------------------------------------------- | ------------------------------- |
| `paxStyle`   | Gets emitted when the styles change.              | `CustomEvent<StyleEventDetail>` |
| `radioBlur`  | Gets emitted when the radio component lost focus. | `CustomEvent<void>`             |
| `radioFocus` | Gets emitted when the radio component has focus.  | `CustomEvent<void>`             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
