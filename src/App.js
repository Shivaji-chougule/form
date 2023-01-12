import React,{useState} from "react";
import './App.css'
function App(){
const[name,setName]=useState(" ")
const[email,setEmail]=useState(" ")




  function submitHnadler(e){
  e.preventDefault()
  setName(" ")
  setEmail(" ")
  console.log(name)
  console.log(email)
  }

  return(
    <div className="main">
      <form className="form">
      <h1 className="heading">User Details</h1>
       <div>
       <label>Name :</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
       <p className="notification">Name Must Not Be Empty</p>
       </div>
        <div>
        <label>Email :</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <button onClick={submitHnadler}>Submit</button>
        </form>
    </div>
  )
}
export default App;