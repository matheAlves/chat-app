/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Provider/Context';
import './Form.css';

function LoginForm() {
  const { username, setUsername, secret, setSecret } = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate('/chat');
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
      </div>
    </div>

  );
}

export default LoginForm;
