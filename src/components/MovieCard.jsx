function MovieCard (props) {
  return (
    <>
    <h3>{props.title}</h3>
    <p>{props.year} | {props.genre}</p>
    <p>⭐ {props.rating}/10</p>
    </>
  );
}

export default MovieCard;