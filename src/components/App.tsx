import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

// actions
import { addTodo, deleteTodo, toggleTodo } from 'redux/actions';

// types
import { RootState, Todo } from 'redux/types';

type Props = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
};

const App: React.FC<Props> = ({ todos, addTodo }) => {
    const [name, setName] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;

        setName(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const todo: Todo = { id: uuid(), isDone: false, name };
        addTodo(todo);
        setName('');
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo: Todo, index: number) => (
                    <li key={index}>{todo.name}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo })(App);
