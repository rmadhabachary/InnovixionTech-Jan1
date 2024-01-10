import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const CreateUser = () => {
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [adress, setAdress]=useState()
  const navigateToHome=useNavigate()

  const submit=(e)=>{
    
    e.preventDefault();
    axios.post("http://localhost:3001/create",{name, email, adress})
    .then(res=>console.log(res) ,navigateToHome('/'))
    .catch(err=>console.log(err))
  }

  return (
    <div className="bg-slate-600 w-screen h-screen  flex justify-center items-center ">
      <div className="bg-white w-[30rem] h-[20rem] p-[50px] flex flex-col justify-center  rounded-xl">
      <form className="flex flex-col gap-2" onSubmit={submit}>
        <div>
          <label htmlFor="">Name:</label><br />
          <input type="text" placeholder='John Doe' 
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email:</label><br />
          <input type="text" placeholder='john@abc.com' 
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Adress:</label><br />
          <input type="text" placeholder='Los Angeles'
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" onChange={(e)=> setAdress(e.target.value)}/>
        </div>
        <button className='bg-green-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-green-600 m-1'>Submit</button>
        </form>
        
        
      </div>
    </div>
  )
}

export default CreateUser