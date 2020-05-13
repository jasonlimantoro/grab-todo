import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoList.module.less";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
