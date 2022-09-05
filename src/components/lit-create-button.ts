import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-create-button")
export class LitCreateButton extends LitElement {
  static styles = css`
    .create-btn {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #1a1a1a;
      border-radius: 8px;
    }
    .create-btn:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `;
  render() {
    return html`
      <div class="create-btn">
        <box-icon name="add-to-queue" color="white" id="icon"></box-icon>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-create-button": LitCreateButton;
  }
}
