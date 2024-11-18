import React, {useState} from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
import {Navigate} from 'react-router-dom'

const Hero = () => {
    const [goToContact, setGoToContact] = useState(false);
    if (goToContact) {
        return <Navigate to="/Explore" />
    }

    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>Astana International University</h1>
                <p>Международный университет Астаны – современный глобальный университет, генерирующий и
                    распространяющий знания, исследования и инновации для Евразийского пространства, входящий в топ 20
                    университетов Евразии</p>
                {/*<button className="btn" onClick={() => {setGoToContact(true)}}>Узнать больше <img src={dark_arrow}/></button>*/}
            </div>
        </div>
    )
}
export default Hero
