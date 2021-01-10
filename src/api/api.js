import axios from 'axios';
import apiKeys from './poormans_dot_env';

const METHODS = {
	GET: 'get',
	POST: 'post',
	PUT: 'put'
};

const api = axios.create({
	baseURL: `http://www.omdbapi.com/`
});

const execute = async (method, url, options) => {
	try {
		const { status, data } = await api({ method, url, ...options });
		return {
			status,
			data
		};
	} catch (e) {
		// log errors
		console.log(e);
	}
};
const getMovies = async (query) => {
	const buildQuery = `?${query}&apikey=${apiKeys.omdb_key}`;
	return await execute(METHODS.GET, buildQuery);
};

export { getMovies };
