import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-img" onClick={() => {
                    setPlayState(true)
                }}/>
            </div>
            <div className="about-right">
                <h3>О университете</h3>
                <h2>Миссия и видение Международного университета Астана</h2>
                <p>Подготовка высококвалифицированных кадров с академической степенью бакалавра, магистра и ученой
                    степенью доктора философии со знанием иностранных языков</p>
                <p>Обеспечение соответствия навыков выпускников требованиям экономики</p>
                <p>Проведение фундаментальных и прикладных исследований в современных отраслях науки, образования и
                    экономики</p>
            </div>
        </div>
    )
}
export default About
