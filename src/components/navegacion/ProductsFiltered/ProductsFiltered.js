import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import "./ProductsFiltered.css";
import dataProducts from "../../productos";



const FilteredItems = ({title}) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()
   

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((resultsProducts) => {
            if(category) {
                resultsProducts.filter(resultProduct => {
                    if (resultProduct.category === category) {
                        setProducts(products => [...products, resultProduct])
                        setLoader(false)
                    }
                })
            }
            else{
                setProducts(resultsProducts)
                setLoader(false)
            }
        })
    }, [category])

    return (
        <>
            <h2 className='tituloCategoria'>{category ? category : title}</h2>
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
                                        <Item data={product}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                }
            </Container>
        </>
    )
}


export default FilteredItems