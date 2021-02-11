# pax-dialog

The `pax-dialog` appears on top of the page's content and must be dismissed. It can be used to prompt the user for an action or confirmation.

## Notes

* Use the method `open` to open the dialog.
* Use the method `close` to close the dialog.

## Usage

```html
<pax-button id="open-dialog">Open dialog</pax-button>
<pax-dialog id="dialog" header="Dialog header">
    <p>Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.</p>
    <div slot="footer">
        <pax-button id="cancel-button" fill="clear">Cancel</pax-button>
        <pax-button id="ok-button">Ok</pax-button>
    </div>
</pax-dialog>
<script>
    var dialog = document.getElementById('dialog');
    var openButton = document.getElementById('open-button');
    var cancelButton = document.getElementById('cancel-button');
    var okButton = document.getElementById('ok-button');

    openButton.addEventListener('click', function () {
      dialog.open();
    });

    cancelButton.addEventListener('click', function () {
      dialog.close();
    });

    okButton.addEventListener('click', function () {
      dialog.close();
    });
</script>
```

## Basic

```html
<pax-dialog>
    <p>Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.</p>
</pax-dialog>
```

### with header

```html
<pax-dialog header="Dialog header">
    <p>Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.</p>
</pax-dialog>
```

### with footer

```html
<pax-dialog>
    <p>Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.</p>
    <div slot="footer">
        <pax-button fill="clear">Cancel</pax-button>
        <pax-button>Ok</pax-button>
    </div>
</pax-dialog>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description             | Type     | Default |
| -------- | --------- | ----------------------- | -------- | ------- |
| `header` | `header`  | The text of the header. | `string` | `''`    |


## Events

| Event         | Description                                         | Type                |
| ------------- | --------------------------------------------------- | ------------------- |
| `afterClose`  | Gets emitted after the dialog component is closed.  | `CustomEvent<void>` |
| `afterOpen`   | Gets emitted after the dialog component is opened.  | `CustomEvent<void>` |
| `beforeClose` | Gets emitted before the dialog component is closed. | `CustomEvent<void>` |
| `beforeOpen`  | Gets emitted before the dialog component is opened. | `CustomEvent<void>` |


## Methods

### `close() => Promise<void>`

When called closes the dialog component.

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

When called opens the dialog component.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
