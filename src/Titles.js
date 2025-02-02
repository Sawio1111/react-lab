

export const Titles = ({movies, handleOnDelete}) => {

    const emptyMessage = "None movies is added"

    const handleMovieDelete = (event) => {
        handleOnDelete(event.target.value)
    }
    return (
        movies.length ? ( 
        <div>
            <h2>Titles</h2>
            <ul>
            {movies.map((el) => <li key={el.title}>{el.title} ({el.year}) 
            <button value={el.title} onClick={handleMovieDelete}>Delete</button></li>)}
            </ul>
          </div>) : <p style={{ fontSize: 'larger', fontWeight: 'bold' }}>{emptyMessage}</p>
        )
}