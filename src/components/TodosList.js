import { useState } from "react";
import TodoItem from "./TodoItem";

function TodosList({ todos, dispatch }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { title } });
    setTitle("");
  };

  return (
    <div>
      <h1>Todos List</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Todo..."
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default TodosList;