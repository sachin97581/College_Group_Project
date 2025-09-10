import React from 'react'
import '../pages/Card.jsx'
import Card from '../pages/Card.jsx'
import '../style/Miscarriage.css'
const Miscarriage = () => {
  return (
    <div className='miscarriagePageBody'>
        <h1>Know About Miscarriage's Problem</h1>
       <div className='miscarriageCard'>
         <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       </div>
    </div>
  )
}

export default Miscarriage