import React, { useState } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { v4 } from 'uuid';

function App() {
  const initialTodos: Todo[] = []
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (id: string) => {
    const newTodos: Todo[] = [...todos]
    newTodos.find((todo: Todo) => todo.id === id)!.complete = 
      !newTodos.find((todo: Todo) => todo.id === id)!.complete
    setTodos(newTodos)
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    const newTodos: Todo[] = todos.filter(todoItem => id !== todoItem.id);
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodos: Todo[] = [...todos, { id: v4(), text: text, complete: false}];
    setTodos(newTodos);
  }

  return <div className="App">
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </div>;
}

export default App;
