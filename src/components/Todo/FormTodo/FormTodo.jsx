import { useState } from 'react';
import styles from './FormTodo.module.css';

export function FormTodo({ setTodosList }) {
  const [taskName, setTaskName] = useState('');
  function handleClick(e) {
    e.preventDefault();
    if (!taskName.trim()) return;
    setTodosList((prevTodos) => [
      ...prevTodos,
      {
        name: taskName,
        completed: false,
        id: self.crypto.randomUUID(),
      },
    ]);
    setTaskName('');
  }

  return (
    <div className={styles['todo-form-wrapper']}>
      <form className={styles['todo-form']} onSubmit={handleClick}>
        <input
          className={styles['todo-form-inp']}
          type="text"
          placeholder="Type task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className={styles['todo-form-btn']}>+</button>
      </form>
    </div>
  );
}
