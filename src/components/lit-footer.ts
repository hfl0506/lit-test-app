import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-footer")
export class LitFooter extends LitElement {
  static styles = css`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #1a1a1a;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    span {
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
  `;
  render() {
    return html`
      <div>
        <span>Copyright by Ronnie - ${new Date().getFullYear()}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-footer": LitFooter;
  }
}
