import './App.css';
import Header from './MyCompnents/Header';
import {Todos} from "./MyCompnents/Todos";
import {Footer} from "./MyCompnents/Footer";
import React, { useState, useEffect } from 'react';
import {AddTodo} from "./MyCompnents/AddTodo";
import {About} from "./MyCompnents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TestComponent  from "./MyCompnents/TestComponent";


function App() {
  
  let initTodo;
  if(localStorage.getItem("todos")!==null) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    initTodo = [];
  }

  const onDelete = (todo)=> {
    console.log("Deleteing " + todo.no);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);

    setTodos(todos.filter((e)=> {
      return e !== todo;
    }));
    
  };

  const addTodo = (title,desc)=>{
    console.log("Title: " + title +" ,Desc: " + desc);
    const myTodo = {
      no: todos.length,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);

  };

  const [todos, setTodos] = useState(initTodo);

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  

  return (
    <>
      <Router>
        <button value="click me" onClick={(e)=>{setFlag(false)}}/>
        <Header title="Jasveer's Todos" about={flag}></Header>
        <Switch>  
          <Route exact path="/">
            <AddTodo AddTodo={addTodo}></AddTodo>
            <Todos todos={todos} onDelete={onDelete}></Todos>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mycomponent">
            <TestComponent />
          </Route>
        </Switch>
      
      
      <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
