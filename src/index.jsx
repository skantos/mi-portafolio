import React, { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./navbar";
import Habilidades from "./section/habilidades";
import Contacto from "./section/contacto";
import Experiencia from "./section/experiencia";
import Footer from "./section/footer";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import "./styles/index.css";
import TagCloud from "TagCloud"; // Asegúrate de que la ruta de importación sea correcta

function Index() {
    
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        // Definir las palabras para el TagCloud
        const words = [
            "Desarrollador",
            "Aplicaciones",
            "Web",
            "Bases de Datos",
            "React",
            "Node.js",
            "JavaScript",
            "CSS",
            "HTML",
            "Firebase",
            "Tauri",
            "Machine Learning"
        ];
        
        // Crear el TagCloud
        TagCloud("#tag-cloud", words, {
            // Opciones del TagCloud
            radius: 120, // Radio en píxeles
            maxSpeed: "normal", // "normal", "fast", "slow"
            initSpeed: "normal", // "normal", "fast", "slow"
            direction: 135, // Dirección de la nube
            keep: true, 
        });
    }, []);

    return (
        <div className="app">
            <Navbar />
            <section className="content_body" id="home">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                resize: true,
                            },
                            modes: {
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#FA653A",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} // Asegúrate que las partículas están en el fondo
                />
                <div className="presentation">
                    <h1 className="presentation-title">Hola, soy Samuel Gajardo</h1>

                    <div className="columns">
                        <div className="text-column">
                            <p className="presentation-description">
                                Soy un ingeniero informático apasionado por el desarrollo de aplicaciones,                               
                                gestión de bases de datos y desarrollo web. Aquí puedes explorar algunos de
                                mis proyectos.
                            </p>

                            <div className="social-links example-2">
                                <div className="icon-content">
                                    <a href="https://github.com/skantos" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <a href="https://www.linkedin.com/in/samuel-gajardos/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaLinkedin size={30} />
                                    </a>
                                </div>
                                <div className="icon-content">
                                    <a href="https://wa.me/56997731366" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaWhatsapp size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="tag-column">
                            <div id="tag-cloud"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cortina_degrade"></div> 
            <section className="habilidades" id="habilidades">
                <Habilidades />
            </section>
            <section className="experiencia" id="experiencia">
                <Experiencia />
            </section>
            <section className="contact" id="contact">
                <Contacto />
            </section>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Index;
