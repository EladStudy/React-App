function FavoriteSong () {
    const song = {
        title: "Doktorspiele ",
        artist: "Alex Christensen",
        duration: 137,
        plays: 1536792
    };
    return (
        <div>
            <p>Song Name: {song.title}</p>
            <p>Artist Name: {song.artist}</p>
            <p>Song Duration: {Math.floor(song.duration / 60)}:{song.duration % 60}</p>
            <p>Plays: {Math.floor(song.plays / 1000000)} Miliion</p>

        </div>
    )
}
export default FavoriteSong;