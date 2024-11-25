import React from 'react'
import {NavLink} from 'react-router-dom'

const Bootstrap = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ marginTop: '11vh' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Bootstrap
          </NavLink>
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ display: "float" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="#">
                Bootstrap
              </NavLink>
            </li>
          </ul>
        </div>
      </nav >
    




      <div className="row p-5">
  <div className="col-4">
    <div id="list-example" className="list-group" style={{position:'fixed'}}>
      <a className="list-group-item list-group-item-action" href="#list-item-1" style={{border:'none', color:'orange'}}>
      Alerts
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-2" style={{border:'none', color:'orange'}}>
      Badge
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-3" style={{border:'none', color:'orange'}}>
      Buttons
      </a>
      <a className="list-group-item list-group-item-action" href="#list-item-4" style={{border:'none', color:'orange'}}>
      Card
      </a>
    </div>
  </div>
  <div className="col-8">
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-smooth-scroll="true"
      className="scrollspy-example"
      tabIndex={0}
    >
      <h4 id="list-item-1">Alerts</h4>
      <p>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    </p>
    <br />
    <hr />


      <h4 id="list-item-2">Badge</h4>
      <p>
  <h1>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h1>
  <h2>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h2>
  <h3>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h3>
  <h4>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h4>
  <h5>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h5>
  <h6>
    Example heading <span className="badge text-bg-secondary">New</span>
  </h6>
</p>
<br />
<hr />

      <h4 id="list-item-3">Buttons</h4>
      <p><button type="button" className="btn btn-primary">
    Primary
  </button>
  <button type="button" className="btn btn-secondary">
    Secondary
  </button>
  <button type="button" className="btn btn-success">
    Success
  </button>
  <button type="button" className="btn btn-danger">
    Danger
  </button>
  <button type="button" className="btn btn-warning">
    Warning
  </button>
  <button type="button" className="btn btn-info">
    Info
  </button>
  <button type="button" className="btn btn-light">
    Light
  </button>
  <button type="button" className="btn btn-dark">
    Dark
  </button>
  <button type="button" className="btn btn-link">
    Link
  </button>
  <br />
  <br />
  <div
    className="btn-group btn-group-lg"
    role="group"
    aria-label="Large button group"
  >
    <button type="button" className="btn btn-outline-primary">
      Left
    </button>
    <button type="button" className="btn btn-outline-primary">
      Middle
    </button>
    <button type="button" className="btn btn-outline-primary">
      Right
    </button>
  </div>
  <br />
  <div className="btn-group" role="group" aria-label="Default button group">
    <button type="button" className="btn btn-outline-primary">
      Left
    </button>
    <button type="button" className="btn btn-outline-primary">
      Middle
    </button>
    <button type="button" className="btn btn-outline-primary">
      Right
    </button>
  </div>
  <br />
  <div
    className="btn-group btn-group-sm"
    role="group"
    aria-label="Small button group"
  >
    <button type="button" className="btn btn-outline-primary">
      Left
    </button>
    <button type="button" className="btn btn-outline-primary">
      Middle
    </button>
    <button type="button" className="btn btn-outline-primary">
      Right
    </button>
  </div>
  </p>
  <br />
  <hr />


      <h4 id="list-item-4">Card</h4>
      <p>
      <div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>
</div>
<br />
<div className="row">
<h3>Double</h3>
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
</div>

      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Bootstrap