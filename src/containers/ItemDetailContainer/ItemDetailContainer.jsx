import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import "./itemDetailContainer.css"
import ItemDetail from "../ItemDetail/itemDetail"
import { db } from "../../Firebase/client"
import { doc, getDoc } from "firebase/firestore"



const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)




    useEffect(() => {

        const fetchProducto = async () => {
            try {
                const productoRef = doc(db, "products", id);
                const productoDoc = await getDoc(productoRef);

                if (productoDoc.exists()) {
                    setProducto({ id: productoDoc.id, ...productoDoc.data() });
                } else {
                    console.log("El producto no existe");
                }
            } catch (error) {
                console.error("Error fetching product: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();

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