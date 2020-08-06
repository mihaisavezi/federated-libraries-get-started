// import React from 'react';
// import ReactDOM from 'react-dom';

// import SayHelloFromB from 'application_b/SayHelloFromB';

// import App from './app';

// ReactDOM.render(
//   <>
//     <App />
//     <SayHelloFromB />
//   </>,
//   document.getElementById('root')
// );

// import './app';



// import {LitElement, html, css} from 'lit-element';
// import {render} from 'lit-html';
// // import './app';

// // import AppThree from 'application_b/AppThree';

// /**
//  * An example element.
//  *
//  * @slot - This element has a slot
//  * @csspart button - The button
//  */
// export class AppOne extends LitElement {
//   static get styles() {
//     return css`
//       :host {
//         display: block;
//         border: solid 1px gray;
//         padding: 16px;
//         max-width: 800px;
//       }
//     `;
//   }

//   static get properties() {
//     return {
//       /**
//        * The name to say "Hello" to.
//        */
//       name: {type: String},

//       /**
//        * The number of times the button has been clicked.
//        */
//       count: {type: Number},
//     };
//   }

//   constructor() {
//     super();
//     this.name = 'World';
//     this.count = 0;
//   }

//   render() {
//     return html`
//       <h1>Hello, this is app 1${this.name}!</h1>
//       <button @click=${this._onClick} part="button">
//         Click Count: ${this.count}
//       </button>
//       <app-two></app-two>
//       <app-three></app-three>
//       <app-zero></app-zero>
//       <slot></slot>
//     `;
//   }

//   _onClick() {
//     this.count++;
//   }
// }

// window.customElements.define('app-one', AppOne);

// render(html`<app-one></app-one>`, document.getElementById('root'))

import './app';
import AppAgendaChild from 'application_b/AppAgendaChild';

import {LitElement, html, css} from 'lit-element';
import {render} from 'lit-html';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppNarcShell extends LitElement {
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
      <h1>Hello, this is app narc shell${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <app-agenda-child></app-agenda-child>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('app-narc-shell', AppNarcShell);

render(html`<app-narc-shell></app-narc-shell>`, document.getElementById('root'))



