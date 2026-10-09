import { todos } from "../mocks/Todos";

function TodoListPage() {
  return (
    <div>
      <h2>📓할 일 목록</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} readOnly />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;