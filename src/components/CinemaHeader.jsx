function CinemaHeader({cinemaName, city}) {
    return (
        <>
        <h2>{cinemaName}</h2>
        <p>📍{city}</p>
        </>
    );
}

export default CinemaHeader;