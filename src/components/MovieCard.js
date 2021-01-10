import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	container: {
		margin: 24,
		padding: 5
	},
	img: {
		display: 'flex',
		height: 500,
		width: '-webkit-fill-available'
	},
	bodyText: {
		fontWeight: 'bold',
		marginRight: 10
	}
}));

const MovieCard = ({
	title = 'Search to get results',
	poster,
	type,
	year,
	imdbID,
	showRemove = false,
	...props
}) => {
	const classes = useStyles();

	return (
		<Paper
			style={props?.selected ? { border: '2px solid blue' } : {}}
			className={classes.container}
			elevation={10}
			{...props}
		>
			{showRemove && (
				<Button variant='contained' onClick={() => props?.handleRemove(imdbID)}>
					Remove
				</Button>
			)}
			<Box display='flex' alignItems='center'>
				<Typography
					variant='caption'
					color='textSecondary'
					className={classes.bodyText}
				>
					Title:
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					{title}
				</Typography>
			</Box>
			<Box display='flex' alignItems='center'>
				<Typography
					variant='caption'
					color='textSecondary'
					className={classes.bodyText}
				>
					Type:
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					{type}
				</Typography>
			</Box>
			<Box display='flex' alignItems='center'>
				<Typography
					variant='caption'
					color='textSecondary'
					className={classes.bodyText}
				>
					Year:
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					{year}
				</Typography>
			</Box>
			<Box display='flex' alignItems='center'>
				<Typography
					variant='caption'
					color='textSecondary'
					className={classes.bodyText}
				>
					id:
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					{imdbID}
				</Typography>
			</Box>
			<Box>
				<img className={classes.img} src={poster} alt='thumbnail' />
			</Box>
		</Paper>
	);
};

export default MovieCard;
