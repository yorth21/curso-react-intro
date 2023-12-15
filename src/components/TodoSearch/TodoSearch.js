import './TodoSearch.css'

function TodoSearch() {
  return (
    <form className='search__form'>
      <input className='search__input' placeholder="Cortar cebolla" />
      <button className='search__button'>🔍</button>
    </form>
  )
}

export { TodoSearch }