import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import dataProducts from '../../productos';


    const ItemListContainer = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const {category} = useParams()
   

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 1000)
    })

    useEffect(() => {
        getProducts.then((data) => {
            setProducts(data)
            setLoader(false)
        })
    }, [])

    
    return (
        <>
            <h2>Productos Destacados</h2>
            <Container className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                }

            </Container>
        </>
    )
}


export default ItemListContainer