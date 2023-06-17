import { Link, useNavigate } from 'react-router-dom'
import './Signin.css'
import axios from 'axios'
import { useState } from 'react'

export default function LoginForm()  {

  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmailid] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      email,
    };
    axios.get(`http://localhost:8080/user/log/${username}/${password}`,data).then((res)=>
    {
      if(res.data===true)
      {
      navigate('/welcome');
      }
      else{
        alert('enter valid username and password');
        }
      
    })
  }

   return (
      
        // <body className="body">
          <div className="signin-container" >
                 <h2 className="title">Sign in</h2>
     <form className="form" onSubmit={handleSubmit}>
       <div className="field">
         <label><b>Email</b></label>
         <input type="email" required  onChange={handleEmailidChange} value={email} />
       </div>
       <div className="field">
         <label><b>User Name</b></label>
         <input type="name"  onChange={handleUsernameChange} value={username} required />
       </div>
       <div className="field">
         <label><b>Password</b></label>
         <input type="password"  onChange={handlePasswordChange} value={password} required  />
       </div> 
        <button className="btn submit" type="submit" >Sign in</button>
     </form>
     <div className="more">
       <p>Don't have an account</p>
       <Link to={"/signup"}>Sign up</Link>
     </div>
     </div>
    // </body>
  

)
}

