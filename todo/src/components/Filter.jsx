const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="All">Todas</option>
            <option value="Completed">Finalizadas</option>
            <option value="Incompleted">Abertas</option>
          </select>
        </div>      
        <div>
          <p>Ordem alfabética:</p>
          <button>ASC</button>
          <button>DESC</button>
        </div>
      </div>
    </div>
  )
}

export default Filter