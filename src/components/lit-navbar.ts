import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { goToPage } from "../router";

@customElement("lit-navbar")
export class LitNavbar extends LitElement {
  static styles = css`
    nav {
      height: 80px;
      background: #1a1a1a;
      display: flex;
      align-items: center;
    }

    #icon {
      margin-left: 20px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      overflow: hidden;
      background: linear-gradient(to right, grey, grey 50%, white 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 275ms ease;
      padding-left: 2rem;
    }

    a:hover {
      background-position: 0 100%;
    }
  `;

  render() {
    return html`
      <nav>
        <box-icon name="notepad" color="white" id="icon"></box-icon>
        <a href=${goToPage("/")}>Home</a>
        <a href=${goToPage("/update")}>Update</a>
        <a href=${goToPage("/about")}>About</a>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-navbar": LitNavbar;
  }
}
