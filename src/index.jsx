import React from "react";
import Navbar from "./navbar";
import Habilidades from "./section/habilidades"
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
                </div>
            </section>
            <div className="cortina_degrade">
            </div> 

            <section className="habilidades" id="habilidades">
                <Habilidades />
            </section>
            
        </div>
    );
}

export default Index;
