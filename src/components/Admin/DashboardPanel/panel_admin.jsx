import React from 'react';
import { AuthService } from '../../../services/api';
import './panel_admin.css';

function Panel_Admin() {
    const user = AuthService.getUser();

    return (
        <div className="dashboard-container admin-dashboard">
            <header className="dashboard-header">
                <div className="header-content">
                    <h1>Panel de Administración</h1>
                    <div className="user-info">
                        <span>Bienvenido, <strong>{user?.nombre_usuarios}</strong></span>
                        <span className="user-role admin-role">Administrador</span>
                    </div>
                </div>
            </header>

            <div className="dashboard-content">
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Usuarios Totales</h3>
                        <p className="stat-number">1,248</p>
                        <div className="stat-trend up">+12%</div>
                    </div>
                    <div className="stat-card">
                        <h3>Pedidos Hoy</h3>
                        <p className="stat-number">56</p>
                        <div className="stat-trend up">+5%</div>
                    </div>
                    <div className="stat-card">
                        <h3>Ingresos</h3>
                        <p className="stat-number">$12,480</p>
                        <div className="stat-trend down">-2%</div>
                    </div>
                </div>

                <div className="actions-grid">
                    <button className="action-card admin-action">
                        <div className="action-icon">👥</div>
                        <h3>Gestión de Usuarios</h3>
                        <p>Administrar usuarios y permisos</p>
                    </button>
                    
                    <button className="action-card admin-action">
                        <div className="action-icon">📊</div>
                        <h3>Reportes Avanzados</h3>
                        <p>Generar reportes detallados</p>
                    </button>
                    
                    <button className="action-card admin-action">
                        <div className="action-icon">⚙️</div>
                        <h3>Configuración</h3>
                        <p>Ajustes del sistema</p>
                    </button>
                    
                    <button className="action-card admin-action">
                        <div className="action-icon">🔐</div>
                        <h3>Permisos</h3>
                        <p>Gestionar roles y acceso</p>
                    </button>
                </div>
            </div>

            <footer className="dashboard-footer">
                <button onClick={AuthService.logout} className="logout-button">
                    🚪 Cerrar Sesión
                </button>
            </footer>
        </div>
    );
}

export default Panel_Admin;