
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:3000/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;



