import { useState } from 'react';

import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar ToDo List",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Correr",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = [...todos, 
      {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
      }
    ]

    setTodos(newTodo) // o setState renderiza, com isso adicona novo Todo a lista
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => ( 
          <Todo key={todo.id} todo={todo} /> 
        ))} 
      </div>
      <TodoForm addTodo={addTodo} /> {/*passar a funcao como propriedade para o Form*/}
    </div>
  );
}

export default App
