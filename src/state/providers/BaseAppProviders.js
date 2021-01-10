import { BrowserRouter } from 'react-router-dom';
import { SelectedProvider } from './SelectedProvider';

const BaseAppProviders = ({ children }) => {
	return (
		<BrowserRouter>
			<SelectedProvider>
				{/* // other app level providers here */}
				{children}
			</SelectedProvider>
		</BrowserRouter>
	);
};

export default BaseAppProviders;
