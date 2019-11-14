import { CONSTANTS } from './constants';
import { Todo, TodoActions, TodoState } from './types';

const initialState: Todo[] = [];

export default function reducer(state: TodoState = initialState, action: TodoActions): TodoState {
    switch (action.type) {
        case CONSTANTS.ADD:
            return [...state, action.payload];
        case CONSTANTS.DELETE:
            return state.filter((todo: Todo) => todo.id === action.payload);
        case CONSTANTS.TOGGLE:
            return state.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            });
        default:
            return state;
    }
}
