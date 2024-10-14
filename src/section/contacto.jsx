import "../styles/contacto.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
const form = useRef(); // Referencia al formulario
const [isSending, setIsSending] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_p2gpwxf', 'template_84pv9jl', form.current, {
    publicKey: 'leWBvDwj56jFP2b_I',
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        form.current.reset();
    })
    .catch((err) => {
        console.error('FAILED...', err);
        setError('Error al enviar el mensaje. Inténtalo de nuevo.');
    })
    .finally(() => {
        setIsSending(false);
    });
};

return (
    <div>
        <div className="presentation_habilidades">
            <h1 className="habilidades_title">Contacto </h1>
        </div>    
    <form className="formulario" ref={form} onSubmit={handleSubmit}>
        <p id="heading">Contacta directamente conmigo</p>

        <div className="field">
            <label>Nombre:</label>
            <input
                className="input-field "
                type="text"
                name="user_name" 
                required
            />
        </div>

        <div className="field">
            <label>Correo:</label>
            <input
                className="input-field "
                type="email"
                name="user_email" 
                required
            />
        </div>

        <div className="field_msj">
            <label className="label_msj ">Mensaje:</label>
            <textarea
                className="input_msj"
                name="message" // Asegúrate de que el nombre coincida con tu plantilla
                required
            />
        </div>

        {success && <p>Mensaje enviado con éxito!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" disabled={isSending} className="enviar">
            {isSending ? 'Enviando...' : 'Enviar'}
        </button>
    </form>

    </div>
);
};

export default ContactForm;
