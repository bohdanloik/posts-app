import styles from './Table.module.css';

const Table = (props) => {
    return <table className={styles.table}>{props.children}</table>
}

export default Table;
