import { useState } from "react";

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function TodoForm({ onSave, onCancel }) {
    const [formData, setFormData] = useState({ title: "", dueDate: "", description: "" });
    const [errors, setErrors] = useState({});

    function updateField(event) {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const nextErrors = {};
        const title = formData.title.trim();
        if (!title) nextErrors.title = "Bitte gib einen Titel ein.";
        if (!formData.dueDate || formData.dueDate <= getToday()) {
            nextErrors.dueDate = "Bitte wähle ein Datum nach heute.";
        }
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;
        onSave({ ...formData, title, description: formData.description.trim() });
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="title">Titel *</label>
            <input id="title" name="title" value={formData.title} onChange={updateField} aria-invalid={Boolean(errors.title)} />
            {errors.title && <p role="alert">{errors.title}</p>}
            <label htmlFor="dueDate">Fällig am *</label>
            <input id="dueDate" name="dueDate" type="date" value={formData.dueDate} onChange={updateField} aria-invalid={Boolean(errors.dueDate)} />
            {errors.dueDate && <p role="alert">{errors.dueDate}</p>}
            <label htmlFor="description">Beschreibung</label>
            <textarea id="description" name="description" value={formData.description} onChange={updateField} />
            <button type="button" onClick={onCancel}>Abbrechen</button>
            <button type="submit">Aufgabe erstellen</button>
        </form>
    );
}

export default TodoForm;