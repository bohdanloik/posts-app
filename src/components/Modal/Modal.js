import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../UI/Button/Button";
import styles  from './Modal.module.css';

const Modal = (props) => {
    let location = useLocation();
	let state = location.state;
    let {postTitle, postBody} = state;
    
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    if(postTitle && !title) {
        setTitle(postTitle)
        setDescription(postBody)

    }
    
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }
    let navigate = useNavigate();

    function onDismiss() {
        navigate(-1);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <form className={styles.form} onSubmit={onSubmitHandler}>
                    <label for='title'>Title</label>
                    <input id='title' type='text' onChange={titleHandler} value={title}></input>
                    <label for='description'>Description</label>
                    <textarea id='description' className={styles.textarea} rows="7" value={description} onChange={descriptionHandler}></textarea>
                    <div className={styles.buttonWraper}>
                        <button className={styles.button} type="submit" onClick={onDismiss}>SAVE</button>
                        <button className={styles.button} onClick={onDismiss}>CLOSE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;