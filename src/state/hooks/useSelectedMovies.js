import { useContext } from 'react';
import { SelectedContext } from '../providers/SelectedProvider';

export const useSelectedMovies = () => {
	return useContext(SelectedContext);
};
