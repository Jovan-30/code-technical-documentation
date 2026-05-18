import './search-box.styles.css'

const SearchBox = ({ onChangeHandler }) => {
  return (
    <>
      <input
        type='search'
        onChange={onChangeHandler}
        className="search-box-container"
      />
    </>
  )
};

export default SearchBox;