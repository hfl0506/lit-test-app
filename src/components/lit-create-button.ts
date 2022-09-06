import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("lit-create-button")
export class LitCreateButton extends LitElement {
  static styles = css`
    .create-btn {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1a1a1a;
      border-radius: 8px;
      margin: 30px;
    }

    .create-btn:hover {
      cursor: pointer;
    }
  `;

  @state()
  color: string = "white";

  setGreyColor() {
    this.color = "grey";
  }

  setWhiteColor() {
    this.color = "white";
  }

  render() {
    return html`
      <div
        class="create-btn"
        @mouseover=${this.setGreyColor}
        @mouseout=${this.setWhiteColor}
      >
        <box-icon name="add-to-queue" color=${this.color} id="icon"></box-icon>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-create-button": LitCreateButton;
  }
}
