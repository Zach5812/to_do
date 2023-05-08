import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleNewToDo = (event) => {
    event.preventDefault();


    if (newToDo === ""){
      return;
    }

    const newItem = {
      text: newToDo,
      complete: false
    }

    setToDos([...toDos, newItem]);
    setNewToDo("");
  }

  const handleToDoDelete = (delIdx) =>{
    const filterToDos = toDos.filter((toDo, i) =>{
      return i !== delIdx;
    });
    
    setToDos(filterToDos);
  }

  const handleComplete = (idx) =>{
    const update = toDos.map((toDo, i) => {
      if(idx === i){
        toDo.complete = !toDo.complete;
      }
      return toDo;
    })

    setToDos(update);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>To Do List</h1>
      <form onSubmit={(event) => {
        handleNewToDo(event);
      }}>
        <input onChange={(event) =>
          setNewToDo(event.target.value)} type="text" value={newToDo} />
        <div>
          <button>
            Add
          </button>
        </div>
      </form>
      {toDos.map((toDo, i) => {
        return <div key={i}>
          <input onChange={(event) => {
          handleComplete(i);
          }} checked={toDo.complete} type="checkbox"/>
          <span>{toDo.text}     </span>
          <button onClick={(event) => {
          handleToDoDelete(i);
          }}>Delete</button>
          
          </div>;
      })}


        </div>
  );
}

      export default App;
