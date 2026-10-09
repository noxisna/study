import { useState } from "react";
import { todos } from "../mocks/Todos";
import "./TodoListPage.css";

function TodoListPage() {
  const [todoList, setTodoList] = useState(todos);
  const [inputText, setInputText] = useState("");

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleAdd = () => {
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  // 🆕 삭제 버튼을 누르면 실행되는 함수
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📓 할 일 목록</h2>

      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="todo-add-btn" onClick={handleAdd}>
          추가
        </button>
      </div>

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
            {/* 🆕 삭제 버튼 */}
            <button
              className="todo-delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;