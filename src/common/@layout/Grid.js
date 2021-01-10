import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: 140,
		width: 100
	},
	control: {
		padding: theme.spacing(2)
	}
}));

const GridLayout = ({ children }) => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root} spacing={4}>
			<Grid item xs={12}>
				<Grid container justify='center' spacing={4}>
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default GridLayout;
