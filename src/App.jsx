import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import GameStats from "./components/GameStats";
import FavoriteSong from "./components/FavoriteSong";
import Story from "./components/Story";
import MovieCard from "./components/MovieCard";
import Ticket from "./components/Ticket";
import MovieDetails from "./components/MovieDetails";
import CinemaHeader from "./components/CinemaHeader";
import NowShowing from "./components/NowShowing"
import StudentCard from "./components/StudentCard";

function App () {

  const movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
    minAge: 15
  };

  return (
    <div>
      <Header/>
      <ProfileCard/>
      <br />
      <GameStats/>
      <br />
      <FavoriteSong/>
      <h3>Stories</h3>
      <Story text = "Gaming" emoji="🎮"/>
      <Story text = "Music" emoji="🎵"/>
      <Story text = "Football" emoji="⚽"/>
      <Story text = "Photos" emoji="🖼️"/>
      <h3>Movies</h3>
      <CinemaHeader cinemaName ="Cinema City" city = "Tel-Aviv"/>
      <NowShowing/>
      <Ticket isPopcorn = {false} movie = "Midsommar" hall = "3" seat="F12" price={45} count ={2}/>
      <Ticket isPopcorn = {true} movie = "The Sixth Sense" hall = "1" seat="D7" price={45} count ={1}/>
      <br/>
      <MovieDetails movie={movie} />      
      <br/>
      <StudentCard name="John Snow" age={15} Class="10"/>
      <StudentCard name="daenerys Targaryen" age={18} Class="12"/>
      <StudentCard name="Arya Stark" age={17} Class="11"/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
}

export default App;