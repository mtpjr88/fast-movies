import {
	Button,
	Container,
	makeStyles,
	TextField,
	Typography
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import GridLayout from '../../common/@layout/Grid';
import MovieCard from '../../common/MovieCard';
import { getMoviesByTitle } from '../../api/movies';
import { useQuery } from '../../state/hooks/useQuery';
import { useSelectedMovies } from '../../state/hooks/useSelectedMovies';
import ERRORS from '../../enums/text-content';

const useStyles = makeStyles((theme) => ({
	root: {},
	input: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		margin: 0
	},
	btn: { margin: 10, width: '-webkit-fill-available' }
}));

const Home = () => {
	const classes = useStyles();
	const [searchInput, setSearchInput] = useState('');

	const [
		{ selectedMovies, allMovies },
		{ setSelectedMovies, setAllMovies }
	] = useSelectedMovies();
	const [getMovies, { Search: movies, Error }] = useQuery(getMoviesByTitle);

	const handleChange = ({ target: { value } }) => setSearchInput(value);
	const handleClick = async () => {
		await getMovies(searchInput);
	};

	useEffect(() => {
		if (movies?.length) {
			setAllMovies(movies);
		}
	}, [movies, setAllMovies]);

	const handleMovieClick = (movie) => () => {
		if (selectedMovies?.some((x) => x.imdbID === movie.imdbID)) {
			setSelectedMovies(
				selectedMovies?.filter((x) => x.imdbID !== movie.imdbID)
			);
			return;
		}

		setSelectedMovies([...selectedMovies, movie]);
	};

	return (
		<Container className={classes.root}>
			<form className={classes.input} noValidate autoComplete='off'>
				<TextField
					className={classes.input}
					id='standard-basic'
					label='Search Movie Title'
					onChange={handleChange}
					value={searchInput}
				/>
				<Button
					className={classes.btn}
					variant='outlined'
					onClick={handleClick}
				>
					Search
				</Button>
			</form>
			<GridLayout>
				{Error ? (
					<Typography
						style={{ marginTop: 10 }}
						align='center'
						variant='subtitle1'
						color='error'
					>
						{Error} {ERRORS.EXHAUSTIVE_RESULTS}
					</Typography>
				) : (
					allMovies?.map((x, idx) => (
						<MovieCard
							title={x.Title}
							type={x.Type}
							year={x.Year}
							imdbID={x.imdbID}
							poster={x.Poster}
							onClick={handleMovieClick(x)}
							selected={selectedMovies?.some((s) => s.imdbID === x.imdbID)}
							key={`move_card_${idx}`}
						/>
					))
				)}
			</GridLayout>
		</Container>
	);
};

export default Home;
