import TodoItem from "./TodoItem.jsx";

function ToDoList() {
    return (
        <section>
            <h2>Deine Aufgaben</h2>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </section>
    );
}

export default ToDoList;