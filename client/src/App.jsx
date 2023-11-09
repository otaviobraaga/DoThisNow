import "./App.css";
import { useState } from "react";
import Todo from "./component/Todo";
import TodoForm from "./component/TodoForm";

function App() {
  const [todos, todosAll] = useState([
    {
      id: 1,
      text: "Criar funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para o curso",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
        <TodoForm />
    </div>
  );
}

export default App;
