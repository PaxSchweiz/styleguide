# pax-tooltip

The `pax-tooltip` appears on top of the page's content and displays additional information.

## Notes

* Technically any content can be displayed inside a `pax-tooltip`, but it is optimized for plain text with `pax-link` elements.
* Mainly used in combination with `pax-label`.
* Clicking the question mark icon opens the tooltip. Clicking outside a tooltip closes the tooltip again.
* A close button for the tooltip is optional.
* A tooltip has fixed width of 260px.

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
          <pax-label> Pax Label
            <pax-tooltip slot="end">
              Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
            </pax-tooltip>
          </pax-label>
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
          <pax-label> Pax Label mit Close-Button
            <pax-tooltip closable slot="end">
              Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
            </pax-tooltip>
          </pax-label>
        </div>
      </div>
    </pax-col>
  </pax-row>
</pax-grid>

<pax-message-strip icon="info">`pax-tooltip` works well in combination with `pax-label` and `pax-link`</pax-message-strip>

<pax-panel>
  <div slot="header">Code</div>

```html
<pax-label>
    Pax Label
    <pax-tooltip slot="end">
        Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
    </pax-tooltip>
</pax-label>
```

</pax-panel>

## Basic

<pax-tooltip>
    Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-tooltip>

```html
<pax-tooltip>
    Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-tooltip>
```

### with close icon

<pax-tooltip closable>
    Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-tooltip>

```html
<pax-tooltip closable>
    Just my luck, no ice. Is this my <pax-link href="#">espresso machine</pax-link>? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-tooltip>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                  | Type      | Default |
| ---------- | ---------- | -------------------------------------------- | --------- | ------- |
| `closable` | `closable` | If set, the tooltip displays a close button. | `boolean` | `false` |


## Events

| Event         | Description                                         | Type                |
| ------------- | --------------------------------------------------- | ------------------- |
| `afterClose`  | Gets emitted after the dialog component is closed.  | `CustomEvent<void>` |
| `afterOpen`   | Gets emitted after the dialog component is opened.  | `CustomEvent<void>` |
| `beforeClose` | Gets emitted before the dialog component is closed. | `CustomEvent<void>` |
| `beforeOpen`  | Gets emitted before the dialog component is opened. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
