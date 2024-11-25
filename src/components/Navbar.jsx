import React from "react";
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <h2 style={{ color: 'black' }}>
            <img src="./Assets/images/incline.png" height={60} width={60} class="rounded-circle" alt="..."/>
          incline</h2>
          </NavLink>
          <Divider orientation="vertical" variant="middle" sx={{ borderWidth: '2px' }} flexItem />


          <ul className="nav-item " style={{ display: 'flex', marginTop: '10px' }}>
            <div>
              <i class="bi bi-instagram fs-4" style={{ marginLeft: '1vw' }}></i>
            </div>
            <div>
              <i class="bi bi-github fs-4" style={{ marginLeft: '1vw' }}></i>
            </div>
            <div>
              <i class="bi bi-twitter fs-4" style={{ marginLeft: '1vw' }}></i>
            </div>
          </ul>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>









          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '17vw' }}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/welcome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WELCOME
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/images">
                      HEADER : IMAGE
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/crouser">
                      HEADER : CROUSER
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      HEADER : VIDEO
                    </NavLink>
                  </li>
                </ul>
              </li>



              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/welcome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LANDINGS
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/404">
                      APP
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/crouser">
                      COMPANY
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/parallax">
                      FULLPAGE
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      PRODUCT
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      RESTURANT
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      REAL ESTATE
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      SERVICE
                    </NavLink>
                  </li>
                </ul>
              </li>



              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/welcome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/about">
                      ABOUT
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/video">
                      FAQ
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/signin">
                      SIGN IN
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/signup">
                      SIGN UP
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/404">
                      404
                    </NavLink>
                  </li>
                </ul>
              </li>




              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/welcome"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COMPONENTS
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/bootstrap">
                      BOOTSTRAP
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink className="dropdown-item" to="/theam">
                      THEAM
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="/document"
                  role="button"

                  aria-expanded="false"
                >
                  DOCUMENTATION
                </NavLink>
              </li>

              <li className="nav-item dropdown" style={{marginTop:'8px'}}>
                <a href="https://themes.getbootstrap.com/product/incline-landing-page-set/" target="_blank" style={{ textDecoration: 'none', color: 'black'}}> PURCHASE NOW</a>
              </li>



            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
