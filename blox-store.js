import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-store`
 * get and set JSON data from local storage
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxStore extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blox-store',
      },
    };
  }
}

window.customElements.define('blox-store', BloxStore);
