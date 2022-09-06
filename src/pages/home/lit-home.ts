import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "../../components/lit-navbar.js";
import "../../components/lit-create-button.js";
import "../../components/lit-create-card.js";
import { Todo } from "../../interface/todo.interface.js";

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

  todos: Todo[] = [];

  toggleShow() {
    this.isShow = !this.isShow;
  }

  toggleNotShow() {
    this.isShow = false;
  }

  @property()
  deleteTodo(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  render() {
    return html`
      <lit-create-button @click=${this.toggleShow}></lit-create-button>
      <lit-create-card ?hidden=${this.isShow}></lit-create-card>
      ${map(
        this.todos,
        (todo: Todo, idx: number) => html`
          <lit-display-card
            .todo=${todo}
            .todo-idx=${idx}
            .delete-todo=${this.deleteTodo(idx)}
          ></lit-display-card>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-home": HomePage;
  }
}
