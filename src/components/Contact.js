import React, { Component } from 'react';
import '../CSS/Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'


   


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_81dlgyi', 'template_shzbxi5', form.current, '-rGcf9Gm1F-rrR9Cy')
        
        e.target.reset()
    };   
    
    return (
        <div className="container contact" id="contact">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="7" placeholder="Your Message" required/>
                <button type="submit">Send Message</button>
            </form>    
        </div>

    );
}


export default Contact;
