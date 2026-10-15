import TodoItem from "./TodoItem.jsx";

function ToDoList() {
    return (
<TodoSection title="Meine Aufgaben">
    <ToDoList todos={todos} />
</TodoSection>
<TodoSection title="Hinweis">
    <p>Plane zuerst die nächste Aufgabe.</p>
</TodoSection>
    );
}

export default ToDoList;