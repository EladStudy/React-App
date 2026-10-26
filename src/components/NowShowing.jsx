import MovieCard from "./MovieCard"

function NowShowing() {
    return (
        <>
        <h2>NowShowing:</h2>
        <MovieCard title = "Fight Club" year = {1999} genre = "Drama" rating = {8.8}/>
        <MovieCard title = "Inception" year = {2010} genre = "Sci-Fi" rating = {8.8}/>
        <MovieCard title = "The Dark Knight" year = {2008} genre = "Action" rating = {9.1}/>
        </>
    )
}
export default NowShowing;