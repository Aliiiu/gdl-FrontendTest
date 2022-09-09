import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postCreate } from '../../Redux/postSlice';
import './postForm.css';

const PostForm = () => {
	const [postDetails, setPostDetails] = useState({
		userId: 1,
		title: '',
		body: '',
	});
	const dispatch = useAppDispatch();
	const submitHandler = (e: any) => {
		e.preventDefault();
		const data = {
			userId: 1,
			title: postDetails.title,
			body: postDetails.body,
		};

		dispatch(postCreate(data));
	};
	return (
		<form onSubmit={submitHandler} className='form_wrapper'>
			<div className='inputWrapper'>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					onChange={(e: any) =>
						setPostDetails((prevState) => ({
							...prevState,
							title: e.target.value,
						}))
					}
					name='title'
					placeholder='Enter your post title'
				/>
			</div>
			<textarea
				onChange={(e: any) =>
					setPostDetails((prevState) => ({
						...prevState,
						body: e.target.value,
					}))
				}
				name='body'
				cols={30}
				rows={6}
			></textarea>
			<button className='postBtn'>Post Comment</button>
		</form>
	);
};

export default PostForm;
