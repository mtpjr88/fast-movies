import './App.css';
import Main from './modules/Main';
import BaseAppProviders from './state/providers/BaseAppProviders';

function App() {
	return (
		<BaseAppProviders>
			<Main />
		</BaseAppProviders>
	);
}

export default App;
