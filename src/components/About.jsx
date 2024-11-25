import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ marginTop: '11vh' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        About
                    </NavLink>
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ display: "float" }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="#">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>




            <div className="card" style={{padding:'80px',border:'none'}}>
  <img src="./Assets/images/pln.jpg" height={400} className="card-img" alt="..." />
  <div className="card-img-overlay">
  </div>
</div>




<div className="row p-4">
  <div className="col-sm-2 mb-3 mb-sm-0">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <h6 className="card-title text-danger">Our team</h6>
      </div>
    </div>
  </div>
  <div className="col-sm-10">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <h5 className="card-title">People behind the scenes</h5>
        <p className="card-text mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio deserunt dolor culpa repellat iusto nostrum tempora placeat fuga facere mollitia adipisci, animi, reiciendis dicta quam obcaecati ad quibusdam eius?
        </p>
       
        <div className="row text-center mt-4">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card" style={{border:'none'}}>
          <img src="./Assets/images/10025.jpg" className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">AVI</h5>
              <p className="card-text">
              Creative Director
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{border:'none'}}>
          <img src="./Assets/images/10024.jpg" className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">AKS</h5>
              <p className="card-text">
              Designer
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{border:'none'}}>
          <img src="./Assets/images/10022.jpg" className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Anushka</h5>
              <p className="card-text">
                Copywriter
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>


<div className="row p-4">
  <div className="col-sm-2 mb-3 mb-sm-0">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <h6 className="card-title text-danger">Our clients</h6>
      </div>
    </div>
  </div>
  <div className="col-sm-10">
    <div className="card" style={{border:'none'}}>
      <div className="card-body">
        <h5 className="card-title">Some of our happy clients</h5>
        <p className="card-text mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio deserunt dolor culpa repellat iusto nostrum tempora placeat fuga facere mollitia adipisci, animi, reiciendis dicta quam obcaecati ad quibusdam eius?
        </p>
       
        <div className="row text-center mt-4">
        <div className="col-sm-2 mb-3 mb-sm-0">
          <div className="card">
          <img src="./Assets/images/" className="card-img" alt="..." />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card" >
          <img src="./Assets/images/" className="card-img" alt="..." />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card" >
          <img src="./Assets/images/" className="card-img" alt="..." />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-sm-2">
        <div className="card" >
        <img src="./Assets/images/" className="card-img" alt="..." />
          <div className="card-body">
          </div>
        </div>
      </div>
      <div className="col-sm-2">
      <div className="card" >
      <img src="./Assets/images/" className="card-img" alt="..." />
        <div className="card-body">
        </div>
      </div>
    </div>
     <div className="col-sm-2">
          <div className="card" >
          <img src="./Assets/images/" className="card-img" alt="..." />
            <div className="card-body">
            </div>
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

export default About