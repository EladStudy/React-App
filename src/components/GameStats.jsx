function GameStats () {
    const game = {
        name: "War Thunder",
        wins: 24,
        losses: 6
    };

const winrate = ((100 * game.wins) / (game.wins + game.losses));    
function GetRank() {
        if (winrate >= 70)
            return "Pro"
        else if (winrate >=40)
            return "Rising Star"
        else 
            return "Rookie"
    }
    return (
        <div>
            <h2>{game.name}</h2>
            <p>Games played: {(game.wins+game.losses)}</p>
            <p>Win rate: {Math.round(winrate)}%</p>
            <p>Rank: {GetRank()}</p>

        </div>
    )
}
export default GameStats;