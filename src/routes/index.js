import ErrorBoundary from '../containers/ErrorBoundary';
import Home from '../containers/Home';
import ViewSelected from '../containers/ViewSelected';

export const ROUTE_PATH = {
	HOME: '/',
	MY_SELECTED: '/my-selected',
	ERROR: '/oops'
};

const routes = [
	{ path: ROUTE_PATH.HOME, component: Home },
	{ path: ROUTE_PATH.MY_SELECTED, component: ViewSelected },
	{ path: ROUTE_PATH.ERROR, component: ErrorBoundary }
];

export default routes;
