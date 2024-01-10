import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result=>setUser(result.data))
    .catch(err=>res.json(err))

  },[])

  const deleteUser=(id)=>{
    axios.delete("http://localhost:3001/delete/"+id)
    .then(result=>{setUser(result.data)
      window.location.reload()})
    .catch(err=>console.log(err))

  }

  return (
    <div className="bg-slate-600 w-screen h-screen  flex flex-col justify-center items-center ">
      <h1 className="text-white font-semibold mb-2 text-xl">CRUD Application</h1>
      <div className="bg-white w-[40rem]  p-[50px] flex flex-col justify-center items-center rounded-xl overflow-hidden">
        
        <div className="flex ml-[65rem] w-[40rem]">
        <Link
          to="/create"
          className="bg-green-500 rounded-md p-1 text-white cursor-pointer hover:bg-green-600"
        >
          Add+
        </Link>
        </div>
        
        <table className="table-auto w-[100%] text-center m-10">
          <thead>
            <tr className="bg-slate-200 ">
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.adress}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="bg-green-500 rounded-md p-1 text-white cursor-pointer hover:bg-green-600 m-1"
                    >
                      Edit
                    </Link>
                    <button className="bg-red-500 rounded-md text-white p-1 cursor-pointer hover:bg-red-600"
                    onClick={(e)=>deleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default User;
