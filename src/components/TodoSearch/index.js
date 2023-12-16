import { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../context/todoContext'


function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  return (
    <input
      className='search__input'
      placeholder='Cortar cebolla'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearch }