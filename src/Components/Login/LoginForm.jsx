/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../../Provider/Context';
import './Form.css';

const projectKey = process.env.REACT_APP_PROJECT_KEY;
const projectId = process.env.REACT_APP_PROJECT_ID;
const chatroomId = process.env.REACT_APP_MAIN_ROOM;

function LoginForm() {
  const { username, setUsername, secret, setSecret } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function checkIfReturningUser() {
    const isReturning = users.some((user) => user.username === username);
    return isReturning;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const returningUser = await checkIfReturningUser();
    if (!returningUser) {
      const createUserHeaders = { headers: { 'PRIVATE-KEY': projectKey } };
      const addUserToChatHeaders = { headers: {
        'Project-ID': projectId,
        'User-Name': process.env.REACT_APP_ADMIN_USERNAME,
        'User-Secret': process.env.REACT_APP_ADMIN_PASSWORD,
      } };
      const addUserToChatBody = { username };
      const user = {
        username,
        secret,
        first_name: username,
        last_name: '',
      };

      try {
        await axios.post('https://api.chatengine.io/users/', user, createUserHeaders);
        await axios.post(`https://api.chatengine.io/chats/${chatroomId}/people/`, addUserToChatBody, addUserToChatHeaders);
        navigate('/chat-app/chat');
      } catch (err) {
        setError('unable to register user');
      }
    }
    if (returningUser) {
      const headers = {
        'Project-ID': projectId,
        'User-Name': username,
        'User-Secret': secret,
      };
      try {
        await axios.get('https://api.chatengine.io/users/me/', { headers });
        setError('');
        navigate('/chat-app/chat');
      } catch (err) {
        setError('wrong password');
      }
    }
  }

  async function fetchUsers() {
    try {
      const config = {
        headers: {
          'PRIVATE-KEY': projectKey,
        },
      };
      const { data } = await axios.get('https://api.chatengine.io/users/', config);
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <h2 className="subtitle">Fa??a login ou crie uma conta:</h2>
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
