import React from 'react'
import { TbSquareRounded } from "react-icons/tb";


export default function Location() {
  return (
    <div className='location'>
      <div >
        <p className='head'>Location</p>
      </div>
      <div className='over'>
        <h1>The Golden Location</h1>
      </div>
      <div className='para'>
        <p>
        Swarnim’s position in Sector 5, Gurgaon, one of the city’s most promising sub-cities, makes it an irresistible choice for those looking to invest in commercial retail space in Gurgaon.
        </p>
      </div>
      <div className='img'>
        <img src='https://www.gangarealty.com/swarnim/images/Location-Map.webp'/>
      </div>

      <div >
        <ul>
            <li>Located in a bustling community of 25,000 families</li>
            <li>Proximity and easy access to Gurugram’s city center and Delhi</li>
            <li>Well-connected to all major roads</li>
        </ul>
        <p className='para'>
        Swarnim is a dream come true for investors looking for retail space in Gurgaon because here every opportunity is golden. Swarnim offers thoughtfully designed shops that promise high growth potential.

        Welcome to a space where golden opportunities await.
        </p>
      </div>
      <div className='para'>
      <div className='div'>
      <TbSquareRounded />Delhi Mumbai Industrial Corridor – 5 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />IGI Airport 30 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />G.D. Goenka School
      5 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />K.R. Mangalam University
      5 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />Medanta - The Medicity
      15 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />Proposed Metro
      10 minutes
      </div>
      <div className='div'>
      <TbSquareRounded />Gurugram Railway Station
      20 minutes
      </div>
      </div>
    </div>
  )
}
