# pax-panel

Panels allow generic content to be collapsed.

* If the generic content is something else than text or another pax web component, it needs to be styled separately, i.e. margins.

<div class="browser">
    <div class="browser-toolbar">
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
        <div class="browser-dot"></div>
    </div>
    <div class="browser-body">
        <pax-panel open>
            <div slot="header">Panel Header</div>
            Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
        </pax-panel>
        <pax-panel>
            <div slot="header">Panel Header</div>
            Hey, you know how I'm, like, always trying to save the planet? Here's my chance. You really think you can fly that thing? Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye! Do you have any idea how long it takes those cups to decompose.
        </pax-panel>
        <pax-panel>
            <div slot="header">Panel Header</div>
            This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!
        </pax-panel>
    </div>
</div>

## Basic

<pax-panel>
    <div slot="header">Panel Header</div>
    Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-panel>

```html
<pax-panel>
    <div slot="header">Panel Header</div>
    Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-panel>
```

### Initially open

<pax-panel open>
    <div slot="header">Panel Header</div>
    Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-panel>

```html
<pax-panel open>
    <div slot="header">Panel Header</div>
    Just my luck, no ice. Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Must go faster. God help us, we're in the hands of engineers.
</pax-panel>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                       | Type      | Default |
| -------- | --------- | --------------------------------- | --------- | ------- |
| `open`   | `open`    | If `true`, the panel is expanded. | `boolean` | `false` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
