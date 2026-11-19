// function TodoItem({ todo }) {
//     return (
//         <article>
//             <h3>{todo.title}</h3>
//             {todo.description && <p>{todo.description}</p>}
//             <p>Fällig am {todo.dueDate}</p>
//             <span>{todo.done ? "Erledigt" : "Offen"}</span>
//         </article>
//     );
// }

function TodoItem({ todo, onToggle }) {
    return (
        <article>
            <button
                type="button"
                aria-label={todo.done ? `${todo.title} wieder öffnen` : `${todo.title} als erledigt markieren`}
                onClick={() => onToggle(todo.id)}
            >
                {todo.done ? "✓" : ""}
            </button>
            <h3>{todo.title}</h3>
            {todo.description && <p>{todo.description}</p>}
            <p>Fällig am {todo.dueDate}</p>
            <span>{todo.done ? "Erledigt" : "Offen"}</span>
        </article>
    );
}

export default TodoItem;