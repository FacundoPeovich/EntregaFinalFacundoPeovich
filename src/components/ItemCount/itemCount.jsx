import { Button } from 'react-bootstrap';
import './ItemCount.css'

const ItemCount = ({ quantity, sumar, restar, addToCart }) => {
    return (
      <div>
        <div className="item-count">
          <Button variant="secondary" onClick={restar} className="rounded-2">-</Button>
          <p>{quantity}</p>
          <Button variant="secondary" onClick={sumar} className="rounded-2 ">+</Button>
        </div>
        <button className="card-button" onClick={addToCart}  >
          Agregar al carrito
        </button>
      </div>
    );
  };
  
  export default ItemCount;