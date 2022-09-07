export interface Todo {
  title: string;
  content: string;
  isDone: boolean;
}

export interface SubmitTodo {
  title?: string;
  content?: string;
  isDone: boolean;
}
