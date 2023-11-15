import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import "./itemDetailContainer.css"
import ItemDetail from "../ItemDetail/itemDetail"



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
                           <ItemDetail producto={producto} />
                        </>

                    ) : (
                        <p>El producto con id:{id} no está disponible</p>
                    )}
                </>

            )}




        </>
    )
}

export default ItemDetailContainer