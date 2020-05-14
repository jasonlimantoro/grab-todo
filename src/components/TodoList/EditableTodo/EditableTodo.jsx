/* eslint-disable react/jsx-curly-newline */
import React from "react";
import PropTypes from "prop-types";

function EditableTodo({ todo, onRemove, onComplete, onIncomplete }) {
  return (
    <li>
      <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          type="button"
          onClick={() =>
            todo.completed ? onIncomplete(todo.id) : onComplete(todo.id)
          }
        >
          {todo.completed ? "Incomplete" : "Complete"}
        </button>
        <button type="button" onClick={() => onRemove(todo.id)}>
          <svg
            style={{ height: 20, width: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
          </svg>
        </button>
      </div>
    </li>
  );
}

EditableTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onIncomplete: PropTypes.func.isRequired,
};

export default EditableTodo;
