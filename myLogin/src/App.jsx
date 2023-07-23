import { useEffect, useState } from 'react'

import './App.css'
import Login from './components/pages/Login';

function App() {
 const [user,setUser] = useState([]);

  useEffect(()=>{
    async function getUsers(){
      const response = await fetch("http://localhost:3001/api");
      const users = await response.json();
      setUser(users.users);
      console.log(users.users)
    }
  getUsers();  
  },[])

  return <div>

  <Login></Login>
 
     
  </div>
  
  
}

export default App
