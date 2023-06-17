import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AddUser.css'
export default function AddUser() {


    let navigate =useNavigate()

    const [user,setUser] = useState({
        teamno:"",
        teamname:"",
        captain:"",
        wins:"",
        loses:"",
        points:""
    })


        const onInputChange  =  (e)=>{

            setUser({...user,[e.target.name]:e.target.value})
        }

        const {teamno, teamname , captain ,wins,loses,points} = user
        const onSubmit= async (e)=>{
            
            e.preventDefault();
            await axios.put("http://localhost:8080/updateteams",user);
            navigate("/fetchteams")

        }


   
  return (
    <div >
      <div className="row1">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add team</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Number" className="form-label">
              Team Number
            </label>
            <input 
            type={"Number"}
            className="form-control border-dark shadow"
            placeholder="Enter Team Number"
            name="teamno"
            value={teamno}
            onChange={(e)=>onInputChange(e)} >
              
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Team Name
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter team name"
            name="teamname"
            value={teamname}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Captain
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Enter team captain"
            name="captain"
            value={captain}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Wins
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of wins"
            name="wins"
            value={wins}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Loses
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter no of loses"
            name="loses"
            value={loses}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Points
            </label>
            <input 
            type={"number"}
            className="form-control border-dark shadow"
            placeholder="Enter points"
            name="points"
            value={points}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          
          <button type="submit" className="btn btn-outline-success">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to ="/fetchteams">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
  
}
