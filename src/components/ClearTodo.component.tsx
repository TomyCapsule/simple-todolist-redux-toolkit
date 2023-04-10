const ClearTodo = () => {
    const clearTodoHandler = () => {
        localStorage.removeItem('todos');
    }

    return(
        <div>
            <button 
                className="rounded-lg border-white border-solid border-2 p-2"
                onClick={clearTodoHandler}
            >
                Clear localStorage
            </button>
        </div>
    )
}

export default ClearTodo;