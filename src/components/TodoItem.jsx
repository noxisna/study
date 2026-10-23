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
        )}

        <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
            🗑️
        </button>
        </li>
        );
}

export default TodoItem ;