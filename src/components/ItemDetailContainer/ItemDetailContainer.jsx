import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch("https://693a0b24c8d59937aa09a805.mockapi.io/Products").then((res) => {
            if (!res.ok) {
                throw new Error("La peticion fallo");
            }
            return res.json();
        })
            .then((data) => {
                const found = data.find((prod) => prod.id === id)
                if (found) {
                    setDetail(found);
                } else {
                    throw new Error("No se encontro el producto");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    return (
        <main className="product-container">
        <h2 className="detail-product">Detalle del producto</h2>
        {
            Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p className="loading">Cargando...</p>
            )
        }</main>
    );
};