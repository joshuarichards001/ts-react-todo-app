import React, { ReactElement } from 'react'
import Todo from './Todo'

interface Props {
  todos: Todo[],
  toggleTodo: ToggleTodo,
  deleteTodo: DeleteTodo
}

export default function Todos({ todos, toggleTodo, deleteTodo }: Props): ReactElement {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      ))}
    </ul>
  );
}
