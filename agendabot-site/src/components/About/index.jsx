import './styles.css';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Aqui depois você coloca uma imagem do seu bot ou um mockup */}
          <div className="image-placeholder">
            <span>Mockup do Bot</span>
          </div>
        </div>
        
        <div className="about-text">
          <span className="subtitle">Conheça o Chatbot</span>
          <h2>Atendimento inteligente que <span>trabalha por você</span></h2>
          <p>
            O AgendarBot não é apenas um chat automático. Ele entende a necessidade do seu cliente, 
            consulta sua disponibilidade em tempo real e finaliza o agendamento sem que você 
            precise parar o que está fazendo.
          </p>
          <ul className="about-list">
            <li>✅ Integração direta com WhatsApp</li>
            <li>✅ Sem necessidade de instalação para o cliente</li>
            <li>✅ Painel de controle simples e intuitivo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;