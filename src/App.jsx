import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/login';
import Panel_Admin from './components/Admin/DashboardPanel/panel_admin';
import Panel_Oper from './components/Usuarios/DashboardPanel/panel_oper';
import { AuthService } from './services/api';
import './index.css';

const ProtectedRoute = ({ children, requiredRole }) => {
    const user = AuthService.getUser();
    
    if (!AuthService.isLoggedIn()) {
        return <Navigate to="/login" />;
    }

    if (user.estatus_usuarios === 0) {
        AuthService.logout();
        return <Navigate to="/login" />;
    }

    if (requiredRole && user.nombre_rol !== requiredRole) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                
                <Route path="/panel_admin" element={
                    <ProtectedRoute requiredRole="administrador">
                        <Panel_Admin />
                    </ProtectedRoute>
                } />
                
                <Route path="/panel_oper" element={
                    <ProtectedRoute requiredRole="operador">
                        <Panel_Oper />
                    </ProtectedRoute>
                } />
                
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
