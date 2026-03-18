import './styles.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h1>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                    AGENDA<span>BOT</span>
                </a>
            </h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Conheça o Chatbot</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#contato">Contato</a></li>
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