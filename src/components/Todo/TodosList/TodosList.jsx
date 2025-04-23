import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodosList.module.css';

export function TodosList({ todosList, setTodosList }) {
  const changeTodoStatus = (id) => {
    setTodosList((prev) => {
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  const removeTodo = (id) => {
    setTodosList((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const todosListJSX = todosList.map((todo) => {
    return (
      <TodoItem
        todo={todo}
        key={todo.id}
        changeTodoStatus={() => changeTodoStatus(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
      />
    );
  });
  return <div className={styles['todo-list']}>{todosListJSX}</div>;
}
