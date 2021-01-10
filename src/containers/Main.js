import { Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

const Main = () => {
	return (
		<Box>
			<Navbar />
			<Switch>
				{routes.map(({ path, component: Component }, idx) => (
					<Route exact path={path} key={idx}>
						<Component />
					</Route>
				))}
			</Switch>
		</Box>
	);
};

export default Main;
