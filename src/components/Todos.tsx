import {FC, useState} from "react";
import AddTodo from "./AddTodo";
import {TodoStatus, TodoType} from "../models/Todos";
import StatusTodos from "./StatusTodos";


const Todos: FC = () => {
    const [todos, setTodos] = useState<TodoType[]>([
        {name: 'hello there', status: TodoStatus.Todo},
        {name: 'general kenobi', status: TodoStatus.Todo}
    ])

    const addTodo = (newTodo: TodoType) => {
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = (removeIndex: number) => {
        const newTodos = todos.filter((_, index) => index !== removeIndex);
        setTodos(newTodos);
    }

    const changeStatus = (index: number, newStatus: TodoStatus) => {
        const todosCopy = [...todos.map((todo) => ({...todo}))]
        todosCopy[index].status = newStatus
        setTodos([...todosCopy])
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: 500,
                margin: "0 auto",
                padding: 8,
            }}
        >
            <h2 style={{ textAlign: "center" }}>Todo</h2>
            <AddTodo onSubmit={addTodo} />
            <div>
                {todos.length === 0 && (
                    <div style={{ textAlign: "center" }}>Add some todos</div>
                )}

                <StatusTodos status={TodoStatus.Todo} todos={todos} removeTodo={removeTodo} changeStatus={changeStatus} />
                <StatusTodos status={TodoStatus.Doing} todos={todos} removeTodo={removeTodo} changeStatus={changeStatus} />
                <StatusTodos status={TodoStatus.Done} todos={todos} removeTodo={removeTodo} changeStatus={changeStatus} />
            </div>
        </div>
    );
}

export default Todos;
