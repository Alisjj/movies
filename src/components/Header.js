import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }
  return (
    <nav className="mx-0 flex w-full flex-col items-center justify-between py-5 px-20 md:flex-row">
      <span className="text-2xl font-bold">Movies Review</span>
      <ul className="hidden flex-col items-center space-x-20 text-gray-500 md:flex md:flex-row">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">MovieList</NavLink>
        </li>
        <li>
          {user ? (
            <a href="/" onClick={logout}>
              Logout
            </a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
