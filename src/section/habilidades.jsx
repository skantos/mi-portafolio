import React from "react";
import "../styles/habilidades.css";

// Iconos (puedes importar o usar cualquier biblioteca de iconos)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGithub, FaDocker, FaCode } from "react-icons/fa";
import { SiExpo, SiTauri, SiDjango, SiFirebase, SiMongodb, SiPowerbi } from "react-icons/si";

function Habilidades() {
    return (
        <div>
            <div className="presentation_habilidades">
                <h1 className="habilidades_title">Manejo de Software</h1>
            </div>

            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <h3>Front-End</h3>
                    <div className="skills">
                        <div className="skill-item">
                            <FaHtml5 className="skill-icon html" />
                            <span>HTML5</span>
                        </div>
                        <div className="skill-item">
                            <FaCss3Alt className="skill-icon css" />
                            <span>CSS3</span>
                        </div>
                        <div className="skill-item">
                            <FaJs className="skill-icon js" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-item">
                            <FaReact className="skill-icon react" />
                            <span>React</span>
                        </div>
                        <div className="skill-item">
                            <SiExpo className="skill-icon expo" />
                            <span>Expo</span>
                        </div>
                        <div className="skill-item">
                            <SiTauri className="skill-icon tauri" />
                            <span>Tauri</span>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <h3>Back-End</h3>
                    <div className="skills">
                        <div className="skill-item">
                            <FaPython className="skill-icon python" />
                            <span>Python</span>
                        </div>
                        <div className="skill-item">
                            <SiDjango className="skill-icon django" />
                            <span>Django</span>
                        </div>
                        <div className="skill-item">
                            <FaDatabase className="skill-icon sql" />
                            <span>SQL</span>
                        </div>
                        <div className="skill-item">
                            <SiFirebase className="skill-icon firebase" />
                            <span>Firebase</span>
                        </div>
                        <div className="skill-item">
                            <SiMongodb className="skill-icon mongodb" />
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item">
                    <h3>Herramientas de Programación</h3>
                    <div className="skills">
                        <div className="skill-item">
                            <FaCode className="skill-icon vscode" />
                            <span>Visual Studio Code</span>
                        </div>
                        <div className="skill-item">
                            <FaGithub className="skill-icon github" />
                            <span>GitHub</span>
                        </div>
                        <div className="skill-item">
                            <FaDocker className="skill-icon docker" />
                            <span>Docker</span>
                        </div>
                    </div>
                </div> 

                <div className="portfolio-item">
                    <h3>Herramientas de Visualización</h3>
                    <div className="skills">
                        <div className="skill-item">
                            <SiPowerbi className="skill-icon powerbi" />
                            <span>Power BI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
