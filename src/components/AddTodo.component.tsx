import { addTodo } from "@/features/todo/todoSlice";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const addTodoHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }

    return(
        <form onSubmit={(e) => addTodoHandler(e)}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="rounded-sm text-black p-2"
            />
            <button className="m-5 rounded-lg border-2 border-solid border-white p-2">Add todo</button>
        </form>
    )
}

export default AddTodo;