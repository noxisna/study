function TodoForm({ inputText, setInputText, onAdd}){
    const handleKeyDown = (e) => {
        if (e.nativeEvent.isComposing) return;
        if(e.key === "Enter"){
            onAdd();
        }
    };

    return(
        <div className="todo-form">
            <input
                type="text"
                className="todo-input"
                placeholder="할 일을 입력하세요"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="todo-add-btn" onClick={onAdd}>
                추가
            </button>
        </div>
    );
}

export default TodoForm;