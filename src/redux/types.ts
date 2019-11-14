import { CONSTANTS } from './constants';

export type Todo = {
    id: string;
    isDone: boolean;
    name: string;
};

export type RootState = {
    todos: Todo[];
};

export type TodoState = readonly Todo[];

export type TodoActions =
    | { type: CONSTANTS.ADD; payload: Todo }
    | { type: CONSTANTS.TOGGLE; payload: string }
    | { type: CONSTANTS.DELETE; payload: string };
