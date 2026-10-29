function TodoItem({
    todo, 
    editingId,
    editText,
    setEditText,
    onToggle,
    onDelete,
    onEditStart,
    onEditKeyDown,
}) {

    const today = new Date().toLocaleDateString("sv-SE");
    const isOverdue = todo.dueDate && todo.dueDate < today && !todo.done;

    return (

        <li className="todo item">
            <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
        />

        {editingId === todo.id ? (
            <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => onEditKeyDown(e, todo.id)}
            autoFocus
            />
        ) : (
            <span
            className={todo.done ? "todo-text done" : "todo-text"}
            onDoubleClick={() => onEditStart(todo)}
            >
                {todo.text}
            </span>
        )}{todo.dueDate && (
            <span className={isOverdue ? "todo-due overdue" : "todo-due"}>
                📅 {todo.dueDate}
            </span>
        )}

        <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
            🗑️
        </button>
        </li>
        );
}

export default TodoItem ;