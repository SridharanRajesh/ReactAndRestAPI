import React, { useEffect, useState } from 'react'
import axios from"axios";
import { Link, useParams } from 'react-router-dom';
import './Home.css'


export default function Home() {

    const [user,setUser]=useState([])

    useEffect(()=>
    {
        loadUsers(); 
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/fetchteams");
        setUser(result.data);
    };


const {id} =useParams()

    const deleteTeam = async(teamno)=>{
       await axios.delete(`http://localhost:8080/deleteteams/${teamno}`)
      loadUsers()
  }

    
  return (
    
    <div className='container'>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" >PRO KABADDI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-light" to = "/postteams">Add teams</Link>
  </div>
</nav>
    </div>
    <div className='py-4'>
    <table className="table table-bordered border-danger">
  <thead>
    <tr>
      <th scope="col">teamno</th>
      <th scope="col">teamname</th>
      <th scope="col">captain</th>
      <th scope="col">wins</th>
      <th scope="col">loses</th>
      <th scope="col">points</th>
      <th scope='col'>operations</th>
    </tr>
  </thead>
  <tbody className='tb'>
    {
        user.map((user,index)=>(
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      
      <td>{user.teamname}</td>
      <td>{user.captain}</td>
      <td>{user.wins}</td>
      <td>{user.loses}</td>
      <td>{user.points}</td>
      <td>
        <Link className="btn btn-success mx-2" to={`/get/${user.teamno}`}>VIEW</Link>
        <Link className="btn btn-warning mx-2" to={`/updateteams/`}>EDIT</Link>
        <button className="btn btn-danger mx-2" onClick={()=>deleteTeam(user.teamno)}>DELETE</button>

      </td>
    </tr>
    
        ))
    }
  </tbody>
</table>
    </div>
    </div>
  )
}
