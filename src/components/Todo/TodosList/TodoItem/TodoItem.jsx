import styles from './TodoItem.module.css';
import remove from '../../../../assets/svg/remove.svg';

export function TodoItem({ todo, changeTodoStatus, removeTodo }) {
  return (
    <div className={styles['todo-item']} key={todo.id}>
      <div className={styles['todo-item-main']}>
        <button
          onClick={changeTodoStatus}
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
        {todo.completed && (
          <img
            className={styles['todo-item-remove-btn']}
            src={remove}
            onClick={removeTodo}
          ></img>
        )}
      </div>
    </div>
  );
}
