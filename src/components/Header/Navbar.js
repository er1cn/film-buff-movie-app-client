import React from 'react'
import { BASE_URL } from '../../config'



function Navbar({ onLogout }) {
  function handleLogout() {
      fetch(`${ BASE_URL }logout`, {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Navbar
