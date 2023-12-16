import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/todoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  if (totalTodos === completedTodos) {
    return (
      <h1 className='title'>
        ¡Completaste todos tus TODOs!
      </h1>
    )
  }

  return (
    <h1 className='title'>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  )
}

export { TodoCounter }