import './App.css';
import Main from './containers/Main';
import BaseAppProviders from './state/providers/BaseAppProviders';

function App() {
	return (
		<BaseAppProviders>
			<Main />
		</BaseAppProviders>
	);
}

export default App;
