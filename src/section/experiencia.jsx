import React from "react";
import "../styles/experiencia.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGithub, FaDocker, FaCode } from "react-icons/fa";

function experiencia() {
    return (
    <div>
        <div className="presentation_habilidades">
            <h1 className="habilidades_title">Experiencia</h1>
        </div>

        <div className="bento-container">
            <div className="bento-item large">
                <div className="bento-background"></div>
                <div className="bento-content">
                    <h2>Estudios</h2>
                    <br />
                    <p>4 años de formación profesional como ingeniero informático <br />
                    en el instituto Inacap Maipú.</p>
                    <br />
                    <h4>2021-2024</h4>
                </div>
            </div>

            <div className="bento-item">
                <a href="https://ppokedex-api-app.netlify.app/">
                    <div className="bento-background"></div>
                    <div className="bento-content">
                        <h3>Pokédex</h3>
                        <br />
                        <p>pokedex realizada con <br /> la api pokemon</p>
                        <FaJs className="skill js" />
                        <FaHtml5 className="skill html" />
                        <FaCss3Alt className="skill css" />
                    </div>
                </a>
            </div>

            <div className="bento-item">
                <div className="bento-background"></div>
                <div className="bento-content">
                    <h3>Elemento 2</h3>
                    <p>Otro contenido corto.</p>
                </div>
            </div>

            <div className="bento-item">
                <div className="bento-background"></div>
                <div className="bento-content">
                    <h3>Elemento 3</h3>
                    <p>Más contenido aquí.</p>
                </div>
            </div>

            <div className="bento-item wide">
                <div className="bento-background"></div>
                <div className="bento-content">
                    <h3>Elemento Ancho</h3>
                    <p>Este elemento ocupa dos columnas.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default experiencia;
