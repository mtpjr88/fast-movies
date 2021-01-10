import { useState } from 'react';

export const useQuery = (thunk) => {
	const [response, setResponse] = useState({});

	const init = async (value) => {
		const { data } = await thunk(value);
		console.log(data);
		setResponse(data);
	};

	return [init, response];
};
