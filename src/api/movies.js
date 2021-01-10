import { getMovies } from './api';

const getMoviesByTitle = async (title) => {
	return await getMovies(`s=${title}`);
};

export { getMoviesByTitle };
