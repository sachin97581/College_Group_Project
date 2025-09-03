import React from 'react'
import '../style/pageBody.css'
import doctorImg from '../image/doctorAnime2.jpeg'
import Miscarriage from '../pages/Miscarriage'

const PageBody = () => {
  return (
    <>
    <div className='pagebody'>
      <div className='pagebody1'>
        <img src={doctorImg} alt="Doctor" className="img" />
      </div>
      <div className='pagebody2'>
        <h1>WELCOME TO BIRTH WEBSITE</h1>
        <p>
          This platform is dedicated to providing helpful resources and information about birth and healthcare. Explore our features and connect with professionals for guidance and support.
        </p>
      </div>
      
    </div>
    <Miscarriage />
    </>
  )
}

export default PageBody