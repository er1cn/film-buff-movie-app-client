import React, {useState} from 'react'

function SignUp() {
       
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

     
      return (
        <form>
          <h1 className="h3 mb-3 fw-normal"> Please sign up</h1>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
        </form>
      );
    }


export default SignUp
