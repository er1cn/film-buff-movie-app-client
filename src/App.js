import React, {useState, useEffect} from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import Login from './Login';
import { BASE_URL } from './config';
import Navbar from './components/Header/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}me`)
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
  }, []);

  user ? <h2>Welcome, {user.username}!</h2> : <Login onLogin={setUser} />;

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // };


  return (
    <div className="App">
      <Navbar />
      <Login />
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
