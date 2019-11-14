import { combineReducers, createStore } from 'redux';

// reducers
import todosReducer from './reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
