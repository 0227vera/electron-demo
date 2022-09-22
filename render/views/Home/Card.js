import React from 'react'
import { Link } from "react-router-dom";

export default function Card(props) {
  const { desc, title, img, href, index } = props
  return (
    <Link to={href}>
      <div className="card">
        <img className='card-bg' src={require(`./assets/b${index}.png`)} />
        <div className="title">
          <span>
            {title}
          </span>
        </div>
        
        <div className="descInfo">
          <img className='card-icon' src={ require(`./assets/${index}.png`) } />
          <span className="desc">{desc}</span>
        </div>
      </div>
    </Link>
  )
}
