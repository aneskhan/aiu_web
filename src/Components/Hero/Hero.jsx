import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
import {Link} from 'react-scroll'

const Hero = () => {
    return (
        <div id="hero" className="hero container">
            <div className="hero-text">
                <h1>Astana International University</h1>
                <p>Международный университет Астаны – современный глобальный университет, генерирующий и
                    распространяющие знания, исследования и инновации для Евразийского пространства, входящий в топ 20
                    университетов Евразии</p>
                <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Узнать больше <img src={dark_arrow} alt=""/></Link>
            </div>
        </div>
    )
}
export default Hero
