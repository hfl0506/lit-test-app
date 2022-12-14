import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { Todo } from "../interface/todo.interface";

@customElement("lit-display-card")
export class LitDisplayCard extends LitElement {
  static styles = css`
    .display-card-wrapper {
      min-width: 400px;
      width: 100%;
      display: flex;
      align-items: center;
      height: 200px;
      border-radius: 8px;
      box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .display-card-left {
      min-width: 250px;
      display: grid;
      gap: 2rem;
    }

    .display-card-wrapper:before {
      content: "";
      height: 200px;
      width: 10px;
      border-radius: 8px 0px 0px 8px;
      background: #1a1a1a;
      z-index: 2;
    }

    .display-card-field {
      padding-left: 4rem;
    }

    .diplay-card-right {
      position: relative;
    }

    .delete-btn {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: red;
      border-radius: 8px;
      cursor: pointer;
      margin: 80px 0px 0px 80px;
    }
  `;

  @property({ type: Object })
  todo: Todo = {
    title: "",
    content: "",
    isDone: false,
  };

  @property({ type: Number, attribute: "todo-idx" })
  todoIdx: number = 0;

  @state() binColor: string = "white";

  @state() isDone: boolean = false;

  @query("#card-wrapper") _div!: HTMLDivElement;

  setWhite() {
    this.binColor = "white";
  }

  setGrey() {
    this.binColor = "grey";
  }

  onCheck(e: InputEvent) {
    e.preventDefault();
    this.isDone = !this.isDone;
    if (this.isDone) {
      this._div.style.background = "grey";
      this._div.style.color = "white";
    } else {
      this._div.style.background = "white";
      this._div.style.color = "black";
    }
  }

  render() {
    return html`
      <div class="display-card-wrapper" id="card-wrapper">
        <div class="display-card-left">
          <div class="display-card-field">
            <label>Title: </label>
            <span>${this.todo.title}</span>
          </div>
          <div class="display-card-field">
            <label>Content: </label>
            <span> ${this.todo.content} </span>
          </div>
          <div class="display-card-field">
            <input
              type="checkbox"
              value=${this.isDone}
              @change=${this.onCheck}
            />
            <label>Done</label>
          </div>
        </div>
        <div class="display-card-right">
          <div
            class="delete-btn"
            @click=${() => this._dispatchDeleteTodo(this.todoIdx)}
          >
            <box-icon
              name="trash"
              color=${this.binColor}
              @mouseover=${this.setGrey}
              @mouseleave=${this.setWhite}
            ></box-icon>
          </div>
        </div>
      </div>
    `;
  }

  private _dispatchDeleteTodo(idx: number) {
    const options = {
      detail: {
        index: idx,
      },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("onDelete", options));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-display-card": LitDisplayCard;
  }
}
