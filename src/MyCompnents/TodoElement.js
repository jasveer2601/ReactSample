import React from 'react'

export const TodoElement = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h4>
                        {props.todo.title}
                    </h4>
                    <p>{props.todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}
