import { useState } from "react";
import { todos } from "../mocks/Todos";
import "./TodoListPage.css";

function TodoListPage() {
  const [todoList, setTodoList] = useState(todos);
  const [inputText, setInputText] = useState(""); // 🆕 입력창 글자

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 🆕 추가 버튼을 누르면 실행되는 함수
  const handleAdd = () => {
    if (inputText.trim() === "") return; // 빈칸이면 추가 안 함

    const newTodo = {
      id: Date.now(),      // 지금 시간을 숫자로 → 겹치지 않는 번호
      text: inputText,
      done: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputText(""); // 추가 후 입력창 비우기
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">📓 할 일 목록</h2>

      {/* 🆕 입력창 + 추가 버튼 */}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;