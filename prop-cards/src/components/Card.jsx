import React from 'react'
import profilepic from '../assets/profile.jpg'

function Card({name='Identity Theft',post='Unemployed'}) {
  return (
    <div className='bg-blue-400 flex justify-center flex-col items-center p-10 rounded-md m-10 w-64'>
        <img src={profilepic} className='h-32 w-56 ' />
        <p>Name: {name} </p>
        <p>Position: {post} </p>
    </div>
  )
}

export default Card