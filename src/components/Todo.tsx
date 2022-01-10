import {ChangeEvent, FC} from "react";
import {TodoStatus, TodoType} from "../models/Todos";

type PropsTodo = {
    todo: TodoType
    index: number
    removeTodo: (index: number) => void
    changeStatus: (index: number, newStatus: TodoStatus) => void
}

const Todo: FC<PropsTodo> = ({todo, index, removeTodo, changeStatus}) => {
    const changeTodoStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        changeStatus(index, TodoStatus[e.target.value as TodoStatus]);
    }

    return (
        <div
            key={`${todo.name}-${index}`}
            style={{
                padding: 4,
                borderBottom: "1px solid #ccc",
                display: "flex",
            }}
        >
            <span style={{ flex: 1 }}>{todo.name} - {todo.deadline || 'No deadline'}</span>

            <select value={todo.status} onChange={changeTodoStatus}>
                <option value={TodoStatus.Todo}>Todo</option>
                <option value={TodoStatus.Doing}>Doing</option>
                <option value={TodoStatus.Done}>Done</option>
            </select>
            <span
                style={{ cursor: "pointer" }}
                onClick={() => removeTodo(index)}
            >
                &times;
              </span>
        </div>
    )
}

export default Todo;