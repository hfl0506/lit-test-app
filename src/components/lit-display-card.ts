import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Todo } from "../interface/todo.interface";

@customElement("lit-display-card")
export class LitDisplayCard extends LitElement {
  static styles = css`
    div {
    }
  `;

  @property({ type: Object })
  todo: Todo = {
    title: "",
    content: "",
    isDone: false,
  };

  @property({ attribute: "todo-idx" })
  todoIdx: number = 0;

  @property({ attribute: "delete-todo" })
  deleteTodo = () => {};

  render() {
    return html`
      <div>
        <div>
          <div>
            <label>Title</label>
            <span>${this.todo.title}</span>
          </div>
          <div>
            <label> Content </label>
            <span> ${this.todo.content} </span>
          </div>
          <div>
            <input type="checkbox" value=${this.todo.isDone} />
            <label>Done</label>
          </div>
          <div @click=${this.deleteTodo}></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-display-card": LitDisplayCard;
  }
}
