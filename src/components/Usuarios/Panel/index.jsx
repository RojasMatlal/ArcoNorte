import React, { useState, useRef, useEffect } from 'react';
import './panel.css';

const Panel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    console.log(`Navegando a: ${section}`);
    // lógica de navegación
    switch(section) {
      case 'transitos':
        // Navegar a página de tránsitos
        window.location.href = '/transitos';
        break;
      case 'transitos-aux':
        // Navegar a página de tránsitos aux
        window.location.href = '/transitos-aux';
        break;
      case 'ocr':
        // Navegar a página OCR
        window.location.href = '/ocr';
        break;
      case 'perfil':
        // Navegar a perfil
        window.location.href = '/perfil';
        break;
      case 'historial':
        // Navegar a historial
        window.location.href = '/historial-busquedas';
        break;
      case 'logout':
        // Lógica de cierre de sesión
        console.log('Cerrando sesión...');
        break;
      default:
        break;
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="navigation-container">
      /* Header principal */
      <header className="main-header">
        <div className="header-content">
          /* Sección de navegación principal */
          <div className="nav-section">
            <button 
              className="nav-item main-title"
              onClick={() => handleNavigation('transitos')}
            >
              Transitos
            </button>
            <button 
              className="nav-item subtitle"
              onClick={() => handleNavigation('transitos-aux')}
            >
              Transitos-Aux
            </button>
          </div>

          /* Sección de características */
          <div className="features-section">
            <button 
              className="feature-item"
              onClick={() => handleNavigation('ocr')}
            >
              <span className="feature-icon">📷</span>
              <span className="feature-text">OCR</span>
            </button>
            
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Hinted search text"
                className="search-input"
              />
              <button className="search-button">🔍</button>
            </div>
          </div>

          /* Menú de usuario */
          <div className="user-section" ref={menuRef}>
            <button 
              className="user-button"
              onClick={toggleMenu}
            >
              <div className="user-avatar">
                <span className="avatar-icon">👤</span>
              </div>
            </button>

            /* Menú desplegable */
            {isMenuOpen && (
              <div className="dropdown-menu">
                <button 
                  className="menu-item"
                  onClick={() => handleNavigation('perfil')}
                >
                  <span className="menu-icon">👤</span>
                  <span>Perfil</span>
                </button>
                
                <button 
                  className="menu-item"
                  onClick={() => handleNavigation('historial')}
                >
                  <span className="menu-icon">📋</span>
                  <span>Historial de Búsquedas</span>
                </button>
                
                <div className="menu-divider"></div>
                
                <button 
                  className="menu-item logout"
                  onClick={() => handleNavigation('logout')}
                >
                  <span className="menu-icon">🚪</span>
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Panel;