import { useState } from "react";
import { todos } from "../mocks/Todos";
import "./TodoListPage.css";

function TodoListPage() {
  // 바뀔 수 있는 할 일 목록 (처음 값은 todos 데이터)
  const [todoList, setTodoList] = useState(todos);

  // 체크박스를 클릭하면 실행되는 함수
  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📓 할 일 목록</h2>

      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
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