import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)




    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setProducto(json)
                console.log(json)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))

    }, [id])



    return (
        <>

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <>
                    {producto ? (
                        <>
                            <div className="detail-container">
                                <h2>Producto: {producto?.title}</h2>
                                <div >
                                    <img className="product-image" src={producto?.image} alt="" />
                                </div>
                                <div className="product-description">
                                    <p>{producto?.description}</p>
                                </div>
                                <p>$ {producto?.price}</p>
                                <button className='card-button'>Añadir al carrito</button>
                            </div>
                        </>

                    ) : (
                        <p>El producto con id:{id} no existe</p>
                    )}
                </>

            )}




        </>
    )
}

export default ItemDetailContainer