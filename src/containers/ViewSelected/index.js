import { Button, Container, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import GridLayout from '../../common/@layout/Grid';
import MovieCard from '../../common/MovieCard';

import { useSelectedMovies } from '../../state/hooks/useSelectedMovies';

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

const ViewSelected = () => {
	const classes = useStyles();
	const history = useHistory();

	const [{ selectedMovies }, { setSelectedMovies }] = useSelectedMovies();
	const handleRemove = (id) => {
		setSelectedMovies(selectedMovies?.filter((x) => x.imdbID !== id));
	};
	return (
		<Container className={classes.root}>
			<form className={classes.input} noValidate autoComplete='off'>
				{selectedMovies.length ? 'Your Selected Movies' : 'No Selected Movies'}
				<Button
					className={classes.btn}
					variant='outlined'
					onClick={() => history.goBack()}
				>
					go back
				</Button>
			</form>
			<GridLayout>
				{selectedMovies?.map((x, idx) => (
					<MovieCard
						title={x.Title}
						type={x.Type}
						year={x.Year}
						imdbID={x.imdbID}
						poster={x.Poster}
						showRemove={true}
						handleRemove={handleRemove}
						key={`selected_movie_card_${idx}`}
					/>
				))}
			</GridLayout>
		</Container>
	);
};

export default ViewSelected;
