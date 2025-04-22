import styles from './TodoItem.module.css';

export function TodoItem({ todo }) {
  return (
    <div className={styles['todo-item']} key={todo.id}>
      <div className={styles['todo-item-main']}>
        <button
          className={styles['todo-item-checkbox']}
          style={
            todo.completed === true
              ? { backgroundColor: 'rgb(118, 182, 23)' }
              : { backgroundColor: 'transparent' }
          }
        ></button>
        <h1 className={styles['todo-item-title']}>{todo.name}</h1>
      </div>
      <div className={styles['todo-item-btns']}>
        <button className={styles['todo-item-change-btn']}>Change</button>
        <button className={styles['todo-item-remove-btn']}>Delete</button>
      </div>
    </div>
  );
}
