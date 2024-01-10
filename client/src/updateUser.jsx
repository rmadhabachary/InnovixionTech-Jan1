import {React, useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const {id}=useParams()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [adress, setAdress]=useState()
  const navigateToHome=useNavigate()


  useEffect(()=>{
    axios.get("http://localhost:3001/user/"+id)
    .then(result=>{
      setName(result.data.name)
      setEmail(result.data.email)
      setAdress(result.data.adress)
    })
    .catch(err=>console.log(err))

  },[])

  const update=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/update/"+id,{name, email, adress})
    .then(res=>console.log(res) ,navigateToHome('/'))
    .catch(err=>console.log(err))
  }

  return (
    <div className="bg-slate-600 w-screen h-screen  flex justify-center items-center ">
      <div className="bg-white w-[30rem] h-[20rem] p-[50px] flex flex-col justify-center  rounded-xl">
        <form onSubmit={update} className="flex flex-col gap-2">
        <div>
          <label htmlFor="">Name:</label><br />
          <input type="text" placeholder='John Doe' 
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email:</label><br />
          <input type="text" placeholder='john@abc.com' 
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Adress:</label><br />
          <input type="text" placeholder='Los Angeles'
          className="w-[300px] p-1 border-solid border-2 border-slate-300 rounded-md focus:outline-none" value={adress} onChange={(e)=> setAdress(e.target.value)}/>
        </div>
        <button className='bg-green-500 w-[100px] rounded-md p-1 text-white cursor-pointer hover:bg-green-600 m-1'>Submit</button>
        </form>
        
        
      </div>
    </div>
  )
}

export default UpdateUser