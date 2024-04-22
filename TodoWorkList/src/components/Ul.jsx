import React from 'react'
import Li from './Li'
import { useSelector } from "react-redux";

function Ul({edit, setEdit,setText}){

  const todo = useSelector((state)=> state.todo)
 
  return (
    <ul className="list-group mt-5 ">
     { 
       todo.map((list)=>
        <Li key={list.id} list={list} edit={edit} setEdit={setEdit} setText={setText}/>
      )
     }
      </ul>
  )

  }
export default Ul