


function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

    return (
      <main className="form-signin">
       <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username:</label>
           <input
             type="text"
              id="username"
              className='form-control'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
      <label htmlFor="password_confirmation">Confirm Password:</label>
         <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  );
}
