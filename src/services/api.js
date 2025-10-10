const API_URL = 'http://localhost/backend/api';

export class AuthService {
    
    static async login(email, password) {
        try {
            
            const hashedPassword = await this.hashPassword(password);
            
            const response = await fetch(`${API_URL}/login.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: hashedPassword
                })
            });

            if (!response.ok) {
                throw new Error('Error en la petición');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en login:', error);
            throw error;
        }
    }

    static async hashPassword(password) {
        // Usar crypto-js para hashear (pd: instala: npm install crypto-js)
        const CryptoJS = await import('crypto-js');
        return CryptoJS.SHA256(password).toString();
    }

    static logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    static getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    static isLoggedIn() {
        return localStorage.getItem('user') !== null;
    }
}