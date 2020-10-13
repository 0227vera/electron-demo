import React from 'react'
import { Link } from "react-router-dom";

export default function Card(props) {
  const {desc,
      title,
      img,
      href
    } = props
  return (
    <Link to={href}>
      <div className="card">
        <img src={img} />
        <div className="title">
          <span>
            {title}
          </span>
        </div>
        <div className="descInfo">
          <span className="desc">{desc}</span>
        </div>
      </div>
    </Link>
  )
}
