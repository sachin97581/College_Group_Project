import React, { useState, useEffect } from 'react'
import '../style/pageBody.css'
import doctorImg from '../image/img1-removebg-preview.png'
import bgImage from "../image/img2-removebg-preview.png"
import bgImage2 from "../image/img3-removebg-preview.png"
import bgImage3 from "../image/img4-removebg-preview.png"
import bgImage4 from "../image/img5-removebg-preview.png"
import Miscarriage from '../pages/Miscarriage'

const PageBody = () => {
  // Array of images
  const images = [doctorImg, bgImage, bgImage2, bgImage3, bgImage4]
  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  // Handle manual image selection
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className='pagebody'>
        <div className='pagebody1'>
          <img 
            key={currentIndex} // Key prop forces re-render for animation
            src={images[currentIndex]} 
            alt="Healthcare" 
            className="img" 
          />
          
          {/* Image Indicators */}
          <div className='image-indicators'>
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>

        <div className='pagebody2'>
          <h1>WELCOME TO BIRTH WEBSITE</h1>
          <p>
            This platform is dedicated to providing helpful resources and information about birth and healthcare. 
            Explore our features and connect with professionals for guidance and support.
          </p>
          {/* Optional CTA Button */}
          {/* <button className='cta-button' onClick={() => console.log('Explore clicked')}>
            Explore Now
          </button> */}
        </div>
      </div>
      
      <Miscarriage />
    </>
  )
}

export default PageBody