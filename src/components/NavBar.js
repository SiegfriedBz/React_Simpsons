import React from 'react'

const NavBar = () => {


  return (
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid px-5">
          <h1>Simpsons</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"><h4>Search</h4></button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
