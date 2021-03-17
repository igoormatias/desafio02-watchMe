import { MovieCard, MovieCardProps } from '../components/MovieCard';
import { GenreResponseProps } from '../App'
import '../styles/content.scss';


interface ContentProps {
  selectedGenre: GenreResponseProps[];
  movies: MovieCardProps[];
}



export function Content({selectedGenre,movies}: ContentProps)  {
return (
  <div className="container">
  <header>
    <span className="category">Categoria:<span>{selectedGenre.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>)
  

}