import React from 'react'
import '../App.css'

const Card = ({index, length, data}) => (
  <div className='Body'>
    <div className='counter-container'>
      <p className='counter'>{index}/{length}</p>
    </div>
    <h2 className='name'>{data.name.first}</h2>
    <p className='bold'>From: <span>{data.city}</span></p>
    <p className='bold'>Job Title: <span>{data.title}</span></p>
    <p className='bold'>Employer: <span>{data.employer}</span></p>
    <p className='bold'>Favorite Movies:</p>
    <ol>
      {data.favoriteMovies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ol>
  </div>
)

export default Card