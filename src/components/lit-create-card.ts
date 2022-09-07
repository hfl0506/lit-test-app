import { LitElement, html, css } from "lit";
import {
  customElement,
  property,
  query,
  queryAll,
  state,
} from "lit/decorators.js";
import { SubmitTodo, Todo } from "../interface/todo.interface";

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
      z-index: 10;
      background-color: white;
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
      color: grey;
    }
  `;
  @query("#create-form") _form!: HTMLFormElement;

  async submitForm(e: FormDataEvent) {
    e.preventDefault();
    const formData = new FormData(this._form);
    const titleValue = String(formData.get("title"));
    const contentValue = String(formData.get("content"));

    let payload: Todo = {
      isDone: false,
      title: titleValue,
      content: contentValue,
    };

    this._dispatchAddTodo(payload);
    this._dispatchHide();
    this._form.reset();
  }

  render() {
    return html`
      <form id="create-form" method="post" @submit=${this.submitForm}>
        <div class="content-wrapper">
          <div class="content">
            <label>Title: </label>
            <input id="title" name="title" required type="text" />
          </div>
          <div class="content">
            <label>Content: </label>
            <input id="content" name="content" required type="text" />
          </div>
          <button type="submit" class="submit-btn">Create</button>
        </div>
      </form>
    `;
  }

  private _dispatchAddTodo(inputs: Object) {
    const options = {
      detail: inputs,
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("onAddTodo", options));
  }

  private _dispatchHide() {
    const options = {
      detail: {
        isShow: false,
      },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("onHide", options));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-create-card": LitCreateCard;
  }
}
