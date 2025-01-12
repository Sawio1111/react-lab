

export const Titles = ({movies}) => {

    return (
        <div>
            <h2>Titles</h2>
            <ul>
            {movies.map((el) => <li key={el.title}>{el.title} ({el.year})</li>)}
            </ul>
      </div>
    )
}