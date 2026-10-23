function ClearDoneButton({ onClear }) {
    return (
        <button className="clear-done-btn" onClick={onClear}>
            완료 항목 모두 삭제
        </button>
    
    );
}
export default ClearDoneButton;