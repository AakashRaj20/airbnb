import React from "react";
import starImg from "../images/Star.png"

export default function Card(props) {

  const coverImg = require(`../images/${props.coverImg}`)
  

  let badgeText
  if(props.openSpot === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "online"){
    badgeText = "ONLINE"
  }

    return (
    
        <div className="card">

            {
                badgeText && <div className="card--badge">{badgeText}</div>
            }

            <img src={coverImg} alt="main-img" className="card--image"></img>

            <div className="card--status">
                <img src={starImg} alt="star-img" className="card--star"></img>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}).</span>
                <span className="gray">{props.location}</span>
            </div>

            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold"> From ${props.price}</span> / person</p>

        </div>
    )
}