import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ marginTop: '11vh' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        404
                    </NavLink>
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ display: "float" }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                404
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>





<div className="row p-4">
  <div className="col-sm-2 mb-3 mb-sm-0">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <h6 className="card-title text-danger">404 error page</h6>
      </div>
    </div>
  </div>
  <div className="col-sm-10">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <div className="row mt-4">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{border:'none'}}>
            <div className="card-body">
              <h5 className="card-title">Page Not Found</h5>
              <p className="card-text">
              The page you are looking for is not here. It has either been moved or never existed. Please go to homepage and start from there instead.
              </p>
              <button
              href="/"
              className="btn"
              style={{ border: "2px orange solid" }}
            >
              Home Page
            </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{border:'none'}}>
          <img src="./Assets/images/404.png" height={400} className="card-img" alt="..." />
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

        </>
  )
}

export default Error