import React, { useState, useContext } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext);
    const [buyerInfo, setBuyerInfo] = useState({ name: '', phone: '', email: '' });
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
    };

    const handleCheckout = async () => {
        try {
            
            if (!buyerInfo.name || !buyerInfo.phone || !buyerInfo.email) {
                throw new Error('Por favor, completa todos los campos del formulario.');
            }

            const orderItems = cart.map((product) => ({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity,
            }));

            const order = {
                buyer: buyerInfo,
                items: orderItems,
                total: totalPrice(),
            };

            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');
            const docRef = await addDoc(ordersCollection, order);

            setOrderId(docRef.id);
            emptyCart();

            Swal.fire({
                title: '¡Compra exitosa!',
                text: `Tu orden ha sido procesada con éxito. Número de orden: ${docRef.id}`,
                icon: 'success',
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message || 'Hubo un error al procesar la orden. Por favor, inténtalo de nuevo.',
                icon: 'error',
            });
        }
    };

    return (
        <Container className="mt-5">
            <Col>
                <h1 className="mb-4 text-center">Checkout</h1>
            </Col>
            {orderId ? (
                <Col>
                    <p className='text-center'>Muchas gracias por confiar en nosotros! Recuerda seguirnos en nuestras redes sociales:</p>
                    <Col className='text-center'>
                        {/* Agrega aquí tus enlaces a redes sociales */}
                    </Col>
                    <hr />
                    <p className='text-center'>Tu orden ha sido procesada con éxito. Número de orden:</p>
                    <p className='text-center'>{orderId}</p>
                    <Col className='text-center'>
                        <Link to="/" className="btn btn-primary w-75 mt-2">
                            Volver al inicio
                        </Link>
                    </Col>
                </Col>
            ) : (
                <Form>
                    <Form.Label>Complete todos los datos del formulario</Form.Label>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Nombre" name="name" value={buyerInfo.name} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="tel" placeholder="Telefono" name="phone" value={buyerInfo.phone} onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" name="email" value={buyerInfo.email} onChange={handleInputChange} required />
                    </Form.Group>

                    <Button variant="success" onClick={handleCheckout}>
                        Finalizar Compra
                    </Button>
                </Form>
            )}
        </Container>
    );
};

export default CheckOut;
