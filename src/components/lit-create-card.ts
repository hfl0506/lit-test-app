import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-create-card")
export class LitCreateCard extends LitElement {
  static styles = css`
    form {
      min-height: 300px;
      min-width: 400px;
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    form:before {
      content: "";
      min-width: 400px;
      height: 40px;
      position: absolute;
      background-color: #1a1a1a;
      border-radius: 8px 8px 0px 0px;
    }
    .content-wrapper {
      padding: 60px 20px 0px;
      display: grid;
      grid-template-rows: repeat(2, 80px) 140px;
      align-items: center;
    }

    .content input {
      height: 25px;
      width: 90%;
    }

    .submit-btn {
      width: 120px;
      height: 40px;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 700;
      margin: auto;
      background: #1a1a1a;
    }

    .submit-btn:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  `;
  render() {
    return html`
      <form type="submit">
        <div class="content-wrapper">
          <div class="content">
            <label>Title: </label>
            <input />
          </div>
          <div class="content">
            <label>Content: </label>
            <input />
          </div>
          <button class="submit-btn">Create</button>
        </div>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-create-card": LitCreateCard;
  }
}
