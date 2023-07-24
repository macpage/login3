import { useState } from "react";

import axios, { Axios } from "axios";

function Login(){
    const [username,setUsername] = useState();
    const [password,setpassword] = useState();
    function handleSubmit(){
        axios.post("http://localhost:3001/addUsers", "digga","scheiss drauf")
    }
    return <div id="login">
        <form onSubmit={handleSubmit}>
        <label htmlFor="username"><p>Username</p><input type="text" name="username" onChange={e => setUsername(e.target.value)}/>  </label>
          
         <label htmlFor="password"><p>Password</p><input type="password" name="password" onChange={e => setpassword(e.target.value)} /></label>
         
         <button type="submit" >Login</button>
        </form>
        <a href="">Register</a>
        
    </div>
}

export default Login;