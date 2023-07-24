import { useEffect, useState } from 'react'

import './App.css'
import Login from './components/pages/Login';

function App() {
 const [user,setUser] = useState([]);

  useEffect(()=>{
    async function getUsers(){
      const response = await fetch("http://localhost:3001/getUsers");
      const users = await response.json();
      setUser(users);
      console.log(users)
    }
  getUsers();  
  },[])

  return <>

  <Login>
   
  </Login>
  
  { user ? user.map((item,index)=> <p key={index}>{item.name}</p>) : null} 
     
  </>
  
  
}

export default App
