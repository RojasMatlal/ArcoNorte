import React, { useState } from 'react';
import { AuthService } from '../../services/api';
import './login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await AuthService.login(formData.email, formData.password);
            
            if (result.success) {
                // Guardar usuario en localStorage
                localStorage.setItem('user', JSON.stringify(result.user));
                
                // Mostra un mensaje de bienvenida
                showMessage('info', `Bienvenido al panel de administración <br>${result.user.nombre_usuarios}`, 'Estas en el dashboard!');
                
                // Redirigir según el rol
                redirectByRole(result.user.nombre_rol);
                
            } else {
                setError(result.message || 'Usuario o contraseña incorrectos');
                showMessage('error', 'Usuario o contraseña incorrectos', 'Error!');
            }
        } catch (error) {
            setError('Error al conectar con el servidor');
            showMessage('error', 'Error al conectar con el servidor', 'Error!');
        } finally {
            setLoading(false);
        }
    };

    const redirectByRole = (rol) => {
        switch(rol) {
            case 'administrador':
                window.location.href = '/admin-dashboard';
                break;
            case 'operador':
                window.location.href = '/operador-dashboard';
                break;
            case '745': // Código del rol del Administrador
                window.location.href = '/admin-panel';
                break;
            case '125': // Código del rol del Operador
                window.location.href = '/operador-panel';
                break;
            default:
                window.location.href = '/dashboard';
        }
    };

    const showMessage = (type, message, title) => {
       
        alert(`${title}: ${message}`);
        
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-hearder">
                <h1 style={{textAlign: 'center'}}>Iniciar Sesión</h1>
                <br>
                </br>
                
                {error && (
                    <div className="alert alert-error">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Usuario:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Login;