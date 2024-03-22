import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {

  return (
    <div className="todo"
    // alterar o estilo text-decoration dos Todos => com um if ternário => se o isCompleted eh true (que comeca como false, mas a funcao completeTodo alterar para true), risca o texto. 
    style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
    >
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
       {/* ao clicar no botao de Finalizar, chama a funcao completeTodo passada como props */}
      <button className='final-button' onClick={() => completeTodo(todo.id)}>Finalizar</button>
      {/* ao clicar no botao de remover, chama a funcao removeTodo passada como props */}
      <button className='delete-button' onClick={() => removeTodo(todo.id)}>X</button> 
    </div>
  </div>
  )
}

export default Todo