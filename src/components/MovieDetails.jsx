function MovieDetails({ movie }) {
  return (
    <>
      <h2>{movie.title}</h2>
      <p>Directed by {movie.director}</p>
      <p>{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</p>
      <p>Ages {movie.minAge}+</p>
    </>
  );
}

export default MovieDetails;