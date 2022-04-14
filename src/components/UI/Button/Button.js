import style from './Button.module.css';

const Button = (props) => {

    return  <span onClick={props.onClick} className={style.button}>{props.children}</span>
    
}

export default Button;