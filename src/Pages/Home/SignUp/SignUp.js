import React, { useState } from 'react';
import illustration from '../../../Assets/illustration.png';
import '../Home.css';
import { SignUpAPI } from './SignUpAPI/SignUpAPI';

const SignUp = ({ handleTab }) => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const postDetails = (pics) => {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chatApp");
    data.append("cloud_name", "dygwpvfhf");
    fetch("https://api.cloudinary.com/v1_1/dygwpvfhf/image/upload", {
      method: "post",
      body: data,
    })
    .then((res) => res.json())
    .then((data) => {
      setPic(data.url.toString());
      console.log(data.url.toString());
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmpassword !== password) {
      console.log("Passwords doesn't match");
      return alert("Passwords doesn't match");
    }
    SignUpAPI({
      name,
      email,
      password,
      pic,
    }).catch((res) => {
      console.log(res);
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="login-container">
        <div className="form-container">
            <img
            src={illustration}
            alt="illustration"
            className="illustration"
            />
            <h1 className="login-head opacity">SIGN UP</h1>
            <form>
                <input
                type="text"
                placeholder="NAME"
                style={{margin:"15px 0"}}
                onChange={ (e) => setName(e.target.value) }
                />
                <input
                type="text" 
                placeholder="EMAIL ADDRESS" 
                style={{margin:"15px 0"}} 
                onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                type="password" 
                placeholder="PASSWORD" 
                style={{margin:"15px 0"}} 
                onChange={ (e) => setPassword(e.target.value) }
                />
                <input 
                type="password" 
                placeholder="CONFIRM PASSWORD" 
                style={{margin:"15px 0"}} 
                onChange={ (e) => setConfirmpassword(e.target.value) }
                />
                <input
                type="file" 
                accept='image/*' 
                placeholder="PICTURE" 
                onChange={(e) => postDetails(e.target.files[0])}
                style={{margin:"15px 0"}}
                />
                <button type='submit' className="opacity" onClick={handleSubmit} >SUBMIT</button>
            </form>
            <div className="register-forget opacity">
                <span className='login-link' onClick={handleTab}>SIGN IN</span>
            </div>
        </div>
    </div>
  )
}

export default SignUp