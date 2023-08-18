import React from 'react'
import "../styles/header.css"
import {Link} from "react-router-dom"
import but1 from "../images/but1.png"


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg back4">
    <div class="container-fluid">
      <div> <img src={but1} alt="" id='pic' />
      </div><button class="navbar-toggler back1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="bi bi-list"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2  mb-lg-0 pad ">
          <li class="nav-item">
            <Link class="nav-link  font" aria-current="page" to="/Blogging" >HOME</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  font" aria-current="page" to="/Blogging/NEWS" >NEWS</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  font" aria-current="page" to="/Blogging/About" >ABOUT</Link>
          </li>
          
        </ul>
        <span class="navbar-text font2">
          READ THE ENGAGING BLOGS !
        </span>
      </div>
    </div>
  </nav>
  )
}

export default Header