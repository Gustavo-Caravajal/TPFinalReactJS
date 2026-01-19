import { useState } from "react";

export const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${user.name} ingreso su email y contraseña`);
        setUser({
            name: "",
            email: "",
            pass: ""
        });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="name"
                value={user.name}
                placeholder="Ingrese su nombre"
                required
            />
            <input
                onChange={handleChange}
                type="email"
                name="email"
                value={user.email}
                placeholder="Ingrese su email"
                required
            />
            <input
                onChange={handleChange}
                type="password"
                name="pass"
                value={user.pass}
                placeholder="Ingrese su contraseña"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};