import styles from './CompletedTodo.module.css';

export function CompletedTodo({ todosList }) {
  const completedTodos = todosList.filter((todo) => todo.completed === true);

  return (
    <>
      <div className={styles['todo-completed']}>
        <h1 className={styles['todo-completed-title']}>Task done:</h1>
        <div
          className={styles['todo-completed-count']}
          style={
            completedTodos.length > 0
              ? {
                  boxShadow: '0 0 10px rgb(118, 182, 23)',
                  backgroundColor: 'rgb(118, 182, 23)',
                }
              : {
                  boxShadow: '0 0 10px rgb(168, 34, 34)',
                  backgroundColor: 'rgb(168, 34, 34)',
                }
          }
        >
          {completedTodos.length} / {todosList.length}
        </div>
      </div>
    </>
  );
}
