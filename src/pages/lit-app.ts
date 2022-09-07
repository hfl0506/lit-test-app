import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/lit-navbar.js";
import "../components/lit-footer.js";

@customElement("lit-app")
export class LitApp extends LitElement {
  render() {
    return html`
      <lit-navbar></lit-navbar>
      <slot></slot>
      <lit-footer></lit-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-app": LitApp;
  }
}
