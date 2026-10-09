import { todos } from "../mocks/Todos";
import "./TodoListPage.css";

function TodoListPage() {
  return (
    <div className="todo-container">
      <h2 className="todo-title">📓 할 일 목록</h2>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.done} readOnly />
            <span className={todo.done ? "todo-text done" : "todo-text"}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;