export enum TodoStatus {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done"
}

export type TodoType = {
    name: string,
    status: TodoStatus,
    deadline?: string
}