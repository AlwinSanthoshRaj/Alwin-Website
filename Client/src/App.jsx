import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async () => {
      try {
        console.log(user, password);
        const userToInsert = {
          user: toString(user),
          pass: toString(password)
        }
        const apiUrl = `http://localhost:3000/insertUser?user=${user}&pass=${password}`;

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToInsert),
        });
        const result = await response.json();
        console.log("User document inserted:", result);
      } catch (err) {
        console.error("Error inserting user data:", err);
      }
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
