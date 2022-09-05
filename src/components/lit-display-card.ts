import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-display-card")
export class LitDisplayCard extends LitElement {
  static styles = css`
    div {
    }
  `;
  render() {
    return html` <div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-display-card": LitDisplayCard;
  }
}
