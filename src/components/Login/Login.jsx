import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthProvider";
import { useState } from "react";
import "./Login.css"
export const Login = () => {
    const [userForm, setUserForm] = useState({
        name: "",
        password: ""
    });
    const { user, login } = useAuthContext();

    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" />
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password)
        if (success) {
            navigate("/admin/alta-productos");
        }
        else {
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: "" });
        }
    };

    return (
        <>
            <h2>Panel administrador</h2>
            <h3>Login</h3>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Iniciar sesion</h2>
                <div className="form-field">
                    <label className="form-label">Usuario</label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={userForm.name}
                        onChange={handleChange}
                        placeholder="Ingrese su usuario"
                    />
                </div>
                <div className="form-field">
                    <label className="form-label">Contraseña</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={userForm.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <button className="form-submit" type="submit">Iniciar sesion</button>
            </form>
        </>
    );
};