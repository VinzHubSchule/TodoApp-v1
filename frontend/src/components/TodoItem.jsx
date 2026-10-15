function TodoItem({ todo }) {
    return (
        <article>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Fällig am {todo.dueDate}</p>
            <span>{todo.done ? "Erledigt" : "Offen"}</span>
        </article>
    );
}

export default TodoItem;