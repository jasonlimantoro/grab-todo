export const selectTodos = (state) =>
  state.todos.items.map((todo) => ({
    ...todo,
    completed: todo.completed === "1",
  }));
