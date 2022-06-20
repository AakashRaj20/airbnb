import React from "react"; 
import img from "../images/hero-img.png"

export default function Hero() {

    

    return (
        <section className="hero">

            <img src={img} alt="hero-img" className="hero--icon"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

        </section>
    )
}