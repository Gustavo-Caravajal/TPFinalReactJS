import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css"
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
export const Nav = () => {
    const { getTotalItems } = useCartContext();
    const [openMenu, setOpenMenu] = useState(false);
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
    return (
        <>  <div className="nav-container">
            <div className="hamburger-container">
                <button className="hamburger" onClick={toggleMenu}>☰</button>
            </div>

            <div className={`category-container ${openMenu ? "open" : ""}`}>
                <ul className="nav-items">
                    <li>
                        <Link className="item" to="/category/samsung" onClick={toggleMenu}>Samsung</Link>
                    </li>
                    <li>
                        <Link className="item" to="/category/apple" onClick={toggleMenu}>Apple</Link>
                    </li>
                    <li>
                        <Link className="item" to="/category/xiaomi" onClick={toggleMenu}>Xiaomi</Link>
                    </li>
                    <li>
                        <Link className="item" to="/category/realme" onClick={toggleMenu}>Realme</Link>
                    </li>
                    <li>
                        <Link className="item" to="/category/motorola" onClick={toggleMenu}>Motorola</Link>
                    </li>
                </ul>
            </div>
            <nav className={openMenu ? "open" : ""}>
                <ul className="nav-items">
                    <li>
                        <Link className="item" to={`/`} onClick={toggleMenu}>Inicio</Link>
                    </li>
                    <li className="item-carrito" onClick={toggleMenu}>
                        <Link className="item" to={"/carrito"}><FaShoppingCart size={24} /></Link>
                        {getTotalItems() > 0 && (
                            <span className="total-items">{getTotalItems()}</span>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
}