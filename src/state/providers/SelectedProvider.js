import { createContext, useState } from 'react';

export const SelectedContext = createContext(null);

export const SelectedProvider = ({ children }) => {
	const [selectedMovies, setSelectedMovies] = useState([]);
	const [allMovies, setAllMovies] = useState([]);

	return (
		<SelectedContext.Provider
			value={[
				{ selectedMovies, allMovies },
				{ setSelectedMovies, setAllMovies }
			]}
		>
			{children}
		</SelectedContext.Provider>
	);
};
