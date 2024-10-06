import React, { useState, useEffect } from 'react';
import { FaHome, FaUserCog, FaClipboardList, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'; // Importar iconos
import './styles/navbar.css';
import { Link } from "react-scroll"; // Importar Link de react-scroll

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <Link to="home" className="text-white font-semibold text-lg" smooth={true} duration={500} onClick={toggleMenu}>
                        Samuel Gajardo
                    </Link>
                </div>

                <div className="menu-icon" onClick={toggleMenu}> {/* Botón de menú */}
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                <div className={`menu ${isOpen ? 'open' : ''}`}> {/* Menú desplegable */}
                    <div className="nav-icon">
                        <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
                            <samp>Inicio</samp>                        
                        </Link>
                    </div>
                    <div className="nav-icon">
                        <Link to="habilidades" smooth={true} duration={500} onClick={toggleMenu}>
                            <samp>Habilidades</samp>                        
                        </Link>
                    </div>
                    <div className="nav-icon">
                        <Link to="experiencia" smooth={true} duration={500} onClick={toggleMenu}>
                            <samp>Experiencia</samp>
                        </Link>
                    </div>
                </div>
                    <Link to="contact" smooth={true} duration={500} className="btn-contact">
                        <h4>contacto</h4>
                    </Link>
            </div>
        </nav>
    );
}
