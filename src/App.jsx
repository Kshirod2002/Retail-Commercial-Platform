import React from 'react'
import './index.css';
import Overview from './components/overview/Overview';
import Location from './components/location/Location';
import Amenities from './components/amenities/Amenities';
import Floor from './components/floor/Floor';
import Enquire from './components/enquire/Enquire';

function App() { 
    return (
  <>
          <div className="video-container">
          <video autoPlay loop muted playsInline>
              <source src="/deskvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          
            <div className='abc'>
            <p className='title'> Swarnim - A project by Tathastu</p>
            </div>
            </div>
            <Overview /> 
            <Location />
            <Amenities />
            <Floor />
            <Enquire />
          </>    
        )
  
}

export default App
