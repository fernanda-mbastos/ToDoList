import { useState } from "react"


const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return
    addTodo(value, category) //adiciona a lista quando os valores estao preenchidos
    // limpar os campos apos adicionar tarefa
    setValue('')
    setCategory('')

  }

  return <div className='todo-form'>
    <h2>Criar tarefa</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Digite a tarefa' 
        value={value} //adicionado para manipular o value e limpa-lo apos adicionar a tarefa (via handleSubmite setValue = vazio)
        // onChange: ao mudar o valor do input, temos uma arrow function que captura o evento, executa setValue (muda o estado do value) para o value do proprio evento no input
        onChange={(e) => setValue(e.target.value)} /> 
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
      </select>
      <button type='submit'>Criar tarefa</button>
    </form>
    </div>
}

export default TodoForm