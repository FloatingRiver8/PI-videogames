import React from 'react'


export default function Card({name, image, genres, platforms }) {
  return (
    <div>
                
            <h3>{name}</h3>
            <p>{genres.join(", ")}</p>
            <p>{platforms.join(", ")}</p>
            <img src={image} alt ='img not found' width='400px' height='300px'/>
            
            
        </div>

  )
}
