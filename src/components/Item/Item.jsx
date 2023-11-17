import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <>
            <Card className="product-card card-img-top" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    {/* <Card.Text>{producto.description}</Card.Text> */}
                    <Card.Text>${producto.price}</Card.Text>
                    <Card.Title>Stock:{producto.stock}</Card.Title>
                    <Link to={`/item/${producto.id}`}>
                        <Button variant="dark">Ver Producto</Button>
                    </Link>
                </Card.Body>
            </Card>

        </>
    );
};

export default Item
