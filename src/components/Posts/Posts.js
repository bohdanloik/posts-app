import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../services/api';
import Button from '../UI/Button/Button';
import Table from '../UI/Table/Table';

const Posts = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector(({ postsReducer: { posts } }) => posts);
    const { id: userId } = useParams();
    
    useEffect(() => {
        dispatch(getPosts(userId));
    }, []);

    return (
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Posts Title</th>
                        <th></th>
                        <th>
                            <Link
                                to={`/modal`}
                                state={{
                                    backgroundLocation: location,
                                    userId,
                                }}>
                                <Button>Add post</Button>
                            </Link>
                        </th>
                        
                    </tr>
                </thead>

                <tbody>
                    {posts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <Link to={`/posts/${post.id}`}>
                                        <Button>Open</Button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default Posts;
