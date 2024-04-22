
import { useDispatch } from 'react-redux'
import { del } from "../store/TodoSlice";


function Li({list,setEdit,edit,setText}) {

  const dispatch = useDispatch()
  const {text, id}= list
const  handalDel =(id)=>{
  dispatch(del(id))
}
const handleUpdate=(item)=>{
  setText(text)
  setEdit(item)
}
 
  return (
    <li className="list-group-item rounded-0">{text}<span><button className="btn btn-sm btn-danger float-end rounded-0" onClick={()=>handalDel(id)}>Delete</button>
    <button id='edit' className="btn btn-sm float-end bg-primary me-3 rounded-0" 
   onClick={()=>handleUpdate(list)} >Edit</button></span>  </li>
  )
}

export default Li
 