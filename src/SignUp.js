import React, {useState} from 'react'
import { BASE_URL } from './config';

function SignUp() {
       
  const [username, setUsername] = useState(['']);
  const [password, setPassword] = useState(['']);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      }),
    });

    const content = await response.json();

    console.log(content);
   
  }


      return (
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal"> Please sign up</h1>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
        </form>
      );
    }


export default SignUp
