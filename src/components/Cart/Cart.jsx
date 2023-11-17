import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, deleteProduct, emptyCart, totalPrice } = useContext(CartContext);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>Cart</h2>

            {cart.length > 0 ? (
                <>
                    {cart.map((product) => (
                        <Card key={product.id} className="mb-3" >
                            <Card.Img variant="top" src={product.image} alt={product.title} style={{ maxWidth: "100%", height: "50%" }} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Cantidad: {product.quantity}</Card.Text>
                                <Card.Text>Precio unitario: ${product.price}</Card.Text>
                                <Card.Text>Subtotal: ${product.price * product.quantity}</Card.Text>
                                <Button variant="danger" onClick={() => deleteProduct(product.id)}>
                                    Eliminar
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}

                    <div>
                        <p className="text-center"><strong>Total: ${totalPrice()}</strong></p>
                        <Button variant="primary" onClick={emptyCart}>
                            Vaciar carrito
                        </Button>
                        <Link to="/checkout">
                            <Button variant="success">
                                Finalizar Compra
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default Cart;