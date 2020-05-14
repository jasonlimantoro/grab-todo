import React, { useState } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import styles from "./TodoList.module.less";
import EditableTodo from "./EditableTodo";

const TodoList = ({
  todos,
  onCreate,
  onRemove,
  onComplete,
  onIncomplete,
  onUpdate,
}) => {
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
            <EditableTodo
              key={t.id}
              todo={t}
              onRemove={handleRemove}
              onComplete={onComplete}
              onIncomplete={onIncomplete}
              onUpdate={onUpdate}
            />
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
  onUpdate: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onIncomplete: PropTypes.func.isRequired,
};

export default TodoList;
