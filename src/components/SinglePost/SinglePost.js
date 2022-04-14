import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getComments, getPost } from '../../services/api';
import Button from '../UI/Button/Button';
import styles from './SinglePost.module.css';

const SinglePost = () => {
    const location = useLocation();
    const navigate = useNavigate();
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

    const onDeleteHandler = async() => {
        await deletePost(id);
        navigate(`/user-posts/${userId}`)
    };

    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link
                to={`/modal`}
                state={{
                    backgroundLocation: location,
                    userId,
                    post: { id, title, body }
                }}>
                <Button>Edit Post</Button>
            </Link>
            <Button onClick={onDeleteHandler}>Delete</Button>
            <div>
                <h2>COMMENTS</h2>
                <div className={styles.commentWrapper}>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <div class={styles.dialogbox}>
                                    <div class={styles.body}>
                                        <span class={styles.tip}></span>
                                        <div class={styles.message}>
                                            <h4>{`${comment.name} from ${comment.email}`}</h4>
                                            <span>{comment.body}</span>
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
