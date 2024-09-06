import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import UserContext, { UserContextTypes } from "../../contexts/UserContext";

const Login = () => {

  const { login } = useContext(UserContext) as UserContextTypes;
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [inputValues, setInputs] = useState({
    userEmail: '',
    password: ''
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = login(inputValues.userEmail, inputValues.password);
    console.log(response);

    if (response === 'Wrong email or password') {
      setError('Wrong email or password');
    } else if (response === 'Suckses') {
      setError('Logged in successfully');
      setTimeout(() => {
        console.log('redirecting to other page....');
        navigate('/');
      }, 2000);
    }
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="userEmail">Email: </label>
          <input
            type="email"
            name="userEmail" id="userEmail"
            placeholder="Enter your email..."
            value={inputValues.userEmail}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password" id="password"
            placeholder="Password..."
            value={inputValues.password}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Login" />

      </form>
      {error && <p>{error}</p>}
    </section>
  );
}

export default Login;