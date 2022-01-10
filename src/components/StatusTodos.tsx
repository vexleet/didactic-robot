import {FC} from "react";
import {TodoStatus, TodoType} from "../models/Todos";
import Todo from "./Todo";

type StatusTodosProps = {
    status: TodoStatus,
    todos: TodoType[],
    removeTodo: (index: number) => void
    changeStatus: (index: number, newStatus: TodoStatus) => void
}

const StatusTodos: FC<StatusTodosProps> = ({status, todos, removeTodo, changeStatus}) => {
    return (
        <>
            <h2>{status}</h2>
            {todos.map((todo, i) => (
                todo.status === status ? <Todo key={todo.name + i} todo={todo} index={i} removeTodo={removeTodo} changeStatus={changeStatus}/> : ''
            ))}
        </>
    )
}

export default StatusTodos;