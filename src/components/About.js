import React from 'react'
import "../styles/about.css"
import Header from "../components/Header"

const About = () => {
  return (<>
  <Header/>


<div id='bk'>

    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item back">
      <h2 class="accordion-header   ">
        <button class="accordion-button collapsed col" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Who is the Designer of this website ?
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body back"><p> THIS WEBSITE IS MADE BY HAISENBERG </p></div>
      </div>
    </div>
    <div class="accordion-item back">
      <h2 class="accordion-header ">
        <button class="accordion-button collapsed col" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Want your project to be designed like this ?
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body "><p> EMAIL AT -  yoyobantairapper@gmail.com</p></div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default About