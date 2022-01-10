import {FC, useState} from "react";
import {TodoStatus, TodoType} from "../models/Todos";

type AddTodoProps = {
    onSubmit: (todoValue: TodoType) => void
}

const AddTodo: FC<AddTodoProps> = ({onSubmit}) => {
    const [newTodo, setNewTodo] = useState('')

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTodo) return;

        onSubmit({name: newTodo, status: TodoStatus.Todo})
        setNewTodo('')
    }

    return (
        <form
            onSubmit={submitForm}
            style={{ display: "flex", marginBottom: 8 }}
        >
            <input
                type="text"
                name="newTodo"
                id="newTodo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Fix the thing.."
                style={{
                    display: "inline-flex",
                    flex: 1,
                    padding: 4,
                    border: "1px solid #eaeaea",
                    marginRight: 4,
                }}
            />
            <button
                type="submit"
                style={{ borderColor: "#eaeaea", backgroundColor: "#fff" }}
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo;