import React from 'react'
import Card from '../pages/Card.jsx'
import '../style/Miscarriage.css'

const Miscarriage = () => {
  return (
    <div className='miscarriagePageBody'>
      <h1>Know About Miscarriage's Problem</h1>
      <div className='miscarriageCard'>
        <Card
          title="Miscarriage Prevention By Air Pollution"
          // link="https://example.com/1"
          body="Less stay in low air-quality area."
          link="/api/card2"
        />
        <Card
          title="Miscarriage Prevention By Air Pollution"
          body="Less stay in low air-quality area."
          link="/api/card1"
        />
        <Card
          title="Advance Medical Monitoring"
          // link="https://example.com/3"
          body="Take Doctor advice properly."
          link="/api/card3"
        />
        <Card
          title="Targeted Nutritional Support"
          // link="https://example.com/4"
          body="Take diet according to Doctor advice."
          link="/api/card4"
        />
        <Card
          title="Indoor Environment Control"
          // link="https://example.com/5"
          body="Stay in good air-quality Home."
          link="/api/card5"
        />
        <Card
          title="Long-Term Care"
          // link="https://example.com/6"
          body="Be Carefull & Stay alert."
          link="/api/card6"
        />
      </div>
    </div>
  )
}

export default Miscarriage






// import React from 'react'
// import '../pages/Card.jsx'
// import Card from '../pages/Card.jsx'
// import '../style/Miscarriage.css'
// const Miscarriage = () => {
//   return (
//     <div className='miscarriagePageBody'>
//         <h1>Know About Miscarriage's Problem</h1>
//        <div className='miscarriageCard'>
//          <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//        </div>
//     </div>
//   )
// }

// export default Miscarriage