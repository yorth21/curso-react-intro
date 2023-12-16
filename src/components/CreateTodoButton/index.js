import { useContext } from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../../context/todoContext'
import { FaPlus } from 'react-icons/fa6'

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext)

  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >
      <FaPlus />
    </button>
  )
}

export { CreateTodoButton }