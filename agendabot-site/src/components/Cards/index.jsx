import React from 'react';
import FeatureCard from './FeatureCard';
import './styles.css';

const CardsSection = () => {
  // Aqui você define os dados que vão aparecer nos seus cards
  const cardData = [
    {
      title: "Agendamento Online",
      description: "Seu cliente escolhe o melhor horário diretamente pelo bot, sem complicação.",
      icon: "📅"
    },
    {
      title: "Gestão de Horários",
      description: "Controle total da sua agenda em um só lugar, evitando marcações duplicadas.",
      icon: "⚙️"
    },
    {
      title: "Notificações Automáticas",
      description: "Envie lembretes de confirmação para reduzir as faltas dos seus clientes.",
      icon: "🔔"
    }
  ];

  return (
    <section id="recursos" className="cards-container">
      <div className="content-limit">
        <h2 className="title-section">Recursos do AgendaBot</h2>
        <div className="cards-grid">
          {cardData.map((card, index) => (
            <FeatureCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;