import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodosList.module.css';

export function TodosList({ todosList }) {
  const todosListJSX = todosList.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />;
  });
  return <div className={styles['todo-list']}>{todosListJSX}</div>;
}
