import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import CardsSection from './components/Cards';
import Contact from './components/Contact/index';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/index';
import './index.css';

// Componente para a Página Principal (Landing Page) - LIMPO
const Home = () => (
  <>
    <Header />
    <Main />         {/* Esta é a sua seção "Início" */}
    <About />        {/* Esta é a sua seção "Sobre" */}
    <CardsSection />  {/* Esta é a sua seção "Recursos" */}
    <Contact />
    
    {/* Removi as <section> manuais que estavam duplicando o conteúdo */}
  </>
);

// Componente para a página de política
const PoliticaPrivacidade = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '80vh' }}>
    <h1>Política de Privacidade</h1>
    <p style={{ margin: '20px 0', color: '#666' }}>Conteúdo da sua política aqui...</p>
    <a href="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>Voltar para Início</a>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota principal */}
          <Route path="/" element={<Home />} />
          
          {/* Rota para a página de política */}
          <Route path="/politica" element={<PrivacyPolicy />} />
        </Routes>

        {/* O Footer aparece em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;