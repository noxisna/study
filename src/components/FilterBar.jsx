function FilterBar({ filter, setFilter}) {
    return (
        <div className="filter-bar">
            <button className={filter === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("all")}
            >
                전체
            </button>
             <button className={filter === "done" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("done")}
            >
                완료
            </button>
             <button className={filter === "active" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("active")}
            >
                미완료
            </button>

        </div>

    );

}

export default FilterBar;