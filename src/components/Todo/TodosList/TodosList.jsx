import { useState } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodosList.module.css';

export function TodosList({ todosList, setTodosList }) {
  const [page, setPage] = useState('uncompleted');
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

  const todosCompletedListJSX = todosList
    .filter((todo) => todo.completed === true)
    .map((todo) => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          changeTodoStatus={() => changeTodoStatus(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      );
    });

  const todosUnCompletedListJSX = todosList
    .filter((todo) => todo.completed === false)
    .map((todo) => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          changeTodoStatus={() => changeTodoStatus(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      );
    });
  return (
    <div className={styles['todo-list']}>
      <div className={styles['todo-list-btns']}>
        <button
          className={styles['todo-list-completed']}
          onClick={() => setPage('uncompleted')}
        >
          Uncompleted
        </button>
        <button
          className={styles['todo-list-uncompleted']}
          onClick={() => setPage('completed')}
        >
          Completed
        </button>
      </div>
      <div className={styles['todo-list-main']}>
        {page === 'uncompleted'
          ? todosUnCompletedListJSX
          : todosCompletedListJSX}
      </div>
    </div>
  );
}
