import React from "react";
import { NavLink } from "react-router-dom";
import { useLibrary } from "../context/LibraryContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { overdueLoans } = useLibrary();
  const { isAuthenticated, isInitializing, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">📚</span>
          Athenaeum Library
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className={({ isActive }) => (isActive ? "active" : "")}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrowed" className={({ isActive }) => (isActive ? "active" : "")}>
              Borrowed
              {overdueLoans.length > 0 && (
                <span className="badge">{overdueLoans.length}</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({ isActive }) => (isActive ? "active" : "")}>
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/recommendations" className={({ isActive }) => (isActive ? "active" : "")}>
              Recommendations
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage" className={({ isActive }) => (isActive ? "active" : "")}>
              Manage
            </NavLink>
          </li>
          {!isInitializing && (
            <li className="nav-auth">
              {isAuthenticated ? (
                <button type="button" className="nav-logout" onClick={handleLogout}>
                  Log out
                </button>
              ) : (
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                  Login
                </NavLink>
              )}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
