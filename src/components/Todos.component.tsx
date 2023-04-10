import { Todo, deleteTodo, loadExistingTodos } from "@/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { useEffect } from "react";

const Todos = () => {
    const todosState = useAppSelector(state => state.todos.value);
    const dispatch = useAppDispatch();

    const deleteTodoHandler = (id: string) => {
        dispatch(deleteTodo(id))
    }

    useEffect(() => {
        const localTodos = localStorage.getItem('todos');
        if(localTodos) dispatch(loadExistingTodos(JSON.parse(localTodos)));
    },[])

    return (
        <div>
            <h1 className="text-4xl m-5">Todo list with redux toolkit</h1>
            <ul className="list-disc">
                {todosState.map((todo: Todo) => (
                    <li key={todo.id}>
                        <span 
                            className="text-white hover:cursor-pointer" 
                            onClick={() => deleteTodoHandler(todo.id)}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;