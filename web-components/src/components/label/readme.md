# pax-label

The `pax-label` is a wrapper component that can be used in two basic scenarios: (a) as a
standalone label – with `pax-toggle`, or `pax-progress-bar` –  or (b) as an
associated input label within forms – with `pax-input`, `pax-select`, `pax-checkbox`, or `pax-radio`.

## Notes

* The label is truncated by default if it exceeds the available space. This can be changed by setting the `wrap` attribute.
* The `data-suffix` attribute is only rendered when nested inside a `<form>` element.

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
                    <pax-grid>
                        <pax-row>
                            <pax-col>
                                <pax-label>Standalone label</pax-label>
                            </pax-col>
                        </pax-row>
                        <pax-row>
                            <pax-col>
                                <pax-label style="width: 240px;">Long labels are always truncated by default</pax-label>
                            </pax-col>
                        </pax-row>
                        <pax-row>
                            <pax-col>
                                <pax-label wrap style="width: 240px;">Long labels can wrap if the 'wrap' property is set</pax-label>
                            </pax-col>
                        </pax-row>
                    </pax-grid>
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
                    <form action="">
                        <pax-grid>
                            <pax-row>
                                <pax-col>
                                    <pax-text-field>
                                        <pax-label>Input label</pax-label>
                                        <pax-input/>
                                    </pax-text-field>
                                </pax-col>
                            </pax-row>
                            <pax-row>
                                <pax-col>
                                    <pax-text-field>
                                        <pax-label suffix="opzionale">Semplice etichetta</pax-label>
                                        <pax-input/>
                                    </pax-text-field>
                                </pax-col>
                            </pax-row>
                            <pax-row>
                                <pax-col>
                                    <pax-text-field>
                                        <pax-label required>Required labels have no suffix</pax-label>
                                        <pax-input/>
                                    </pax-text-field>
                                </pax-col>
                            </pax-row>
                            <pax-row>
                                <pax-col>
                                    <pax-text-field>
                                        <pax-label style="width: 240px;">Long labels are always truncated by default</pax-label>
                                        <pax-input/>
                                    </pax-text-field>
                                </pax-col>
                            </pax-row>
                            <pax-row>
                                <pax-col>
                                    <pax-text-field>
                                        <pax-label wrap style="width: 240px;">Long labels can wrap if the 'wrap' property is set</pax-label>
                                        <pax-input/>
                                    </pax-text-field>
                                </pax-col>
                            </pax-row>
                          </pax-grid>
                    </form>
                </div>
            </div>
        </pax-col>
    </pax-row>
</pax-grid>

## Basic

<pax-label>Lorem ipsum</pax-label>

```html
<pax-label>Lorem ipsum</pax-label>
````

### Wrapping

<pax-label wrap style="width: 240px;">Lorem ipsum lorem ipsum lorem ipsum</pax-label>

```html
<pax-label wrap>Lorem ipsum lorem ipsum lorem ipsum</pax-label>
````

## Within a form

### Default

<form>
    <pax-label>Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label>Lorem ipsum</pax-label>
</form>
````

### Required

<form>
    <pax-label required>Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label required>Lorem ipsum</pax-label>
</form>
````

#### With custom suffix

<form>
    <pax-label suffix="dolor sit">Lorem ipsum</pax-label>
</form>

```html
<form>
    <pax-label suffix="dolor sit">Lorem ipsum</pax-label>
</form>
````


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                          | Type         | Default      |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `for`      | `for`      | The id of of the element that this label should be linked to.                                        | `string`     | `undefined`  |
| `position` | `position` | The position determines where and how the label behaves inside an item.                              | `"floating"` | `undefined`  |
| `required` | `required` | If set, the label component gets marked as required.                                                 | `boolean`    | `undefined`  |
| `suffix`   | `suffix`   | The suffix that should be displayed when used in combination with an input component.                | `string`     | `'optional'` |
| `wrap`     | `wrap`     | If set, the label component wraps other wise it gets clipped with '...' when there is no space left. | `boolean`    | `undefined`  |


## Events

| Event      | Description                          | Type                            |
| ---------- | ------------------------------------ | ------------------------------- |
| `paxStyle` | Gets emitted when the styles change. | `CustomEvent<StyleEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
