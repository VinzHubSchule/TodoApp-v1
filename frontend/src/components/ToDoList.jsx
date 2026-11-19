import TodoItem from "./TodoItem.jsx";

function ToDoList({ todos, onToggle }) {
    if (todos.length === 0) return <p>Noch keine aufgaben passen zu dieser auswahl gegeben.</p>;

     return (
        <section>
            <h2>Deine Aufgaben</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}><TodoItem todo={todo} onToggle={onToggle} /></li>
                ))}
            </ul>
        </section>
    );
        
    
}

export default ToDoList;