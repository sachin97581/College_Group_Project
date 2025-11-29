import React, { useState, useEffect } from 'react';
import { Heart, Activity, Baby, Stethoscope, Plus, Shield } from 'lucide-react';
import Miscarriage from '../pages/Miscarriage';
import '../style/PageBodyType2.css'

const PageBody = () => {
  const images = [
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
    'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    'https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=400'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      

      <div className='pagebody'>
        <div className='pagebody1'>
          <div className='image-container'>
            {/* Decorative circles */}
            <div className='circle-decoration circle-large'></div>
            <div className='circle-decoration circle-medium'></div>
            <div className='circle-decoration circle-small'></div>
            
            {/* Glow effect */}
            <div className='glow-effect'></div>
            
            {/* Floating health icons */}
            <div className='health-icon icon-1'>
              <Heart size={24} color='#e74c3c' />
            </div>
            <div className='health-icon icon-2'>
              <Activity size={24} color='#3498db' />
            </div>
            <div className='health-icon icon-3'>
              <Baby size={24} color='#f39c12' />
            </div>
            <div className='health-icon icon-4'>
              <Stethoscope size={24} color='#9b59b6' />
            </div>
            <div className='health-icon icon-5'>
              <Plus size={24} color='#27ae60' />
            </div>
            <div className='health-icon icon-6'>
              <Shield size={24} color='#e67e22' />
            </div>
            
            {/* Plus decorations */}
            <div className='plus-decoration plus-1'>+</div>
            <div className='plus-decoration plus-2'>+</div>
            <div className='plus-decoration plus-3'>+</div>
            
            {/* DNA strand */}
            <div className='dna-strand'></div>
            
            {/* Heartbeat line */}
            <div className='heartbeat-line'>
              <svg viewBox='0 0 200 60'>
                <path
                  className='heartbeat-path'
                  d='M0,30 L40,30 L50,10 L60,50 L70,30 L200,30'
                />
              </svg>
            </div>
            
            {/* Main image */}
            <img 
              key={currentIndex}
              src={images[currentIndex]} 
              alt="Healthcare" 
              className="img" 
            />
          </div>
          
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
        </div>
      </div>
      <Miscarriage />
    </>
  );
};

export default PageBody;


// import React, { useState, useEffect } from 'react'
// import '../style/pageBody.css'
// import doctorImg from '../image/img1-removebg-preview.png'
// import bgImage from "../image/img2-removebg-preview.png"
// import bgImage2 from "../image/img3-removebg-preview.png"
// import bgImage3 from "../image/img4-removebg-preview.png"
// import bgImage4 from "../image/img5-removebg-preview.png"
// import Miscarriage from '../pages/Miscarriage'

// const PageBody = () => {
//   // Array of images
//   const images = [doctorImg, bgImage, bgImage2, bgImage3, bgImage4]
//   // State to track current image index
//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Auto change image every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [images.length])

//   // Handle manual image selection
//   const handleIndicatorClick = (index) => {
//     setCurrentIndex(index)
//   }

//   return (
//     <>
//       <div className='pagebody'
//       // style={{
//       //   backgroundColor:"red"
//       // }}
//       >
//         <div className='pagebody1'>

//           {/* Floating Health Icons */}
//           <div className="floating-icon icon1">❤️</div>
//           <div className="floating-icon icon2">➕</div>
//           <div className="floating-icon icon3">👶</div>
//           <div className="floating-icon icon4">💊</div>
//           <div className="floating-icon icon5">🩺</div>

//           <img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt="Healthcare"
//             className="img"
//           />

//           {/* Image Indicators */}
//           <div className='image-indicators'>
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
//                 onClick={() => handleIndicatorClick(index)}
//               />
//             ))}
//           </div>

//         </div>


//         <div className='pagebody2'>
//           <h1>WELCOME TO BIRTH WEBSITE</h1>
//           <p>
//             This platform is dedicated to providing helpful resources and information about birth and healthcare.
//             Explore our features and connect with professionals for guidance and support.
//           </p>
//           {/* Optional CTA Button */}
//           {/* <button className='cta-button' onClick={() => console.log('Explore clicked')}>
//             Explore Now
//           </button> */}
//         </div>
//       </div>

//       <Miscarriage />
//     </>
//   )
// }

// export default PageBody