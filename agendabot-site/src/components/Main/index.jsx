const Main = () => {
  return (
    <section id="inicio" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#f0f4f8' }}>
      <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '20px' }}>
        Transforme seu atendimento com o <span style={{ color: '#2563eb' }}>AgendarBot</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto 30px' }}>
        Sua agenda inteligente no WhatsApp, funcionando 24h por dia para automatizar seus agendamentos e escalar seu negócio.
      </p>
      <button style={{ 
        padding: '15px 35px', 
        backgroundColor: '#2563eb', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '8px', 
        fontSize: '1.1rem', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'
      }}>
        Começar Agora
      </button>
    </section>
  );
};

export default Main;