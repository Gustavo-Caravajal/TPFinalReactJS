import "./Item.css"

export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <article className="product-card">
            <img className="product-image" src={imageUrl} alt={description} />
            <h3 className="text">{name}</h3>
            <p className="text">Precio: {price}</p>
            <p className="text">Descripcion: {description}</p>
            {children}
        </article>
    );
};