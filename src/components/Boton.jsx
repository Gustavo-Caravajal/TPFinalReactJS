export const Boton = ({ texto, color }) => {
    const estilos = {
        backgroundColor: color,
        color: "white"
    };

    const saludar = () => {
        alert("Bienvenido");        
    };
    return (
        <button onClick={saludar} style={estilos}>{texto}</button>
    );
};