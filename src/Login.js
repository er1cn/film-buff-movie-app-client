import React from "react";


function Login() {
 

  

  return (
    <div>
     <form>
       <h1 className="h3 mb-3 fw-normal"> Please sign in</h1>    
        <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  required
              />
              <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  required
              />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
