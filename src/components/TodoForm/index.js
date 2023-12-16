import { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../../context/todoContext'

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cortar cebolla para el almuerzo'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >
          Cancelar
        </button>
        <button
          type=''
          className='TodoForm-button TodoForm-button--add'
        >
          Agregar
        </button>
      </div>
    </form>
  )
}

export { TodoForm }