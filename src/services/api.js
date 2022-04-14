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

export const addPost = async (userId, title, body) => {
    await axios.post(`${url}posts`, { userId, title, body });
};

export const updatePost =  async (userId, id, title, body, ) => {
    await axios.put(`${url}posts/${id}`, { userId, id, title, body });
};

export const deletePost = async (id) => {
    await axios.delete(`${url}posts/${id}`);
};

export const getComments = (postId) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}comments?postId=${postId}`);
        dispatch(setCommentsAC(response.data));
    }
}
