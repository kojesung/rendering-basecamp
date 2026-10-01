import type { MovieItem } from '@/types/Movie.types';
import { Footer } from './Footer';
import { Header } from './Header';
import { MovieList } from './MovieList';

interface MovieHomeProps {
    movies: MovieItem[];
}

export const MovieHome = ({ movies }: MovieHomeProps) => {
    return (
        <div id="wrap">
            <Header featuredMovie={movies[0]} />
            <MovieList movies={movies} />
            <Footer />
        </div>
    );
};
