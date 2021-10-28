import React from 'react';
import { TodoElement } from './TodoElement';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">Todo List</h3>
            {props.todos.length > 0 ? props.todos.map((todo)=> {
                return <TodoElement todo={todo} key={todo.no} onDelete={props.onDelete}></TodoElement>
            }): <p>No TODO</p>}
            
        </div>
    )
}
