import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ViewUser.css'

import { useParams } from 'react-router-dom'


export default function ViewUser() {

    let navigate =useNavigate()

    const [user,setUser] = useState({
        teamno:"",
        teamname:"",
        captain:"",
        wins:"",
        loses:"",
        points:""
    })

    const {teamno} = useParams();
    useEffect(()=>{
      loadUser()
    },[])

    const loadUser=async()=>{
      const result = await axios.get(`http://localhost:8080/get/${teamno}`)
      setUser(result.data)
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
              <h2 className="text-center m-4">Team Details</h2>

              <div className="card">
                <div className="card-header">
                  Details of team:
                  <ul className="list-group list-group-flush">
                    <li className = "list-group-item">
                      <b>Teamno: </b>
                      {user.teamno}
                    </li>
                    <li className = "list-group-item">
                      <b>Team Name: </b>
                      {user.teamname}
                    </li>
                    <li className = "list-group-item">
                      <b>Captain: </b>
                      {user.captain}
                    </li>
                    <li className = "list-group-item">
                      <b>wins: </b>
                      {user.wins}
                    </li>
                    <li className = "list-group-item ">
                      <b>loses: </b>
                      
                      {user.loses}

                    </li>
                    <li className = "list-group-item">
                      <b>points: </b>
                      {user.points}

                      
                    </li>

                  </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/fetchteams"}>
                  Back to Home
              </Link>
            </div>
          </div>
        </div>
    )
}