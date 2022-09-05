import { LitElement, html, css, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import "../../components/lit-navbar.js";
import "../../components/lit-create-button.js";
import "../../components/lit-create-card.js";

@customElement("lit-home")
export class HomePage extends LitElement {
  static styles = css`
    div {
      display: flex;
      height: auto;
      width: 100%;
    }
  `;

  @state()
  isShow: boolean = false;

  toggleShow() {
    this.isShow = !this.isShow;
  }

  render() {
    return html`
      <div>
        <lit-create-button @click=${this.toggleShow}></lit-create-button>
        ${this.isShow ? html`<lit-create-card></lit-create-card>` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-home": HomePage;
  }
}
