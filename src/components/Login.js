import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialData = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(false);
  const history = useHistory();

  function loginAttempt(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', data)
      .then(res => {
        setError(false);
        console.log(res.data.payload);
        localStorage.setItem('token', res.data.payload);
        history.push('/bubblepage');
      })
      .catch(error => {
        console.log(error);
        setError(true);
      })
    setData(initialData);
  }

  const onInputChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const formSubmit = e => {
    e.preventDefault();
    loginAttempt(e);
  }


  return (
    <div className="form" >
      <h1>Welcome to the Bubble App!</h1>
      <form className="login-form" onSubmit={formSubmit}>
        <label htmlFor="username"> Username </label>
        <section>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username / Email"
            onChange={onInputChange}
          />
        </section>

        <label htmlFor="password"> Password </label>
        <section>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onInputChange}
          />
        </section>
        <button className="loginButton" type='submit'>Login</button>
        {error ? <p className="error">Username or Password not valid.</p> : <p></p>}
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. Completed
//2. Add whatever state nessiary for form functioning. Completed
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY. Completed
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid. Completed
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage. Completed