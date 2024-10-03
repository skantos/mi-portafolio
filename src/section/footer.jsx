import React from "react";
import "../styles/footer.css";


function Footer() {
    return (
        <div>
            <div class="footer-container">
                <div class="footer-left">
                    <h3>Samuel Gajardo</h3>
                    <p>Desarrollador, ingeniero informática, bases de datos y aplicaciones web. Sígueme para ver mis proyectos y contribuciones.</p>
                </div>

                <div class="footer-right">
                    <ul class="social-links">
                        <li>
                            <a href="https://github.com/skantos" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/tu-número" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 Samuel Gajardo.</p>
            </div>
        </div>
    );
}

export default Footer;
