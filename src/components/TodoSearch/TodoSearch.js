import './TodoSearch.css'


function TodoSearch({ searchValue, setSearchValue }) {
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