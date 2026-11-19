import { useState } from "react";

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function TodoForm({ initialTodo, title, submitLabel, onSave, onCancel }) {
    const [formData, setFormData] = useState(() => ({
        title: initialTodo?.title ?? "",
        dueDate: initialTodo?.dueDate ?? "",
        description: initialTodo?.description ?? "",
    }));
    const [errors, setErrors] = useState({});

    function updateField(event) {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: "" }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const nextErrors = {};
        const trimmedTitle = formData.title.trim();
        if (!trimmedTitle) nextErrors.title = "Bitte gib einen Titel ein.";
        if (!formData.dueDate || formData.dueDate <= getToday()) {
            nextErrors.dueDate = "Die Fälligkeit muss nach heute liegen.";
        }
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;
        onSave({ ...formData, title: trimmedTitle, description: formData.description.trim() });
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="todo-title">Titel *</label>
            <input id="todo-title" name="title" value={formData.title} onChange={updateField} aria-invalid={Boolean(errors.title)} />
            {errors.title && <p role="alert">{errors.title}</p>}
            <label htmlFor="todo-date">Fällig am *</label>
            <input id="todo-date" name="dueDate" type="date" min={getToday()} value={formData.dueDate} onChange={updateField} aria-invalid={Boolean(errors.dueDate)} />
            {errors.dueDate && <p role="alert">{errors.dueDate}</p>}
            <label htmlFor="todo-description">Beschreibung</label>
            <textarea id="todo-description" name="description" value={formData.description} onChange={updateField} />
            <button type="button" onClick={onCancel}>Abbrechen</button>
            <button type="submit">{submitLabel}</button>
        </form>
    );
}

export default TodoForm;