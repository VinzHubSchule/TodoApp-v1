import ToDoList from "./components/ToDoList.jsx";
import initialTodos from "./data/mockTodos.json";
import TodoSection from "./components/TodoSection.jsx";

function App() {
    return (
        <main>
            <header><h1>TodoApp</h1></header>
            <TodoSection title="Meine Aufgaben">
                <ToDoList todos={initialTodos} />
            </TodoSection>

            <TodoSection title="Hinweis">
                <p>Plane zuerst die nächste Aufgabe.</p>
            </TodoSection>
        </main>
    );
}

export default App;