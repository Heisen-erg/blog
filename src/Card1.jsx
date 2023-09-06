import React from 'react'
import "./styles/card1.css"

const Card1 = (props) => {
  return (
    <div className="container-fluid">
      <div className="row" id="media">
        <div className="col-sm-6 text-center" id="colcnews">
          <h1 id="gilowt">
            {props.title}...
          </h1>
          <p id="sca"> {props.tagline}... </p>
          <a href={props.url}> <button id="bt"><i className
            ="bi bi-google"></i></button></a>
          <p className="glow-text" >BLOG</p>
        </div>
        <div className="col-6 col-md-6" id="colc1news">
          <div  id="overflow1"> <img src={props.img} className="img-fluid " alt="IMAGE" id="shade" /> </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card1