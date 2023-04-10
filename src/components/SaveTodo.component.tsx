import { useAppSelector } from "@/hooks"
import { useState } from "react";

const SaveTodo = () => {
    const [isSaved, setIsSaved] = useState(false);
    const todos = useAppSelector(state => state.todos.value);

    const saveTodosHandler = () => {
        setIsSaved(false);
        if(typeof window !== 'undefined') {
            localStorage.setItem('todos', JSON.stringify(todos));
            setIsSaved(true);
        }
    }

    return(
        <div>
            <button className="rounded-lg border-white border-solid border-2 p-2" onClick={saveTodosHandler}>Save in localStorage</button>
            {isSaved && <p className="text-white">Your list has been saved !</p>}
        </div>
    )
}

export default SaveTodo;