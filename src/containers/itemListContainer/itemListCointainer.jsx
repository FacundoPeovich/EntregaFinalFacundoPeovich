import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Item from '../../components/Item/Item'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const {nombreCategoria} = useParams()


    useEffect(() => {

        const url = nombreCategoria ? `https://fakestoreapi.com/products/category/${nombreCategoria}` : `https://fakestoreapi.com/products`

        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
            .catch(error => console.error(error))
            console.log(nombreCategoria)
    }, [nombreCategoria])

    return (

        <Container>
            <h2 className={styles.saludo}>{greeting}</h2>
            <Row>
                {products.length > 0 ? (
                    products.map((prod, index) => (
                        <div className="col-12 col-md-6 col-lg-4">
                            <Item producto={prod} key={index} />
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