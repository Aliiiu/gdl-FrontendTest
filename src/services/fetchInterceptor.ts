import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 60000,
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
});

export default service;
