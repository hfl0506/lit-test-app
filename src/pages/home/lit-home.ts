import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../../components/lit-navbar.js";
import "../../components/lit-create-button.js";
import "../../components/lit-create-card.js";
import "../../components/lit-display-card.js";
import { Todo } from "../../interface/todo.interface.js";

@customElement("lit-home")
export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .nothing {
      height: 50px;
      width: 150px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    .nothing p {
      font-size: 14px;
      padding: 5px;
    }
  `;

  @state()
  isShow: boolean = false;

  todos: Todo[] = [
    {
      title: "hi",
      content: "html",
      isDone: false,
    },
  ];

  toggleShow() {
    this.isShow = !this.isShow;
  }

  toggleNotShow() {
    this.isShow = false;
  }

  deleteTodo(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo];
  }

  render() {
    return html`
      <lit-create-button @click=${this.toggleShow}></lit-create-button>
      <lit-create-card ?hidden=${!this.isShow}></lit-create-card>
      ${this.todos?.length > 0
        ? map(
            this.todos,
            (todo: Todo, idx: number) => html`
              <lit-display-card
                .todo=${todo}
                .todo-idx=${idx}
                .delete-todo=${this.deleteTodo(idx)}
              ></lit-display-card>
            `
          )
        : html`
            <div class="nothing">
              <p>Nothing to show...</p>
            </div>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-home": HomePage;
  }
}
