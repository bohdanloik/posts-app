import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles  from './Modal.module.css';
import { addPost, updatePost } from '../../services/api';

const Modal = () => {
    const location = useLocation();
    const navigate = useNavigate();
	const state = location.state;
    const { userId, post } = state;
    
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    if(post && !title) {
        setTitle(post.title);
        setDescription(post.body);
    }
    
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }
    const onDismiss = () => {
        navigate(-1);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        post
            ? await updatePost(Number(userId), post?.id, title, description)
            : await addPost(Number(userId), title, description);
    }
    
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <form className={styles.form} onSubmit={onSubmitHandler}>
                    <label>Title</label>
                    <input type='text' onChange={titleHandler} value={title}></input>
                    <label>Description</label>
                    <textarea
                        className={styles.textarea}
                        rows="7"
                        value={description}
                        onChange={descriptionHandler}
                    ></textarea>
                    <div className={styles.buttonWraper}>
                        <button
                            className={styles.button}
                            type="submit"
                            onClick={onDismiss}
                        >SAVE</button>
                        <button
                            className={styles.button}
                            onClick={onDismiss}
                        >CLOSE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
