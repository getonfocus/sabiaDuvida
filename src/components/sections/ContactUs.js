import React, { useState } from "react";
import { Section, Container } from '@components/global';
import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formSent, setFormSent] = useState(false);
  function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_402gp4t', 'template_7gre3hg', e.target, 'user_OcxG2ytQSMoENBwu3xDvn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setFormSent(true)
        e.target.reset()
  }
  return(
      <Section id="faq">
        <Container>
          <h1 style={{ marginBottom: 40 }}>Entre em contato</h1>
          {formSent ? (
            <div className="loren"></div>) 
            : 
            <form id="contact" className="contact-form" onSubmit={sendEmail}>
              <div className="form__element">
                <label>Nome</label>
                <input type="text" name="user_name" className="css-input" />
              </div>

              <div className="form__element">
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>

              <div className="form__element">
                <label>Mensagem</label>
                <textarea name="message" />
              </div>

              <div className="form__element">
                <input type="submit" value="Send" />
              </div>       
            </form>
          }
          
          {formSent ? (<div className="loren"><p>TRUE Sua mensagem foi enviada com sucesso.</p></div>) : <div className="loren"></div>}
        
        </Container>
      </Section>
  )
}

export default ContactUs;
