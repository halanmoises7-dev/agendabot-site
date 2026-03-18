import React from 'react';
import './styles.css';
// Adicionamos a importação do Link abaixo:
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Agenda<span>Bot</span></h2>
            <p>Sua agenda inteligente no WhatsApp, funcionando 24h por dia para o seu negócio.</p>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              {/* Mantemos href para âncoras na mesma página (Home) */}
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#recursos">Recursos</a></li>
              {/* Agora o Link funcionará corretamente */}
              <li><Link to="/politica">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>suporte@agendabot.com.br</p>
            <p>Rio de Janeiro, RJ</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Halan Moisés Mídia & Web. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;