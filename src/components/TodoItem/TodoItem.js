import './TodoItem.css'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='todos__item todos__item--finished'>
      <span
        className={`check ${!completed && 'check--disabled'}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`descripcion ${completed && 'descripcion--completed'}`}>{text}</p>
      <button
        className='button__eliminar'
        onClick={onDelete}
      >
        X
      </button>
    </li>
  )
}

export { TodoItem }