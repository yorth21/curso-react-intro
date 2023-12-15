import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === completed) {
    return (
      <h1 className='title'>
        ¡Completaste todos tus TODOs!
      </h1>
    )
  }

  return (
    <h1 className='title'>
      Has completado {completed} de {total} TODOs
    </h1>
  )
}

export { TodoCounter }