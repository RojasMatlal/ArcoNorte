import React, { useState } from 'react';
import './session.css';

const Session = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Base de datos de usuarios
  const usersDatabase = [
    { username: 'admin', password: 'admin123' },
    { username: 'usuario', password: 'password123' },
    { username: 'test', password: 'test123' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular tiempo de espera de una API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validaciones
    if (!username.trim() || !password.trim()) {
      alert('Por favor, complete todos los campos');
      setIsLoading(false);
      return;
    }

    // Buscar usuario en la base de datos
    const user = usersDatabase.find(u => u.username === username);

    if (!user) {
      alert('Usuario no encontrado');
      setIsLoading(false);
      return;
    }

    if (user.password !== password) {
      alert('Contraseña incorrecta');
      setIsLoading(false);
      return;
    }

    // Si llegamos aquí, las credenciales son correctas
    alert('¡Inicio de sesión exitoso!');
    
    // Aquí podrías redirigir al usuario o guardar el estado de autenticación
    console.log('Usuario autenticado:', username);
    
    setIsLoading(false);
    
    // Limpiar formulario después del login exitoso
    setUsername('');
    setPassword('');
  };

  return (
    <div className="session-container">
      <form className="session-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
            disabled={isLoading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            disabled={isLoading}
          />
        </div>
        
        <button 
          type="submit" 
          className={`session-button ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </button>
        
        <div className="forgot-password">
          <a href="#forgot">¿Olvidaste tu contraseña?</a>
        </div>

      </form>
    </div>
  );
};

export default Session;