import { useState } from "react";
import { todos } from "../mocks/todos";
import { useEffect } from "react";
import "./TodoListPage.css";
import FilterBar from "../components/FilterBar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoCount from "../components/TodoCount";
import ClearDoneButton from "../components/ClearDoneButton";

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
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
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

  const handleClearDone = () => {
    setTodoList(todoList.filter((todo) => !todo.done));

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

  const handleEditStart = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    if (editText.trim() === "") return;

    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? {...todo, text: editText} : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleEditKeyDown = (e, id) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      handleEditSave(id);
    }
    if (e.key === "Escape") {
      handleEditCancel();
    }
 };


  const filteredList = todoList.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  const remainingCount = todoList.filter((todo) => !todo.done).length;

  return (
    <div className="todo-container">
      <h2 className="todo-title">📓 할 일 목록</h2>
      
      <TodoForm inputText={inputText} setInputText={setInputText} onAdd={handleAdd} />
      <FilterBar filter={filter} setFilter={setFilter}/>

      <TodoList
        todos={filteredList}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEditStart={handleEditStart}
        onEditKeyDown={handleEditKeyDown}
        />
        <TodoCount count={remainingCount} />
        <ClearDoneButton onClear={handleClearDone}/>
    </div>
  );
}

export default TodoListPage;
