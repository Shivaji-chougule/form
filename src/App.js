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
    <div >
      <h1 className="heading">User Details</h1>
      <form className="form">
        <label>Name</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
        <label>Email</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <button onClick={submitHnadler}>Submit</button>
        </form>
    </div>
  )
}
export default App;