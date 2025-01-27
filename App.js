import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const handleAddTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: newTodo.title,
        date: newTodo.date,
        time: newTodo.time,
        completed: false,
      },
    ]);
  };

  // Toggle completion status of a todo
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="todo-header">To-Do List</h1>
      <div className="todo-container">
        {/* Form for adding tasks */}
        <TodoForm onAddTodo={handleAddTodo} />

        {/* Display tasks in a grid */}
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
