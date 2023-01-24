import React from 'react'
import BannerImage from "../assets/1beef.jpg"

const About =()=>{
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a "special sauce," often a variation of Thousand Island dressing; and are frequently placed on sesame seed .</p>
            </div>

        </div>
    )
}

export default About