import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">PollWatch</Link>
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
    
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/winpredictor" class="nav-link">Win Predictor</Link>
        </li>
        <li class="nav-item">
          <Link to="/manifestocomparator" class="nav-link">Manifesto Comparator</Link>
        </li>
        <li class="nav-item">
          <Link to="/chatbot" class="nav-link">Chat Bot</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavBar;
