import axios from 'axios';

import setUsersAC from '../store/actionCreators/usersActionCreators';
import setPostsAC from '../store/actionCreators/postsActionCreators';
import setSinglePostAC from '../store/actionCreators/singlePostActionCreators';
import setCommentsAC from '../store/actionCreators/commentsActionCreators';

const url = 'https://jsonplaceholder.typicode.com/';

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get(`${url}users`);
        dispatch(setUsersAC(response.data));
    };
};

export const getPosts = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}posts?userId=${userId}`);
        dispatch(setPostsAC(response.data));
    };
};

export const getPost = (postId) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}posts/${postId}`);
        dispatch(setSinglePostAC(response.data));
    };
};

export const addPost = async (postTitle, postBody, userId) => {
    await axios.post(
        `${url}posts`,
        {userId: userId, title: postTitle, body: postBody}
    );
};

export const updatePost =  async (postTitle, postBody, userId, postId) => {
    await axios.put(
        `${url}posts/${postId}`,
        {userId: userId, title: postTitle, body: postBody}
    );
};

export const deletePost = async (postId) => {
    await axios.delete(`${url}posts/${postId}`);
};

export const getComments = (postId) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}comments?postId=${postId}`);
        dispatch(setCommentsAC(response.data));
    }
}