import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import ItemCount from "../../components/ItemCount/itemCount";

const ItemDetail = ({ producto }) => {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState("");

    const handleAddToCart = () => {
        addToCart(producto, quantity);
        setSuccessMessage("Producto añadido al carrito con éxito");
        
    };

    const restar = () => {
        setQuantity(Math.max(quantity - 1, 1));
    };

    const sumar = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="detail-container">
            <h2>Producto: {producto?.title}</h2>
            <div>
                <img className="product-image" src={producto?.image} alt="" />
            </div>
            <div className="product-description">
                <p>{producto?.description}</p>
            </div>
            <p>$ {producto?.price}</p>
            <p>Stock {producto?.stock}</p>

            <ItemCount quantity={quantity} sumar={sumar} restar={restar} addToCart={handleAddToCart} />

            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );
};

export default ItemDetail;
