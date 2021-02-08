# pax-button

A simple push button. Optionally in light or dark mode, as a clear or ghost button.

<pax-row>
    <pax-col col-sm-6>
        <div class="browser">
            <div class="browser-toolbar">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
            </div>
            <div class="browser-body">
        		<pax-button>Enabled</pax-button>
        		<pax-button type="reset">Reset</pax-button>
        		<pax-button type="submit">Submit</pax-button>
        		<pax-button disabled>Disabled</pax-button>
        		<br><br>
        		<pax-button fill="clear">Enabled</pax-button>
                <pax-button fill="clear" type="reset">Reset</pax-button>
                <pax-button fill="clear" type="submit">Submit</pax-button>
                <pax-button fill="clear" disabled>Disabled</pax-button>
                <br><br>
                <pax-button fill="outline">Enabled</pax-button>
                <pax-button fill="outline" type="reset">Reset</pax-button>
                <pax-button fill="outline" type="submit">Submit</pax-button>
                <pax-button fill="outline" disabled>Disabled</pax-button>
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
                <pax-button><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <br><br>
                <pax-button fill="clear"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button fill="clear" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button fill="clear"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button fill="clear" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <br><br>
                <pax-button fill="outline"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button fill="outline" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button fill="outline"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button fill="outline" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
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
            <div class="browser-body" style="background-color: #EFF3F6;">
            	<pax-button mode="light">Enabled</pax-button>
        		<pax-button mode="light" type="reset">Reset</pax-button>
        		<pax-button mode="light" type="submit">Submit</pax-button>
        		<pax-button mode="light" disabled>Disabled</pax-button>
        		<br><br>
        		<pax-button mode="light" fill="clear">Enabled</pax-button>
                <pax-button mode="light" fill="clear" type="reset">Reset</pax-button>
                <pax-button mode="light" fill="clear" type="submit">Submit</pax-button>
                <pax-button mode="light" fill="clear" disabled>Disabled</pax-button>
                <br><br>
                <pax-button mode="light" fill="outline">Enabled</pax-button>
                <pax-button mode="light" fill="outline" type="reset">Reset</pax-button>
                <pax-button mode="light" fill="outline" type="submit">Submit</pax-button>
                <pax-button mode="light" fill="outline" disabled>Disabled</pax-button>
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
            <div class="browser-body" style="background-color: #EFF3F6;">
        		<pax-button mode="light"><pax-icon slot="icon-only"></pax-icon></pax-button>
        		<pax-button mode="light" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
        		<pax-button mode="light"><pax-icon slot="start"></pax-icon>With Text</pax-button>
        		<pax-button mode="light" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
        		<br><br>
                <pax-button mode="light" fill="clear"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="light" fill="clear" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="light" fill="clear"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button mode="light" fill="clear" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <br><br>
                <pax-button mode="light" fill="outline"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="light" fill="outline" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="light" fill="outline"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button mode="light" fill="outline" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
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
            <div class="browser-body" style="background-color: #3B3A53;">
            	<pax-button mode="dark">Enabled</pax-button>
        		<pax-button mode="dark" type="reset">Reset</pax-button>
        		<pax-button mode="dark" type="submit">Submit</pax-button>
        		<pax-button mode="dark" disabled>Disabled</pax-button>
        		<br><br>
        		<pax-button mode="dark" fill="clear">Enabled</pax-button>
                <pax-button mode="dark" fill="clear" type="reset">Reset</pax-button>
                <pax-button mode="dark" fill="clear" type="submit">Submit</pax-button>
                <pax-button mode="dark" fill="clear" disabled>Disabled</pax-button>
                <br><br>
                <pax-button mode="dark" fill="outline">Enabled</pax-button>
                <pax-button mode="dark" fill="outline" type="reset">Reset</pax-button>
                <pax-button mode="dark" fill="outline" type="submit">Submit</pax-button>
                <pax-button mode="dark" fill="outline" disabled>Disabled</pax-button>
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
            <div class="browser-body" style="background-color: #3B3A53;">
        		<pax-button mode="dark"><pax-icon slot="icon-only"></pax-icon></pax-button>
        		<pax-button mode="dark" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
        		<pax-button mode="dark"><pax-icon slot="start"></pax-icon>With Text</pax-button>
        		<pax-button mode="dark" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
        		<br><br>
                <pax-button mode="dark" fill="clear"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="dark" fill="clear" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="dark" fill="clear"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button mode="dark" fill="clear" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <br><br>
                <pax-button mode="dark" fill="outline"><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="dark" fill="outline" disabled><pax-icon slot="icon-only"></pax-icon></pax-button>
                <pax-button mode="dark" fill="outline"><pax-icon slot="start"></pax-icon>With Text</pax-button>
                <pax-button mode="dark" fill="outline" disabled><pax-icon slot="start"></pax-icon>With Text</pax-button>
            </div>
        </div>
    </pax-col>
</pax-row>

## Basic

<pax-button>Enabled</pax-button>
<pax-button type="reset">Reset</pax-button>
<pax-button type="submit">Submit</pax-button>

```html
<pax-button>Enabled</pax-button>
<pax-button type="reset">Reset</pax-button>
<pax-button type="submit">Submit</pax-button>
```

### Disabled

<pax-button disabled>Disabled</pax-button>
<pax-button disabled type="reset">Reset</pax-button>
<pax-button disabled type="submit">Submit</pax-button>

```html
<pax-button disabled>Disabled</pax-button>
<pax-button disabled type="reset">Reset</pax-button>
<pax-button disabled type="submit">Submit</pax-button>
```

### With icon

<pax-button><pax-icon slot="icon-only"></pax-icon></pax-button>
<pax-button><pax-icon slot="start"></pax-icon>With Text</pax-button>

```html
<pax-button><pax-icon slot="icon-only"></pax-icon></pax-button>
<pax-button><pax-icon slot="start"></pax-icon>With Text</pax-button>
```

## Clear

<pax-button fill="clear">Enabled</pax-button>
<pax-button fill="clear" type="reset">Reset</pax-button>
<pax-button fill="clear" type="submit">Submit</pax-button>

```html
<pax-button fill="clear">Enabled</pax-button>
<pax-button fill="clear" type="reset">Reset</pax-button>
<pax-button fill="clear" type="submit">Submit</pax-button>
```

## Ghost

<pax-button fill="outline">Enabled</pax-button>
<pax-button fill="outline" type="reset">Reset</pax-button>
<pax-button fill="outline" type="submit">Submit</pax-button>

```html
<pax-button fill="outline">Enabled</pax-button>
<pax-button fill="outline" type="reset">Reset</pax-button>
<pax-button fill="outline" type="submit">Submit</pax-button>
```

## Light mode

<pax-card style="background-color: #EFF3F6;">
    <pax-button mode="light">Enabled</pax-button>
    <pax-button mode="light" fill="clear">Enabled</pax-button>
    <pax-button mode="light" fill="outline">Enabled</pax-button>
</pax-card>

```html
<pax-button mode="light">Enabled</pax-button>
<pax-button mode="light" fill="clear">Enabled</pax-button>
<pax-button mode="light" fill="outline">Enabled</pax-button>
```

## Dark mode

<pax-card style="background-color: #3B3A53;">
    <pax-button mode="dark">Enabled</pax-button>
    <pax-button mode="dark" fill="clear">Enabled</pax-button>
    <pax-button mode="dark" fill="outline">Enabled</pax-button>
</pax-card>

```html
<pax-button mode="dark">Enabled</pax-button>
<pax-button mode="dark" fill="clear">Enabled</pax-button>
    <pax-button mode="dark" fill="outline">Enabled</pax-button>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                      | Type      | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the button component.                                                   | `boolean` | `undefined` |
| `fill`     | `fill`     | The type of button that should be displayed. Options are: `'clear'` or `'outline'`                               | `string`  | `undefined` |
| `mode`     | `mode`     | The mode changes the appearance of the button depending on the overall theme. Options are: `'light'` or `'dark'` | `string`  | `undefined` |
| `type`     | `type`     | The type of the native button that gets rendered. Options are: `'submit'` or `'reset'`                           | `string`  | `undefined` |


## Events

| Event         | Description                         | Type                |
| ------------- | ----------------------------------- | ------------------- |
| `buttonBlur`  | Emitted when the button lost focus. | `CustomEvent<void>` |
| `buttonFocus` | Emitted when the button has focus.  | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
