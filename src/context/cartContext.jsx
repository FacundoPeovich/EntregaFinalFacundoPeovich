import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [cart, setCart] = useState(initialCart);

    const addToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity };
        const isInCart = cart.find((product) => product.id === itemAdded.id);

        if (isInCart) {
            isInCart.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, itemAdded]);
        }
    };

    const deleteProduct = (productId) => {
        const newCart = cart.filter((product) => product.id !== productId);
        setCart(newCart);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const cartQuantity = () => {
        return cart.length;
    };

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const contextValue = {
        cart,
        addToCart,
        deleteProduct,
        emptyCart,
        cartQuantity,
        totalPrice,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
