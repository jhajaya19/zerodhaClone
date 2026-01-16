import React, { useEffect, useState }  from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";

function Navbar() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogged(!!token);
  }, [location]); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLogged(false);              
    navigate("/");              
  };

  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF" }}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media\images\logo.svg" alt="Logo" style={{width: "25%"}} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
            {!isLogged ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://zerodha-db.netlify.app/"
                    rel="noopener noreferrer"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
