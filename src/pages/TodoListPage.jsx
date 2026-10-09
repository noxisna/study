import { useState, useEffect } from "react";
import { todos } from "../mocks/Todos";
import "./TodoListPage.css";

function TodoListPage() {
  const [todoList, setTodoList] = useState(()=>{
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : todos;
  });
  const [inputText, setInputText] = useState("");
  
useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


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
  }; // ← handleAdd 끝!

  // 🆕 handleAdd가 끝난 "다음"에 따로 만들기
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      handleAdd();
    }
  };

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
          onKeyDown={handleKeyDown} // 🆕 원래 입력창에 한 줄만 추가
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