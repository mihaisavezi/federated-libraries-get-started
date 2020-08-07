import {LitElement, html, css} from 'lit-element';

// Comment this for application-a to work
// import {SharedFromA} from 'application_a/SharedFromA';

// import {HostExports} from 'application_a/HostExports';
import { value, HostExports } from 'application_a/tracking/system';

console.log({HostExports, value});
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class AppAgendaChild extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, this is agenda child${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <app-one></app-one>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('app-agenda-child', AppAgendaChild);
