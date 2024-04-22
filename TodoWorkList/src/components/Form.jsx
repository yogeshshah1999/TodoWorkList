import {  useDispatch } from "react-redux";
import { addTodo,update} from "../store/TodoSlice";
import {v4 as uuidv4} from 'uuid'

function Form({edit,setEdit,text,setText}) {

  const dispatch =useDispatch()

  const handleSub=(e)=>{
      e.preventDefault()
     if(!edit){ 
     dispatch(
      addTodo({
        id:uuidv4(),
        text:text
      })
      )
     }
     else {
      dispatch(
        update({
          id:edit.id,
          text:text
        })
      )
      setEdit(false)
      
      }
      setText("")
    }
     
     
   return (
    <form  onSubmit={(e)=>handleSub(e)} >
    <div className="mb-3">
      <h1>TODO-LIST</h1>
      <input type="text" value={text} className="form-control container rounded-0  " id="input" required onChange={e=>setText(e.target.value)} />
    </div>
    <button id="submit" type="submit" className="btn btn-primary rounded-0 ">Submit</button>
   
  </form>   
  )
}

export default Form