import service from '../fetchInterceptor';

export const createPost = (data: IPost) => {
	const url = `/posts`;
	return service.post(url, { data });
};

export const fetchPost = () => {
	const url = `/posts`;
	return service.get(url);
};
