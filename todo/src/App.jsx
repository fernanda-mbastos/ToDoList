import { useState } from 'react';

import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

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
    const newTodos = [...todos, 
      {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
      }
    ]

    setTodos(newTodos) // o setState renderiza, com isso adicona novo Todo a lista
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    // itera o array e remove o Todo com o id passado, atualiza o estado com o setTodos
    const filterTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filterTodos) 
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    // map modifica o array original, altera o isCompleted para o oposto, para caso clicar sem querer 'e possivel retornar ao outro estado
    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All') // iniciar com o value definido no componente Filter
  const [sort, setSort] = useState('Asc')
  
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted )
        // FILTER => filtra 
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        // compara entre dois textos (a,b) usando if ternario. se for Asc, a vem primeiro que b, se nao, o contrario (dessa forma ordena por ordem alfabetica)
        .sort((a,b) => 
          sort === 'Asc'
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
        )
        
        // MAP => itera o array Todos para criar a lista dos Todos, cada elemento do array vira um Todo ao chamar o componente Todo      
        .map((todo) => ( 
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/> 
        ))} 
      </div>
      <TodoForm addTodo={addTodo} /> {/*passar a funcao como propriedade para o Form*/}
    </div>
  );
}

export default App
