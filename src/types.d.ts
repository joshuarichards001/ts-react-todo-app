interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

type ToggleTodo = (id: string) => void;
type DeleteTodo = (id: string) => void;
type AddTodo = (text: string) => void;