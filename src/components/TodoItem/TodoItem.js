import './TodoItem.css'

function TodoItem({ text, completed }) {
  return (
    <li className='todos__item todos__item--finished'>
      <span className='check check--disabled'>V</span>
      <p className='descripcion'>{text}</p>
      <button className='button__eliminar'>X</button>
    </li>
  )
}

export { TodoItem }