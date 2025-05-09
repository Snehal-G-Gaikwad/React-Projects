import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ border: 'none', background: 'transparent' }}
    >
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "text-decoration-line-through text-muted" : ""}>
          {todo.text}
        </span>
      </div>
      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTodo(todo.id)}>
        🗑
      </button>
    </li>
  );
}

export default TodoItem;
