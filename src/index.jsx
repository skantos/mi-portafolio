import React from "react";
import Navbar from "./navbar";
import Habilidades from "./section/habilidades"
import Contacto from "./section/contacto"

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importa los íconos

import "./styles/index.css";
import "./styles/habilidades.css";

function Index() {
    return (
        <div className="app">
            <Navbar />

            <section className="content_body" id="home">
                <div className="presentation">
                    <h1 className="presentation-title">Hola, soy Samuel Gajardo</h1>
                    <p className="presentation-description">
                        Soy un ingeniero informático apasionado por el desarrollo de aplicaciones,
                        gestión de bases de datos y desarrollo web. Aquí puedes explorar algunos de
                        mis proyectos.
                    </p>

                    <div className="social-links">
                        <ul className="example-2">
                            <li className="icon-content">
                                <a href="https://github.com/skantos" target="_blank" rel="noopener noreferrer" >
                                    <FaGithub className='social-icon' size={30} />
                                </a>
                                <div className="tooltip">Github</div>
                            </li>

                            <li className="icon-content">
                                <a href="https://www.linkedin.com/in/samuel-gajardos/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='social-icon' size={30} />
                                </a>
                                <div className="tooltip">Linkedin</div>
                            </li>
                            <li className="icon-content">
                                <a href="https://wa.me/56997731366" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className='social-icon' size={30} />
                                </a>
                                <div className="tooltip">WhatsApp</div>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>

            <div className="cortina_degrade">
            </div> 

            <section className="habilidades" id="habilidades">
                <Habilidades />
            </section>

            <section className="contact" id="contact">
                <Contacto />
            </section>
            
        </div>
    );
}

export default Index;
