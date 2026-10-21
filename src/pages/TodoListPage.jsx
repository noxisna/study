import { useState } from "react";
import { todos } from "../mocks/todos";
import { useEffect } from "react";
import "./TodoListPage.css";
import FilterBar from "../components/FilterBar";

function TodoListPage() {
  const [todoList, setTodoList] = useState(()=> {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : todos;
   });

   useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
   }, [todoList]);

  const [inputText, setInputText] =useState("");
  const [filter, setFilter] = useState("all");
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

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((todo) => 
      todo.id === id ? { ...todo, done: !todo.done } : todo 
    )
    );
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const filteredList = todoList.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  

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
        onKeyDown={handleKeyDown}
        />
        <button className="todo-add-btn" onClick={handleAdd}>추가</button>
      </div>
      <FilterBar filter={filter} setFilter={setFilter}/>

      <ul className="todo-list">
        {filteredList.map((todo) => (
          <li key={todo.id} className="todo-item">
             <input type="checkbox" checked={todo.done} onChange={ () => handleToggle(todo.id) }/>
             <span className={todo.done ? "todo-text done" : "todo-text"}>{todo.text}</span>
             <button className="todo-delete-btn" onClick={() => handleDelete(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;
