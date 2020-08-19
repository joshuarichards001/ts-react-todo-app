import React, { ReactElement } from 'react'

interface Props {
  todo: {
    id: string,
    text: string,
    complete: boolean
  };
  toggleTodo: ToggleTodo,
  deleteTodo: DeleteTodo
}

export default function Todo({ todo, toggleTodo, deleteTodo }: Props): ReactElement {
  return (
    <div style={{ textDecoration: todo.complete ? "line-through" : undefined}}>
      <input type="checkbox" checked={todo.complete} onClick={() => { toggleTodo(todo.id) }}/> 
      {todo.text}
      <button onClick={() => { deleteTodo(todo.id) }}>X</button>
    </div>
  )
}
