import TodoItem from "./TodoItem";

function TodoList ({
    todos,
    editingId,
    editText,
    setEditText,
    onToggle,
    onDelete,
    onEditStart,
    onEditKeydOwn,
}) {
    return(
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    editingId={editingId}
                    editText={editText}
                    setEditText={setEditText}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEditStart={onEditStart}
                    onEditKeyDown={onEditKeydOwn}
                />
            ))}
        </ul>
    );
}

export default TodoList;