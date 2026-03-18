import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h1>AGENDA<span>BOT</span></h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Conheça o Chatbot</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#contato">Contato</a></li>
            {/* Link atualizado para a plataforma externa */}
            <li>
              <a 
                href="https://agendabot-web.vercel.app/" 
                className="client-area"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Área do Cliente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;