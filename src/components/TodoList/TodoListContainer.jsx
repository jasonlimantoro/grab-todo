import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchTodos,
  createTodo,
  removeTodo,
  completeTodo,
  incompleteTodo,
} from "../../redux/actions/todos.action";
import { selectTodos } from "../../redux/selectors/todos.selector";
import TodoList from "./TodoList";

const TodoListContainer = ({
  fetchTodos,
  createTodo,
  removeTodo,
  todos,
  completeTodo,
  incompleteTodo,
}) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <TodoList
      todos={todos}
      onCreate={createTodo}
      onRemove={removeTodo}
      onComplete={completeTodo}
      onIncomplete={incompleteTodo}
    />
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});
const mapDispatchToProps = {
  fetchTodos,
  createTodo,
  removeTodo,
  completeTodo,
  incompleteTodo,
};

TodoListContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  incompleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
