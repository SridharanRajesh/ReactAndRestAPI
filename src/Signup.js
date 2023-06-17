import { Link, useNavigate } from 'react-router-dom'
import './Signin.css'
import axios from 'axios'
import { useState } from 'react'

export default function SignupForm()  {

  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmailid] = useState('');
  const [age, setAge] = useState('');
  const [gender,setGender]= useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      email,
      age,
      gender,
    };
    const res=axios.post("http://localhost:8080/user/adduser",data).then((res)=>
    {
      if(res.data===true)
      {
        navigate("/");
      }
      else
      alert("already exist");
    })
  
    
 
    

    
    // .then((res)=>
    // {
    //   if(res.data===true)
    //   {
    //   navigate('/fetchteams');
    //   }
    //   else{
    //     alert('enter valid username and password');
    //     }
      
    // })
  }

   return (
      
        // <body className="body">
          <div className="signin-container" >
     <h2 className="title">Sign up</h2>
     <form className="form" onSubmit={handleSubmit} >
       <div className="field">
         <label>Email</label>
         <input type="email" required  onChange={handleEmailidChange} value={email} />
       </div>
       <div className="field">
         <label>User Name</label>
         <input type="name"  onChange={handleUsernameChange} value={username} required />
       </div>
       <div className="field">
         <label>Password</label>
         <input type="password"  onChange={handlePasswordChange} value={password} required  />
       </div> 
       <div className="field">
         <label>Age</label>
         <input type="number"  onChange={handleAgeChange} value={age} required  />
       </div> 
       <div className="field">
         <label>Gender</label>
         <input type="text"  onChange={handleGenderChange} value={gender} required  />
       </div> 
       <button className="btn submit" type="submit" >Sign up </button>

       
       
     </form>
     {/* {/* <div className="more">
       <p>Don't have an account</p>
     </div> 
       <Link>Sign up</Link> */}
     </div>
    // </body>
  

)
}

