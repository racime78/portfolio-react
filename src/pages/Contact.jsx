import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eyvfm16',
        'template_movs4gb',
        form.current,
        'Vr7KkPyug-QY77ah6'
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Me Contacter</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>📞 Mes coordonnées</h3>
          <p><strong>Email :</strong> <a href="mailto:hracime@gmail.com">hracime@gmail.com</a></p>
          <p><strong>Téléphone :</strong> +33 6 52 58 60 77</p>
          <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/racime-houhou/" target="_blank" rel="noopener noreferrer">Racime Houhou</a></p>
        </div>

        <div className="contact-form-card">
          <h3>📨 Envoyer un message</h3>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="Votre nom" required />
            <input type="email" name="from_email" placeholder="Votre email" required />
            <textarea name="message" placeholder="Votre message" required rows={5} />
            <button type="submit">Envoyer</button>
          </form>

          {sent && <p className="success-message">✅ Message envoyé avec succès !</p>}
          {error && <p className="error-message">❌ Une erreur est survenue. Réessayez.</p>}
        </div>
      </div>
    </div>
  );
}
