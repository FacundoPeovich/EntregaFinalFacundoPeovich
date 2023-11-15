import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/cartContext';

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="float-end">
      <Button variant="dark" className="btn-sm">
        <FontAwesomeIcon icon={faShoppingCart} className="fs-4" />{' '}
        <Badge bg="danger">{cartQuantity()}</Badge>
        <span className="visually-hidden">Ver Carrito</span>
      </Button>
    </div>
  );
}

export default CartWidget;
