/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const projectKey = 'aef0fb40-a876-4b26-8f81-b5573eeeab10';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = { 'PRIVATE-KEY': projectKey };

    const user = {
      username,
      secret,
      first_name: 'NoNoNoNo',
      last_name: 'NoNoNoNo',
    };

    try {
      await axios.post('https://api.chatengine.io/users/', user, { headers });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={ secret }
            onChange={ (e) => setSecret(e.target.value) }
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
}

export default LoginForm;
