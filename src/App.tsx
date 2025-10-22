import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/todoheader";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    addTodo,
    toggleTodoCompleted,
    deleteTodo,
    filteredTodos,
    setFilter,
    clearCompleted,
    filter,
  } = useTodo();

  return (
    <TodoContainer>
      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList
        todoList={filteredTodos}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
        filter={filter}
        clearCompleted={clearCompleted}
      ></TodoList>
    </TodoContainer>
  );
}

export default App;
