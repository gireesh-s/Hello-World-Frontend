import React, { useState } from 'react';
import illustration from '../../../Assets/illustration.png';
import '../Home.css';
import { SignInAPI } from './SignInAPI/SignInAPI';

const SignIn = ({ handleTab }) => {
  
  const [values, setValues] = useState({
      email: "",
      password: ""
  });

  const { email, password } = values;

  const handleChange = (name) => (event) => {
      setValues({
          ...values,
          [name] : event.target.value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      SignInAPI({email, password}).then((res)=>{
          console.log(res)
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
            <h1 className="login-head opacity">SIGN IN</h1>
            <form>
            <input type="text" placeholder="USERNAME" value={email} onChange={handleChange("email")} />
            <input type="password" placeholder="PASSWORD" value={password} onChange={handleChange("password")} />
            <button type='submit' className="opacity" onClick={handleSubmit}>SUBMIT</button>
            <button className="opacity"
             onClick={
                (e) => {
                    e.preventDefault();
                    SignInAPI({
                        email: "guest@example.com", 
                        password: "guest123"
                    }).then((res) => {
                        console.log(res)
                    })
                }
             }
            >SIGN IN AS GUEST</button>
            </form>
            <div className="register-forget opacity">
            <span className='login-link' onClick={handleTab}>SIGN UP</span>
            <a href="" className='login-link'>FORGOT PASSWORD</a>
            </div>
        </div>
    </div>
)
}

export default SignIn