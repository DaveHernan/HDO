import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../Contact/context/context';


import "../Contact/_contact.scss"

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'So how can I help?'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'hernankhristiandave@yahoo.com'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        
      </Container>
    </section>
  );
};

export default Contact;
