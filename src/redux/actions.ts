import { CONSTANTS } from './constants';
import { Todo, TodoActions } from './types';

export const addTodo = (todo: Todo): TodoActions => ({
    type: CONSTANTS.ADD,
    payload: todo,
});

export const deleteTodo = (id: string): TodoActions => ({
    type: CONSTANTS.DELETE,
    payload: id,
});

export const toggleTodo = (id: string): TodoActions => ({
    type: CONSTANTS.TOGGLE,
    payload: id,
});
