import React from 'react';

const Contact = () => {
  return (
    <section id="contato" style={{ 
      padding: '60px 20px', 
      textAlign: 'center', 
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          color: '#0f172a', 
          marginBottom: '20px',
          fontWeight: 'bold' 
        }}>
          Pronto(a) para simplificar sua rotina?
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#4b5563', 
          marginBottom: '40px',
          lineHeight: '1.6' 
        }}>
          Mantenha o controle total da sua agenda com mais facilidade. O <strong>AgendaBot</strong> funciona como um assistente que organiza seus horários e <strong>deixa tudo pronto para você finalizar o atendimento</strong> e focar no fechamento de novos clientes.
        </p>

        <a 
          href="https://wa.me/SEUNUMEROAQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            padding: '18px 40px', 
            backgroundColor: '#25d366', // Cor clássica do WhatsApp
            color: '#fff', 
            textDecoration: 'none',
            borderRadius: '50px', 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            boxShadow: '0 10px 15px -3px rgba(37, 211, 102, 0.3)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Falar com um Consultor no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;