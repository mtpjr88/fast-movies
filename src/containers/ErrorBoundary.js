import { useLocation, useHistory } from 'react-router-dom';
import img from '../assets/unhappy.jpg';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../routes';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		backgroundRepeat: 'no-repeat',
		height: '95vh'
	}
}));

const ErrorBoundary = (props) => {
	const classes = useStyles({ img });
	const { state } = useLocation();
	const history = useHistory();

	useEffect(() => {
		history.replace(ROUTE_PATH.ERROR);
	}, [history]);

	return (
		<>
			<Box
				className={classes.container}
				style={{ backgroundImage: `url(${img})` }}
			>
				<h1
					style={{
						fontSize: '50px',
						color: '#1abc9c',
						fontFamily: " 'Poppins', sans-serif",
						maxWidth: '900px',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column'
					}}
				>
					{state?.error ? state.error + ' 😩' : 'something went wrong 😩'}
					<Button
						variant='contained'
						color='primary'
						onClick={() => history.goBack()}
					>
						Go Back
					</Button>
				</h1>
				<br />
			</Box>
			<span style={{ color: 'white' }}>{state?.stack}</span>
		</>
	);
};

export default ErrorBoundary;
