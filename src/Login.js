import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login () {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const navigate = useNavigate();
const handleSubmit = (e) =>{
  e.preventDefault();

  if (email === "" || pass === ""){
    alert("all req");
    return;
  }
if (email === "abc@gmail.com" && pass === "12345"){
  alert("success");
  navigate("/user");
} else {
  alert("invalid");
}
}
return (
  <div style={{ padding: 20 }}>
    <h2>Login Page</h2>

    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email input" value={email}
      onChange={(e) => setEmail (e.target.value)} />
      <input type="password" placeholder="password input" value={pass}  
      onChange={(e) => setPass (e.target.value)} />
      <button type="submit">Login</button>
    </form>
  </div>


);
}




 export default Login;