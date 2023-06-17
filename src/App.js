
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import LoginForm from './Signin';
import SignUpForm from './Signup';
import Forpas from './forgot password';
import HeroSection from './cards';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/welcome" element={<HeroSection/>}/>
        <Route exact path="/forpas" element = {<Forpas/>}/>
        <Route exact path ="/" element={<LoginForm/>}/> 
        <Route exact path="/signup" element={<SignUpForm/>}/>
        
        <Route exact path = "/get/:teamno" element={<ViewUser/>}/> 
        <Route exact path="/updateteams/" element={<EditUser/>}/>
        <Route exact path="/fetchteams" element={<Home/>} />
        <Route exact path="/postteams" element= {<AddUser/>}/>
        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;

