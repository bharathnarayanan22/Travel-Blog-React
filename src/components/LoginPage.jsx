import React, { useState } from "react";
import Style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (username === 'admin' && password === 'password') {
  //         console.log('Login successful');
  //     } else {
  //         setError('Invalid username or password');
  //     }
  // };

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  // let ValidateUser=(event)=>{
  //     event.preventDefault();
  //     let user = {
  //         Email,
  //         Password
  //     }
  //     fetch("https://tame-gold-cormorant-robe.cyclic.app/login",{
  //         method:"POST",
  //         body:JSON.stringify(user),
  //         headers:{

  //             "Content-Type":"application/json",
  //         }
  //     }).then((response)=>{
  //         return response.json();
  //     }).then((response)=>{
  //         if(response.Message === "Login Successful !"){
  //             localStorage.setItem("Current_User",JSON.stringify(response.user));
  //             localStorage.setItem("User_role",response.user.Role);
  //             localStorage.setItem("token",response.token);
  //             localStorage.setItem("islogged",true)
  //             alert(response.Message);
  //             navigate("/blogs");
  //         }
  //         else{
  //             alert("Invalid Credentials");
  //         }
  //     }).catch((error)=>{
  //         alert("Failed to login !");
  //         console.log(error);
  //     })
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/LoginPage', { email, password })
        .then(result => {
            console.log('Response:', result.data);
            const userData = result.data.user; // Check for user data in the response

            if (userData) {
                localStorage.setItem("Current_User", JSON.stringify(userData));
                localStorage.setItem("User_role", userData.Role);
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("islogged", true);
                alert("Login Successful!");
                navigate('/');
            } else {
                alert("Invalid Credentials");
            }
        })
        .catch(error => {
            console.error("Login failed:", error);
        });
};

  return (
    <div className={Style.loginformparent}>
      <form
        style={{
          width: "70%",
          padding: "35px",
          margin: "auto",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "8px",
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "600", color: "white" }}>
          Login
        </h1>
        <h3>Email</h3>
        <input        
          placeholder="Enter Your Email"
          type="email"         
          onChange={(event) => {
            SetEmail(event.target.value);
          }}
        />
        <br />
        <br />
        <h3>Password</h3>
        <input         
          placeholder="Enter your Password"
          type="password"         
          onChange={(event) => {
            SetPassword(event.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit" className={Style.triangularButton}>
          <span>Login</span>
          <span>Login</span>
        </button>
      </form>
      <div className={Style.animage}>
        <h2>
          Adventure is out there
        </h2>
        <Link to='/SignUpPage'style={{color:"white",fontWeight:"600"}}>Click to signup!</Link> 
      </div>
    </div>
  );
};

export default LoginPage;
