

const ItemCount = ({ quantity, sumar, restar, addToCart }) => {
    return (
      <div>
        <div className="item-count">
          <button onClick={restar}>-</button>
          <p>{quantity}</p>
          <button onClick={sumar}>+</button>
        </div>
        <button className="card-button" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    );
  };
  
  export default ItemCount;