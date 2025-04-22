import { CompletedTodo } from './CompletedTodo/CompletedTodo';
import { FormTodo } from './FormTodo/FormTodo';
import { TodosList } from './TodosList/TodosList';
import { useState } from 'react';
import styles from './Todo.module.css';

export function Todo() {
  const [todosList, setTodosList] = useState([]);

  return (
    <div className={styles['todo-wrapper']}>
      <CompletedTodo todosList={todosList} />
      <FormTodo setTodosList={setTodosList} />
      <TodosList todosList={todosList} />
    </div>
  );
}
