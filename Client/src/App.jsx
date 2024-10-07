import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(user);
    console.log(password);
  };

  return (
    <>
      <div className='container'>
        <div className='box'>
          <h5>Username:</h5>
          <input
            type="text"
            placeholder='Username'
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className='box'>
          <h5>Password:</h5>
          <input
            type="password"
            placeholder='Password' 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </>
  );
}

export default App;
