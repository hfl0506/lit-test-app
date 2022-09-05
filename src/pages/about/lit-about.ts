import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { goToPage } from "../../router";

@customElement("lit-about")
export class AboutPage extends LitElement {
  static styles = css`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 0.5px solid #1a1a1a;
      border-radius: 8px;
      width: 300px;
      height: 300px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    div::before {
      content: "";
      height: 40px;
      width: 100%;
      background: #fef5ac;
      border-radius: 8px 8px 0px 0px;
      position: fixed;
      top: 0;
      border: 0.5 solid #fef5ac;
    }

    p {
      font-size: 16px;
      font-size: 700;
      padding: 40px;
    }
    a {
      text-decoration: none;
      color: #1a1a1a;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  `;
  render() {
    return html`
      <div>
        <p>
          This application is for experimental usage for testing Lit-html by
          Ronnie Li.
        </p>
        <a href=${goToPage("/")}>Home</a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-about": AboutPage;
  }
}
