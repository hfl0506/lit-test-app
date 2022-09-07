import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-footer")
export class LitFooter extends LitElement {
  static styles = css`
    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #1a1a1a;
      flex-shrink: 0;
    }
    span {
      color: white;
      font-size: 14px;
      font-weight: bold;
    }
  `;
  render() {
    return html`
      <footer>
        <span>Copyright by Ronnie - ${new Date().getFullYear()}</span>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-footer": LitFooter;
  }
}
