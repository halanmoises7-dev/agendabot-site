import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InstallPage.css';

const InstallPage = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    platform: 'unknown',
    isInApp: false
  });
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  
  // URL dinâmica para o QR Code (pega o endereço atual do site)
  const siteURL = window.location.origin;

  useEffect(() => {
    // Garante que a página comece sempre do topo
    window.scrollTo(0, 0);
    
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(ua);
    const isIos = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isInAppBrowser = /FBAN|FBAV|Instagram|WhatsApp/i.test(ua);

    setDeviceInfo({
      platform: isAndroid ? 'android' : isIos ? 'ios' : 'desktop',
      isInApp: isInAppBrowser
    });

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const triggerInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    } else {
      alert("Para instalar agora, clique nos 3 pontos (⋮) no topo e depois em 'Instalar aplicativo'.");
    }
  };

  return (
    <div className="install-page-container">
      <header className="install-page-header">
        <h1>Instalar MarkeiBot</h1>
        <p>Siga os passos para fixar o app na sua tela inicial.</p>
      </header>

      <main className="install-page-main">
        {deviceInfo.isInApp ? (
          /* AVISO PARA QUEM ESTÁ NO WHATSAPP */
          <div className="install-page-card warning">
            <div className="card-header">⚠️ Saia do WhatsApp</div>
            <p>O instalador não funciona dentro do navegador do WhatsApp.</p>
            <ol className="steps-list">
              <li>Toque nos <strong>três pontinhos (⋮)</strong> no topo da tela.</li>
              <li>Escolha <strong>"Abrir no Chrome"</strong> ou no navegador padrão.</li>
              <li>Depois, clique no botão de instalação que aparecerá aqui.</li>
            </ol>
          </div>
        ) : (
          <>
            {/* ANDROID */}
            {deviceInfo.platform === 'android' && (
              <div className="install-page-card">
                <div className="card-header">🤖 Android</div>
                <button className="install-page-btn" onClick={triggerInstall}>
                  INSTALAR AGORA
                </button>
                <p className="helper-text">
                  Se o botão não funcionar, vá ao menu (⋮) e clique em <strong>"Instalar aplicativo"</strong>.
                </p>
              </div>
            )}

            {/* IPHONE */}
            {deviceInfo.platform === 'ios' && (
              <div className="install-page-card">
                <div className="card-header">🍎 iPhone / iOS</div>
                <ol className="steps-list">
                  <li>Toque no ícone de <strong>Compartilhar</strong> (quadrado com seta).</li>
                  <li>Escolha <strong>"Adicionar à Tela de Início"</strong>.</li>
                  <li>Clique em <strong>"Adicionar"</strong>.</li>
                </ol>
              </div>
            )}

            {/* DESKTOP (MOSTRA QR CODE) */}
            {deviceInfo.platform === 'desktop' && (
              <div className="install-page-card" style={{ textAlign: 'center' }}>
                <div className="card-header">💻 Computador</div>
                <p>Escaneie o QR Code abaixo para instalar o aplicativo no seu celular.</p>
                
                <div style={{ background: '#fff', padding: '15px', display: 'inline-block', borderRadius: '12px', border: '1px solid #eee', margin: '15px 0' }}>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${siteURL}`} 
                    alt="QR Code"
                  />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <p className="helper-text">Ou acesse:</p>
                  <code style={{ background: '#f1f3f4', padding: '5px 10px', borderRadius: '5px', color: '#1a73e8', fontWeight: 'bold' }}>
                    {siteURL.replace('https://', '').replace('http://', '')}
                  </code>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="install-page-footer">
        {/* DESTINO CORRETO: Volta para a Home do Site (Landing Page) */}
        <Link to="/" className="back-link">
          ← Voltar para o Início
        </Link>
        <p className="copyright">MARKEIBOT © 2026</p>
      </footer>
    </div>
  );
};

export default InstallPage;