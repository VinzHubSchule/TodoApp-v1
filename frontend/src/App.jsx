import ToDoList from "./components/ToDoList.jsx";
import initialTodos from "./data/mockTodos.json";

function App() {
    return (
        <main>
            <header><h1>TodoApp</h1></header>
            <ToDoList todos={initialTodos} />
        </main>
    );
}

export default App;