import TodoItem from "./TodoItem.jsx";

function ToDoList({ todos }) {
    return (
        <section>
            <h2>Deine Aufgaben</h2>
            {todos.length == 0 && <p>Keine Aufgaben vorhanden</p>}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}><TodoItem todo={todo} /></li>
                ))}
            </ul>
        </section>
    );
}

export default ToDoList;