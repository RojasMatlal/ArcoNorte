import React from 'react';
import { AuthService } from '../../../services/api';
import './panel_oper.css';

function Panel_Oper() {
    const user = AuthService.getUser();

    return (
        <div className="dashboard-container operador-dashboard">
            <header className="dashboard-header">
                <div className="header-content">
                    <h1>Panel de Operador</h1>
                    <div className="user-info">
                        <span>Bienvenido, <strong>{user?.nombre_usuarios}</strong></span>
                        <span className="user-role operador-role">Operador</span>
                    </div>
                </div>
            </header>

            <div className="dashboard-content">
                <div className="quick-actions">
                    <h2>Acciones Rápidas</h2>
                    <div className="actions-grid">
                        <button className="action-card operador-action">
                            <div className="action-icon">📦</div>
                            <h3>Ver Pedidos</h3>
                            <p>Gestionar pedidos activos</p>
                        </button>
                        
                        <button className="action-card operador-action">
                            <div className="action-icon">🔄</div>
                            <h3>Actualizar Estado</h3>
                            <p>Cambiar estado de pedidos</p>
                        </button>
                        
                        <button className="action-card operador-action">
                            <div className="action-icon">👥</div>
                            <h3>Clientes</h3>
                            <p>Información de clientes</p>
                        </button>
                        
                        <button className="action-card operador-action">
                            <div className="action-icon">📞</div>
                            <h3>Soporte</h3>
                            <p>Contactar con soporte</p>
                        </button>
                    </div>
                </div>

                <div className="recent-activity">
                    <h2>Actividad Reciente</h2>
                    <div className="activity-list">
                        <div className="activity-item">
                            <span className="activity-time">Hace 5 min</span>
                            <span className="activity-desc">Pedido #1234 completado</span>
                        </div>
                        <div className="activity-item">
                            <span className="activity-time">Hace 15 min</span>
                            <span className="activity-desc">Nuevo pedido #1235 recibido</span>
                        </div>
                    </div>
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

export default Panel_Oper;