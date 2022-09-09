import { AnyAction, createSlice, Dispatch } from '@reduxjs/toolkit';
import { createPost, fetchPost } from '../services/endPoint';

interface InitialState {
	post: IPost[];
	error: Record<string, any> | null;
	isLoading: boolean;
}

const initialState = {
	post: [],
	error: null,
	isLoading: false,
};

export const post = createSlice({
	name: 'post',
	initialState,
	reducers: {
		postStart: (state: InitialState) => {
			state.isLoading = true;
		},
		addPost: (state: InitialState, { payload }) => {
			state.post = [payload.data, ...state.post];
			state.isLoading = false;
			state.error = null;
		},
		postFailed: (state: InitialState, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		getPost: (state: InitialState, { payload }) => {
			const postPayload = payload.filter((item: { userId: number }) => item.userId === 1);
			state.post = [...postPayload];
			state.isLoading = false;
			state.error = null;
		},
	},
});

export const { postStart, addPost, postFailed, getPost } = post.actions;

export default post.reducer;

export const postCreate =
	(data: IPost) =>
	async (dispatch: Dispatch<AnyAction>): Promise<void> => {
		try {
			dispatch(postStart());
			const res = await createPost(data);
			dispatch(addPost(res.data));
		} catch (err: any) {
			dispatch(postFailed(JSON.stringify(err)));
		}
	};

export const postFetch =
	() =>
	async (dispatch: Dispatch<AnyAction>): Promise<any> => {
		try {
			dispatch(postStart());
			const res = await fetchPost();
			dispatch(getPost(res.data));
		} catch (err: any) {
			dispatch(postFailed(JSON.stringify(err)));
		}
	};
