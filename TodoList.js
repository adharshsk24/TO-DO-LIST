import React from 'react';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  return (
    <div className="todo-grid">
      {todos.map((todo) => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <h3>{todo.title}</h3>
          <p>Date: {todo.date}</p>
          <p>Time: {todo.time}</p>
          <div className="todo-actions">
            <button onClick={() => onToggleComplete(todo.id)}>
              {todo.completed ? 'Undo' : 'Completed'}
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
