import React from 'react'

const Card = (props) => {
  return (
    <div className="container-fluid">
      <div className="row" id="media">
        <div className="col-sm-6 text-center" id="colc">
          <h1 id="gilow">
            {props.title}
          </h1>
          <p id="sca"> {props.tagline} </p>
          <a href={props.wiki}> <button id="bt"  ><i className
            ="bi bi-google"></i></button></a>
          <p className="glow-text">BLOG</p>
        </div>
        <div className="col-6 col-md-6" id="colc1">
          <div id="overflow"> <img src={props.img} className="img-fluid" alt="" id="shade" /> </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card