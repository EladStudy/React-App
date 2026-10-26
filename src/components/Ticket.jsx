function Ticket ({isPopcorn, movie,hall,seat,price,count}) {
    if (isPopcorn) {
  return (
    <>
    <h3>{movie}</h3>
    <p>With Popcorn</p>
    <p>Hall:{hall} | Seat:{seat}</p>
    <p>Price: {price} NIS | With Popcorn: {price+15}NIS</p>
    <p>Tickets: {count}</p>
    <p>Total: {price * 2}NIS</p>
    </>
    );
}
else {
    return (
    <>
    <h3>{movie}</h3>
    <p>Hall: {hall} | Seat: {seat}</p>
    <p>Price: {price} NIS</p>
    <p>Tickets: {count}</p>
    <p>Total: {price * 2}NIS</p>
    </>
    );
}
}

//מוצג : 4515
// כי המחיר עכשיו נחשב כ סטרינג
export default Ticket;