/**
 * Returns `true` when an ancestor matches the selector.
 *
 * @param {string} selector
 * @param {HTMLElement} el
 * @return {boolean}
 */
export const hostContext = (selector: string, el: HTMLElement): boolean => {
  return el.closest(selector) !== null;
};

/**
 * Returns `true` when an ancestor matches the selector and its class attribute contains a certain value.
 * @param {string} selector
 * @param {string} value
 * @param {HTMLElement} el
 */
export const hostContextHasClass = (selector: string, value: string, el: HTMLElement): boolean => {
  const hostElement = el.closest(selector);
  return hostElement !== null && hostElement.classList.contains(value);
};

/**
 * Returns `true` when the element has a shadow DOM.
 *
 * @param {HTMLElement} el
 * @return {boolean}
 */
export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const findItemLabel = (componentEl: HTMLElement) => {
  const itemEl = componentEl.closest('pax-item');
  if (itemEl) {
    return itemEl.querySelector('pax-label');
  }
  return null;
};

/**
 * Renders a hidden input element in the global DOM (outside the shadow DOM of
 * the component) that gets submitted as form data when used within a <form>
 * element.
 *
 * @param {boolean} always
 * @param {HTMLElement} container
 * @param {string} name
 * @param {string | undefined | null} value
 * @param {boolean} disabled
 */
export const renderHiddenInput = (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector('input.aux-input') as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument!.createElement('input');
      input.type = 'hidden';
      input.classList.add('aux-input');
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || '';
  }
};

export const clamp = (min: number, n: number, max: number) => {
  return Math.max(min, Math.min(n, max));
};
