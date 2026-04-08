import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Política de Privacidade e Tratamento de Dados</h1>
        <p>Última atualização: 08 de Abril de 2026</p>
      </header>
      
      <section className="privacy-content text-left">
        <h2>1. OBJETO E CONSENTIMENTO</h2>
        <p>
          A presente Política de Privacidade regula o tratamento de dados pessoais realizado pela plataforma <strong>MarkeiBot</strong>, operada por <strong>Halan Moisés Mídia & Web</strong>. Ao utilizar nossos serviços, o Usuário (Lojista/Parceiro) e seus respectivos Clientes Finais manifestam concordância integral com os termos aqui dispostos, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).
        </p>

        <h2>2. COLETA DE DADOS E FINALIDADE</h2>
        <p>
          O <strong>MarkeiBot</strong> realiza a coleta de dados estritamente necessários para a viabilidade do serviço de agendamento automatizado:
        </p>
        <ul>
          <li><strong>Dados do Usuário (Lojista):</strong> Nome, e-mail e número de WhatsApp, coletados para fins de gestão contratual, suporte técnico e comunicações administrativas.</li>
          <li><strong>Dados de Terceiros (Clientes Finais):</strong> Nome e número de telefone/WhatsApp, coletados exclusivamente para a execução do agendamento, envio de notificações de confirmação e lembretes automáticos.</li>
        </ul>

        <h2>3. OPERAÇÃO E RESPONSABILIDADE (CLÁUSULA DE BARREIRA)</h2>
        <p>
          O <strong>MarkeiBot</strong> atua tecnicamente como <strong>Operador de Dados</strong>. O Usuário (Lojista) detém a figura de <strong>Controlador de Dados</strong>, sendo o único responsável pela base legal que justifica o contato com seus clientes.
        </p>
        <p>
          <strong>Isenção de Responsabilidade:</strong> Não nos responsabilizamos pelo uso indevido dos dados por parte do Lojista, incluindo, mas não se limitando a, prática de spam, marketing não solicitado ou compartilhamento de dados com terceiros sem consentimento.
        </p>

        <h2>4. SEGURANÇA E ARMAZENAMENTO</h2>
        <p>
          Adotamos medidas técnicas de segurança para proteger as informações processadas. Os dados de agendamento são processados em tempo real para disparos de API e, uma vez concluído o ciclo do serviço, permanecem sob gestão exclusiva do Controlador (Lojista) em seu painel administrativo.
        </p>

        <h2>5. DIREITOS DO TITULAR</h2>
        <p>
          Em observância à LGPD, o titular dos dados poderá, a qualquer tempo, solicitar o acesso, retificação, anonimização ou exclusão de seus dados pessoais. Tais solicitações devem ser encaminhadas ao nosso canal de suporte oficial.
        </p>

        <h2>6. FORO</h2>
        <p>
          Para dirimir quaisquer controvérsias oriundas deste instrumento, as partes elegem o foro da Comarca do Rio de Janeiro - RJ, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
        </p>
        
        <div style={{ marginTop: '40px' }}>
          <Link to="/" className="back-link">Voltar para o Início</Link>
        </div>
      </section>

      <footer style={{ marginTop: '60px', textAlign: 'center', opacity: '0.5' }}>
          <p style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Halan Moisés Mídia & Web © 2026 | CNPJ SOB DEMANDA
          </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;