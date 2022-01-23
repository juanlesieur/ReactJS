import React from 'react';
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Unalome</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/' >Home</Link>
        </li>
        <li className="nav-item mx-auto">
          <Link className="nav-link" to='/Productos'>Productos</Link>
        </li>
        <li className="nav-item mx-auto">
          <Link className="nav-link" to='/Contacto'>Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
};

export default navbar;
