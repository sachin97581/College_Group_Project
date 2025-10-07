import React from 'react'
import '../style/Card.css'
import { Link } from 'react-router-dom'

const Card = ({ title, body, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default Card;


// const Card = ({ title, link, body }) => {
//   return (
//     <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
//     <div className='card'>
//       <h2>{title}</h2>
//       <a href={link}>{link}</a>
//       <p>{body}</p>
//     </div>
//     </Link>
//   )
// }

// export default Card










// import React from 'react'
// import '../style/Card.css'
// const Card = () => {
//   return (
//     <div className='card'>
//         <h2>card title</h2>
//         <a href="/">card anker tage </a>
//         <p>This is card body</p>
//     </div>
//   )
// }

// export default Card