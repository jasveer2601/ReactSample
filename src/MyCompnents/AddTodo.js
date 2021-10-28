import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const sumbit = (e)=>{
        e.preventDefault();
        
        props.AddTodo(title,desc);
    }
    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefdescault02" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} required/>
                </div>
                
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={sumbit}>Add Todo</button>
                </div>
            </form>
        </div>
    )
}
