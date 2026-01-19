import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"
export const ItemList = ({ lista }) => {
    return (
        <>
            {lista.length ? (lista.map((prod) =>
                <Link key={prod.id} to={`/detail/${prod.id}`}>
                    <Item {...prod}/>
                </Link>)
            ) : (
                <p className="no-products">No hay productos</p>
            )}
        </>
    );
};