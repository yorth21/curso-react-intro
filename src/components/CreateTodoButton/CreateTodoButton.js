import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button
      onClick={(event) => console.log(event.target)}
      className='button__add'
    >
      Agregar
    </button>
  )
}

export { CreateTodoButton }