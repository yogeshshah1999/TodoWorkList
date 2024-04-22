import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from './store/Store'
import Ul from "./components/Ul";
import { useState } from "react";

function App() {

  const [edit,setEdit]= useState(false)
  const [text, setText]= useState("")
 
  return (
    <Provider store={store}>
      <Navbar/>
      <div className="main">
        <Form edit={edit} setEdit={setEdit} text={text} setText={setText}/>
        <Ul edit={edit} setEdit={setEdit} setText={setText} />
      </div>
    </Provider>
  );
}
export default App;