import React from 'react'
import axios from "axios"
import {useState} from "react"
import Card1 from "../Card1"
import "../styles/news.css"

const Newsapi = () => {
    const[ dota ,setData] = useState([]);
  const News= () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=70ef16c77c204f0590de53171b89f594").then((response) => {setData(response.data.articles)} )
    
}
const Filtered = dota.filter((val) => {
    if(val.description != null && val.urlToImage != null){return val}
})

return (
<>

    <h1 id='fetch' >CLICK THE BUTTON BELOW TO FETCH THE LATEST NEWS</h1>
    <button onClick={News} id='but'> FETCH NEWS</button>
    
    {Filtered.map((value) => {
        return(<Card1 title={value.title.substring(0,70)}  tagline={value.description.substring(0,100)} img={value.urlToImage} url={value.url}  />)}) }
  

  </> )
}

export default Newsapi
