import './TodoList.css'

function TodoList({ children }) {
  return (
    <ul className='todos__ul'>
      {children}
    </ul>
  )
}

export { TodoList }