import React, { useEffect } from 'react';
import './App.css';
import { postFetch } from './Redux/postSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import PostForm from './component/postForm/PostForm';
import Loader from './component/Loader/Loader';

function App() {
	const { post, isLoading } = useAppSelector((state) => state.post);

	const dispatch = useAppDispatch();

	const fetchUserPost = async () => {
		dispatch(postFetch());
	};

	useEffect(() => {
		fetchUserPost();
	}, []);

	return (
		<div className='App'>
			<h2>Simple API Implementation</h2>
			<PostForm />
			{isLoading ? (
				<Loader />
			) : (
				<div className='contentContainer'>
					{post &&
						post.map((item: any) => (
							<div key={item.id} className='container_item'>
								<h3>
									<span>Title:</span> {item.title}
								</h3>
								<p>
									<span>Body:</span> {item.body}
								</p>
							</div>
						))}
				</div>
			)}
		</div>
	);
}

export default App;
