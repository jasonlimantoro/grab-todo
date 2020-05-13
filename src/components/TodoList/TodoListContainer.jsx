import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../../redux/actions/todos.action";
import { selectTodos } from "../../redux/selectors/todos.selector";
import TodoList from "./TodoList";

const TodoListContainer = ({ fetchTodos, todos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  return <TodoList todos={todos} />;
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});
const mapDispatchToProps = { fetchTodos };

TodoListContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
