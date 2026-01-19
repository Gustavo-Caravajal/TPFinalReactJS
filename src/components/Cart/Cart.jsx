import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css"
export const Cart = () => {
    const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

    return (
        <section className="product-section">
            <h2 className="title">Carrito de compras</h2>
            <div className="product-container">{
                cart.length ? (
                    cart.map((prod) => (
                        <Item key={prod.id} {...prod}>
                            <span className="quantity">Cantidad: {prod.quantity}</span>
                            <button className="boton-negocio" onClick={() => deleteItem(prod.id)}>
                                Eliminar
                            </button>
                        </Item>
                    ))
                ) : (
                    <p className="empty-cart">Tu carrito esta vacio</p>
                )}
            </div>

            <div>
                {
                    cart.length ? (
                        <div className="button-container">
                            <div>
                                <p className="total-price">Total a pagar: ${total()}</p>
                            </div>
                            <div className="cart-button-container">
                                <button className="boton-negocio" onClick={checkout}>Finalizar compra</button>
                                <button className="boton-negocio" onClick={clearCart}>Vaciar carrito</button>
                            </div>
                        </div>
                    ) : (
                        <Link className="back-home" to={"/"}>Volver al inicio</Link>
                    )}
            </div>

        </section>
    );
};