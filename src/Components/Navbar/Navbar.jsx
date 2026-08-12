import {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo_logic.png'
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenu(prev => !prev);
    const closeMenu = () => setMobileMenu(false);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Логотип Logic" className="logo"/>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMenu}>Главная</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Программы</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={closeMenu}>О нас</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Кампус</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={closeMenu}>Отзывы</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={closeMenu}>Обратная связь</Link></li>
            </ul>
            <img src={menu_icon} alt="Меню" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    )
}
export default Navbar
