import React, { useState } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import styles from "./TodoList.module.less";

const TodoList = ({ todos, onCreate, onRemove }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ title });
    setTitle("");
  };
  const handleRemove = (id) => {
    if (!confirm("Are you sure?")) return;
    onRemove(id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h1>Todos ({todos.length})</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo"
          />
          <button
            className={cls("btn", "btn-gray", styles.button)}
            type="submit"
          >
            Submit
          </button>
        </form>
        <ul className={styles.ul}>
          {todos.map((t) => (
            <li key={t.id}>
              <p>{t.title}</p>
              <button type="button" onClick={() => handleRemove(t.id)}>
                <svg
                  style={{ height: 20, width: 20 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
