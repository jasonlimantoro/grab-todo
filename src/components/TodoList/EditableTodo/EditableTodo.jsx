/* eslint-disable react/jsx-curly-newline */
import React, { useState } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import styles from "./EditableTodo.module.less";

function EditableTodo({ todo, onRemove, onComplete, onIncomplete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [error, setError] = useState(null);

  const handleEdit = () => {
    setEditing(true);
    setTitle(todo.title);
  };
  const handleCancelEdit = () => {
    setEditing(false);
    setTitle("");
    setError(null);
  };

  const handleUpdate = () => {
    if (!title) {
      setError(true);
      return;
    }
    onUpdate(todo.id, title);
    handleCancelEdit();
  };

  return (
    <li
      className={cls({
        [styles["completed-list"]]: todo.completed,
      })}
    >
      {editing ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit todo"
            className={cls({
              [styles["error-input"]]: !!error,
            })}
          />
          <button className="btn btn-gray" type="button" onClick={handleUpdate}>
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      ) : (
        <p>
          <button
            onClick={handleEdit}
            className={cls(styles.pointer, {
              [styles.strike]: todo.completed,
              [styles.title]: !todo.completed,
            })}
            disabled={todo.completed}
            type="button"
          >
            {todo.title}
          </button>
        </p>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          type="button"
          className={cls("btn", {
            "btn-danger": todo.completed,
            "btn-success": !todo.completed,
          })}
          style={{ textTransform: "uppercase" }}
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
  onUpdate: PropTypes.func.isRequired,
};

export default EditableTodo;
