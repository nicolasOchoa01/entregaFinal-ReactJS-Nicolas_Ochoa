import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useState } from "react";
import './Login.css';

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: ""});
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if(user){
        return <Navigate to="/admin/alta-productos" replace />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({...userForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userForm.name, userForm.password);
        if(success){
            navigate("/admin/alta-productos");
        } else{
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: ""});
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Iniciar sesion</h2>
                <div>
                    <label htmlFor="name">Usuario</label>
                    <input 
                        id="name"
                        type="text" 
                        name="name" 
                        value={userForm.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        value={userForm.password} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>      
    );
};