import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Root() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    let user = sessionStorage.getItem("user");
    if (user){
      setLoggedIn(true);
      setUsername(user);
    }
  },[]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      setLoggedIn(true);
      sessionStorage.setItem("user",username);
    } else {
      alert('Invalid username or password!');
    }
  };

  const logout=() => {
    setLoggedIn(false);
    sessionStorage.removeItem("user");
  }

  return (
    <div>
      <h2>Login Page</h2>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>Welcome, {username}!</p>
          <Link to={"/dashboard/"+username}>Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
