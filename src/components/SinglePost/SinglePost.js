import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { getComments, getPost } from '../../services/api';
import Button from '../UI/Button/Button';
import styles from './SinglePost.module.css';

const SinglePost = () => {
    const dispatch = useDispatch();
    const comments = useSelector(({ commentsReducer: { comments } }) => comments);
    const { title, body, userId } = useSelector(({ postsReducer: { post } }) => post);

    const { id } = useParams();

    useEffect(() => {
        dispatch(getComments(id));
    }, []);

    useEffect(() => {
        dispatch(getPost(id));
    }, []);

    let location = useLocation();
    
    return (
        <div className={styles.wrapper}>
            <h2>{ title }</h2>
            <p>{ body }</p>
            <Link
                to={`/modal`}
                state={{ backgroundLocation: location, postTitle: title, postBody: body
                }}>
                <Button>Edit Post</Button>
            </Link>
            <Link
                to={`/user-posts/${userId}`}
                >
                <Button>Delete</Button>
            </Link>
            <div>
                <h2>COMMENTS</h2>
                <div className={styles.commentWrapper}>
                    {comments.map(comment => {
                        return (
                            <div key={ comment.id }>
                                <div class={styles.dialogbox}>
                                    <div class={styles.body}>
                                        <span class={styles.tip}></span>
                                        <div class={styles.message}>
                                            <h4>{`${comment.name} from ${comment.email}`}</h4>
                                            <span>{ comment.body }</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SinglePost;