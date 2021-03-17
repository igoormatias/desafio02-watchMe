import { Button } from '../components/Button';
import { GenreResponseProps} from '../App'

import '../styles/sidebar.scss';

interface  SidebarProps { 
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: (genreId: number) => void
}

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton
}: SidebarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
  
}