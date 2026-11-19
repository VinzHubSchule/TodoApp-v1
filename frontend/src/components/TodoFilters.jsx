function TodoFilters({ status, search, sort, onStatusChange, onSearchChange, onSortChange }) {
    return (
        <div>
            <label>Status
                <select value={status} onChange={(event) => onStatusChange(event.target.value)}>
                    <option value="all">Alle</option><option value="open">Offen</option><option value="done">Erledigt</option>
                </select>
            </label>
            <label>Titel suchen
                <input value={search} onChange={(event) => onSearchChange(event.target.value)} />
            </label>
            <label>Fälligkeit
                <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
                    <option value="dueDate">Früheste zuerst</option><option value="dueDate-desc">Späteste zuerst</option>
                </select>
            </label>
        </div>
    );
}

export default TodoFilters;