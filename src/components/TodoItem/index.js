import './TodoItem.css'
import { FaRegTrashCan, FaCheck  } from 'react-icons/fa6'


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='todos__item todos__item--finished'>
      <FaCheck
        className={`check ${!completed && 'check--disabled'}`}
        onClick={onComplete}
      >
        V
      </FaCheck>
      <p className={`descripcion ${completed && 'descripcion--completed'}`}>{text}</p>
      <FaRegTrashCan className='button__eliminar' onClick={onDelete} />
    </li>
  )
}

export { TodoItem }