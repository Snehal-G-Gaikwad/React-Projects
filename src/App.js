import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./style.css"; // Make sure to include your CSS for animation

function App() {
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-purple">
      <div className="bg-light p-4 rounded shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center bg-puple text-white p-2 rounded">My To Do</h3>

        {/* Animated input field */}
        <div className={`fade-in ${showInput ? "show" : ""}`}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Add a task"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                addTodo(e.target.value.trim());
                e.target.value = "";
                setShowInput(false); // Hide after adding
              }
            }}
            autoFocus
          />
        </div>

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        <button
          className="btn custom-pple-btn btn-primary w-100 mt-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
          onClick={() => setShowInput((prev) => !prev)}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s',
              transform: showInput ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            +
          </span>
          New Task
        </button>
      </div>
    </div>
  );
}

export default App;
