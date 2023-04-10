import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

export interface Todo {
    id: string,
    text: string
}

interface TodoState {
    value: Todo[]
}

const initialState: TodoState = {
    value: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loadExistingTodos: (state, action: PayloadAction<Todo[]>) => {
            //Redux Toolkit has Immer built-in so we can directly mutate the state instead of returning new datas
            state.value = action.payload;
        },
        addTodo: (state, action: PayloadAction<string>) => {
            console.log('in reducer')
            const todo: Todo = {
                id: uuid(),
                text: action.payload
            }
            state.value.push(todo);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((todo: Todo) => todo.id !== action.payload);
        }
    }
});

export const {addTodo, deleteTodo, loadExistingTodos} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todos.value;
export default todoSlice.reducer;