import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-primary bg-primary">
  <div className="container-fluid">
    <a href='/' className="navbar-brand text-white">Doggy Deals</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar