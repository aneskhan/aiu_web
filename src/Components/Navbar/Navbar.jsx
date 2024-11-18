import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo_logic.png'
import menu_icon from "../../assets/menu-icon.png"
import { Link, animateScroll as scroll, } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    const [mobileMenu, setMobileMennu] = useState(false);
    const toggleMenu = () => {
        mobileMenu? setMobileMennu(false) : setMobileMennu(true)
    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className="logo"/>
            <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Главная</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Программы</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>О нас</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Кампус</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Отзывы</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Обратная связь</Link></li>
            </ul>
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu }/>
        </nav>
    )
}
export default Navbar
