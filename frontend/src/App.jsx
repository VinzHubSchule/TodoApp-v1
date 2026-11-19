import { useState } from "react";
import ToDoList from "./components/ToDoList.jsx";
import initialTodos from "./data/mockTodos.json";
import TodoFilters from "./components/TodoFilters.jsx";
import TodoSection from "./components/TodoSection.jsx";

function App() {
    // return (
    //     <main>
    //         <header><h1>TodoApp</h1></header>
    //         <TodoSection title="Meine Aufgaben">
    //             <ToDoList todos={initialTodos} />
    //         </TodoSection>

    //         <TodoSection title="Hinweis">
    //             <p>Plane zuerst die nächste Aufgabe.</p>
    //         </TodoSection>
    //     </main>
    // );
    const [todos, setTodos] = useState(initialTodos);
    const [status, setStatus] = useState("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("dueDate");

    const visibleTodos = todos
        .filter((todo) => status === "all" || (status === "done" ? todo.done : !todo.done))
        .filter((todo) => todo.title.toLocaleLowerCase("de").includes(search.trim().toLocaleLowerCase("de")))
        .toSorted((first, second) => {
            const direction = sort === "dueDate-desc" ? -1 : 1;
            return direction * first.dueDate.localeCompare(second.dueDate);
        });

    return (
        <main>
            <h1>TodoApp</h1>
            <TodoFilters
                status={status} search={search} sort={sort}
                onStatusChange={setStatus} onSearchChange={setSearch} onSortChange={setSort}
            />
            <ToDoList todos={visibleTodos} />
        </main>);
}

function toggleTodo(todoId) {
    setTodos((currentTodos) => currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo,
    ));
}

<ToDoList todos={visibleTodos} onToggle={toggleTodo} />

export default App;