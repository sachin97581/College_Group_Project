import React from 'react'
import Card from '../pages/Card.jsx'
import '../style/Miscarriage.css'
import doctorImg from '../image/img1-removebg-preview.png'
import bgImage from "../image/img2-removebg-preview.png"
import bgImage2 from "../image/img3-removebg-preview.png"
import bgImage3 from "../image/img4-removebg-preview.png"
import bgImage4 from "../image/img5-removebg-preview.png"
import bgImage5 from "../image/img5-removebg-preview.png"
import bgimg6 from "../image/Screenshot 2025-10-08 190545.png"
import bgimg7 from "../image/Screenshot 2025-10-08 191758.png"
import bgimg8 from "../image/Screenshot 2025-10-08 192222.png"
import bgimg9 from "../image/Screenshot 2025-10-08 192521.png"
import bgimg10 from "../image/Screenshot 2025-10-08 193051.png"
import bgimg11 from "../image/Screenshot 2025-10-08 193251.png"


const Miscarriage = () => {
  const cardsData = [
    {
      title: "Miscarriage Prevention By Air Pollution",
      body: "Less stay in low air-quality area.",
      image: bgimg6,
      link: "/api/card1"
    },
    {
      title: "Environmental Safety",
      body: "Stay informed about pollution levels in your surroundings.",
      image: bgimg11,
      link: "/api/card2"
    },
    {
      title: "Advanced Medical Monitoring",
      body: "Regular check-ups and following doctor's advice for optimal care.",
      image: bgimg7,
      link: "/api/card3"
    },
    {
      title: "Targeted Nutritional Support",
      body: "Follow a balanced diet plan recommended by your healthcare provider.",
      image: bgimg8,
      link: "/api/card4"
    },
    {
      title: "Indoor Environment Control",
      body: "Maintain clean air quality in your home with proper ventilation.",
      image: bgimg9,
      link: "/api/card5"
    },
    {
      title: "Long-Term Care & Wellness",
      body: "Stay vigilant and maintain healthy lifestyle practices daily.",
      image: bgimg10,
      link: "/api/card6"
    }
  ];

  return (
    <div className='miscarriagePageBody'>
      <div className='miscarriage-header'>
        <h1>Understanding Miscarriage Prevention</h1>
        <p className='subtitle'>Essential information and preventive measures for maternal health</p>
      </div>
      
      <div className='miscarriageCard'>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            body={card.body}
            image={card.image}
            link={card.link}
            imageAlt={card.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Miscarriage






// import React from 'react'
// import Card from '../pages/Card.jsx'
// import '../style/Miscarriage.css'
// import doctorImg from '../image/img1-removebg-preview.png'
// import bgImage from "../image/img2-removebg-preview.png"
// import bgImage2 from "../image/img3-removebg-preview.png"
// import bgImage3 from "../image/img4-removebg-preview.png"
// import bgImage4 from "../image/img5-removebg-preview.png"
// import bgImage5 from "../image/img5-removebg-preview.png"

// const Miscarriage = () => {
//   return (
//     <div className='miscarriagePageBody'>
//       <h1>Know About Miscarriage's Problem</h1>
//       <div className='miscarriageCard'>
//         <Card
//           title="Miscarriage Prevention By Air Pollution"
//           // link="https://example.com/1"
//           body="Less stay in low air-quality area."
//           image={doctorImg}
//           link="/api/card2"
//         />
//         <Card
//           title="Miscarriage Prevention By Air Pollution"
//           body="Less stay in low air-quality area."
//           link="/api/card1"
//         />
//         <Card
//           title="Advance Medical Monitoring"
//           // link="https://example.com/3"
//           body="Take Doctor advice properly."
//           link="/api/card3"
//         />
//         <Card
//           title="Targeted Nutritional Support"
//           // link="https://example.com/4"
//           body="Take diet according to Doctor advice."
//           link="/api/card4"
//         />
//         <Card
//           title="Indoor Environment Control"
//           // link="https://example.com/5"
//           body="Stay in good air-quality Home."
//           link="/api/card5"
//         />
//         <Card
//           title="Long-Term Care"
//           // link="https://example.com/6"
//           body="Be Carefull & Stay alert."
//           link="/api/card6"
//         />
//       </div>
//     </div>
//   )
// }

// export default Miscarriage






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