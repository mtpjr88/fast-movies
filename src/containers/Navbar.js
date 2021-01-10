import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	makeStyles
} from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import ArrowForward from '@material-ui/icons/StarOutline';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from '../routes';
import { useSelectedMovies } from '../state/hooks/useSelectedMovies';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const Navbar = () => {
	const classes = useStyles();
	const [{ selectedMovies }] = useSelectedMovies();
	const history = useHistory();

	const viewSelectedMovies = () => {
		history.push(ROUTE_PATH.MY_SELECTED);
	};
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
					onClick={() => history.push(ROUTE_PATH.HOME)}
				>
					<MovieIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					Fast Movies
				</Typography>
				{selectedMovies?.length > 0 && (
					<IconButton
						edge='end'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
						onClick={viewSelectedMovies}
					>
						<ArrowForward />

						<Typography variant='caption'>{selectedMovies.length}</Typography>
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
