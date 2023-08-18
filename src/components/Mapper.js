import React from 'react'
import Data from "../Data"
import Card from "../Card"

const Mapper = () => {
  return (
    <>{Data.map((val) => {
        return ( <Card title={val.title} tagline={val.tagline} img={val.image} wiki={val.Wiki}  /> )
      })}
      </>
      
  )
}

export default Mapper