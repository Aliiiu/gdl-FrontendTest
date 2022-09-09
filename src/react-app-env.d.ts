/// <reference types="react-scripts" />

interface IPost {
	userId: number;
	id?: string;
	title: string;
	body: string;
}

type UserPostsState = {
	posts: IPost[];
};

type PostsAction = {
	type: string;
	post: any;
};

type DispatchType = (args: PostsAction) => PostsAction;
