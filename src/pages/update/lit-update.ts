import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../../components/lit-navbar.js";

@customElement("lit-update")
export class UpdatePage extends LitElement {
  render() {
    return html` <div>update</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-update": UpdatePage;
  }
}
