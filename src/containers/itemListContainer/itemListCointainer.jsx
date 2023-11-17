import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Item from '../../components/Item/Item'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/client'
import { collection, getDocs, query, where, } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productsRef = collection(db, "products");

                const q = categoryId ? query(productsRef, where("categoryld", "==", categoryId)) : productsRef;

                const productosSnapshot = await getDocs(q);

                setProducts(
                    productosSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                );

            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProductos();
    }, [categoryId]);

    return (

        <Container>
            <h2 className={styles.saludo}>{greeting}</h2>
            <Row>
                {products.length > 0 ? (
                    products.map((prod, id) => (
                        <div className="col-12 col-md-6 col-lg-4">
                            <Item producto={prod} key={id} />
                        </div>
                    ))
                ) : (
                    <div>
                        <Spinner className="center-spinner-container" animation="border" role="status">
                            <span className="visually-hidden">Loading..</span>
                        </Spinner>
                    </div>
                )}
            </Row>
        </Container>

    )
}

export default ItemListContainer